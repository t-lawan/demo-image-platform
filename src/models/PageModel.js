export class PageModel {
    id;
    title;
    url;
    content;
    hasHorizontalScroll;
    backgroundImage;
    constructor(id,title, url, hasHorizontalScroll, content, backgroundImage = null) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.content = content;
        this.hasHorizontalScroll = hasHorizontalScroll;
        this.backgroundImage = backgroundImage;
    }
}