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
    email;
    navbarImage;
    constructor(id,title, description, showTicker, tickerImage, tickerText, twitterUrl, facebookUrl, instagramUrl, email, loadingVideoUrl, showCurrentProject, sharingImage, backgroundImage, navbarImage) {
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
        this.showCurrentProject = showCurrentProject;
        this.sharingImage = sharingImage;
        this.backgroundImage = backgroundImage;
        this.email = email;
        this.navbarImage = navbarImage;
    }
}