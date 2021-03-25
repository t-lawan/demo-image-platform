export class ProjectModel {
    id;
    title;
    artist;
    startDate;
    endDate;
    type;
    content;
    constructor(id,title, artist, startDate, endDate, type, content) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
        this.content = content;
    }
}

export const ProjectType = {
    ARCHIVE: 'ARCHIVE',
    UPCOMING: 'UPCOMING',
    CURRENT: 'CURRENT'
}