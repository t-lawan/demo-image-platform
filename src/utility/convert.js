import { PageModel } from "../models/PageModel";
import { ContentSectionModel } from "../models/ContentSectionModel";
import { PageInfoModel } from "../models/PageInfoModel";

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
      contentfulModel.audioFile,
      contentfulModel.backgroundImage,
      contentfulModel.text,
      contentfulModel.type,
    )
  }

  static toPageInfoModel = contentfulModel => {
    return new PageInfoModel(
      contentfulModel.contentful_id,
      contentfulModel.title,
      contentfulModel.description.description,
      contentfulModel.tickerImage,
      contentfulModel.tickerText.tickerText,
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
