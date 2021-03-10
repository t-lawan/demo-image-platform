export class PageModel {
    id;
    title;
    url;
    content;
    hasHorizontalScroll;
    constructor(id,title, url, hasHorizontalScroll, content) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.content = content;
        this.hasHorizontalScroll = hasHorizontalScroll;
    }
}