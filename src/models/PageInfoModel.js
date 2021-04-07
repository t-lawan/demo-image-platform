export class PageInfoModel {
    id;
    title;
    description;
    showTicker;
    tickerImage;
    tickerText;
    twitterUrl;
    facebookUrl;
    instagramUrl;
    constructor(id,title, description, showTicker, tickerImage, tickerText, twitterUrl, facebookUrl, instagramUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tickerImage = tickerImage;
        this.tickerText = tickerText;
        this.twitterUrl = twitterUrl;
        this.facebookUrl = facebookUrl;
        this.instagramUrl = instagramUrl;
        this.showTicker = showTicker;
    }
}