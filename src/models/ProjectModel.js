export class ProjectModel {
    id;
    title;
    artist;
    startDate;
    endDate;
    type;
    constructor(id,title, artist, startDate, endDate, type) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
    }
}

export const ProjectType = {
    ARCHIVE: 'ARCHIVE',
    UPCOMING: 'UPCOMING'
}