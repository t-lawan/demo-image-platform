export class PageInfoModel {
    id;
    title;
    description;
    tickerImage;
    tickerText;
    constructor(id,title, description, tickerImage, tickerText) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tickerImage = tickerImage;
        this.tickerText = tickerText;
    }
}