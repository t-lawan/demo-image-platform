import { PageModel } from "../models/PageModel";
import { ContentSectionModel } from "../models/ContentSectionModel";

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

  static toModelArray = (query, modelConverter) => {
    const modelArray = []
    query.edges.forEach(contentfulModel => {
      let model = modelConverter(contentfulModel.node)
      modelArray.push(model)
    })
    return modelArray
  }
}
