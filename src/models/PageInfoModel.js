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
    loadingVideoUrl;
    constructor(id,title, description, showTicker, tickerImage, tickerText, twitterUrl, facebookUrl, instagramUrl, loadingVideoUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tickerImage = tickerImage;
        this.tickerText = tickerText;
        this.twitterUrl = twitterUrl;
        this.facebookUrl = facebookUrl;
        this.instagramUrl = instagramUrl;
        this.showTicker = showTicker;
        this.loadingVideoUrl = loadingVideoUrl;
    }
}