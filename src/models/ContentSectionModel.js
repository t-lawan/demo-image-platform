export class ContentSectionModel {
    audioFile;
    backgroundImage;
    text;
    type;
    mediaPartners;
    credits;
    constructor(audioFile,backgroundImage, text, type, mediaPartners, credits) {
        this.audioFile = audioFile;
        this.backgroundImage = backgroundImage;
        this.text = text;
        this.type = type;
        this.mediaPartners = mediaPartners;
        this.credits = credits;
    }
}

export const ContentSectionModelType = {
    TEXT: 'TEXT',
    AUDIO: 'AUDIO',
    BACKGROUND_IMAGE: 'BACKGROUND_IMAGE',
    SUBSCRIPTION_FORM: 'SUBSCRIPTION_FORM',
    UPCOMING_PROJECTS: 'UPCOMING_PROJECTS',
    ARCHIVE_PROJECTS: 'ARCHIVE_PROJECTS',
    CREDITS: 'CREDITS',
    MEDIA_PARTNERS: 'MEDIA_PARTNERS'
}