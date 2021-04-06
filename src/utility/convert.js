import { PageModel } from "../models/PageModel";
import { ContentSectionModel } from "../models/ContentSectionModel";
import { PageInfoModel } from "../models/PageInfoModel";
import { ProjectModel } from "../models/ProjectModel";

export class Convert {

  static toPageModel = contentfulModel => {
    let content = []
    if(contentfulModel.contentSections){
      contentfulModel.contentSections.forEach((cn) => {
        content.push(Convert.toContentSectionModel(cn));
      })
    }

    return new PageModel(
      contentfulModel.contentful_id,
      contentfulModel.title, 
      contentfulModel.url, 
      contentfulModel.hasHorizontalScroll,
      content,
      contentfulModel.backgroundImage
    )
  }

  static toContentSectionModel = contentfulModel => {
    return new ContentSectionModel(
      contentfulModel.audioTitle,
      contentfulModel.audioDescription ? contentfulModel.audioDescription.audioDescription : null,
      contentfulModel.audioFile,
      contentfulModel.imageGallery,
      contentfulModel.backgroundImage,
      contentfulModel.text,
      contentfulModel.type,
      contentfulModel.mediaPartners,
      contentfulModel.credits, 
      contentfulModel.pdf? contentfulModel.pdf.file.url : null,
      contentfulModel.pdfImage,
      contentfulModel.pdfTitle,
      contentfulModel.pdfDescription ? contentfulModel.pdfDescription.pdfDescription : null,
    )
  }

  static toProjectModel = contentfulModel => {
    let content = []
    if(contentfulModel.contentSection){
      contentfulModel.contentSection.forEach((cn) => {
        content.push(Convert.toContentSectionModel(cn));
      })
    }
    return new ProjectModel(
      contentfulModel.contentful_id,
      contentfulModel.title,
      contentfulModel.artist,
      contentfulModel.startDate,
      contentfulModel.endDate,
      contentfulModel.type,
      content,
      contentfulModel.backgroundImage,
    )
  }

  static toPageInfoModel = contentfulModel => {
    return new PageInfoModel(
      contentfulModel.contentful_id,
      contentfulModel.title,
      contentfulModel.description.description,
      contentfulModel.tickerImage,
      contentfulModel.tickerText.tickerText,
      contentfulModel.twitterUrl,
      contentfulModel.facebookUrl,
      contentfulModel.instagramUrl,
    )
  }

  static toModelArray = (query, modelConverter) => {
    const modelArray = []
    query.edges.forEach(contentfulModel => {
      let model = modelConverter(contentfulModel.node)
      modelArray.push(model)
    })
    return modelArray
  }
}
