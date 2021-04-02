export class ContentSectionModel {
    audioTitle;
    audioDescription;
    audioFile;
    backgroundImage;
    text;
    type;
    mediaPartners;
    credits;
    imageGallery;
    constructor(audioTitle, audioDescription, audioFile, imageGallery, backgroundImage, text, type, mediaPartners, credits) {
        this.audioTitle = audioTitle;
        this.audioDescription = audioDescription;
        this.audioFile = audioFile;
        this.imageGallery = imageGallery;
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
    MEDIA_PARTNERS: 'MEDIA_PARTNERS',
    IMAGE_GALLERY: 'IMAGE_GALLERY',
    PDF: 'PDF',
    VIDEO: 'VIDEO',
    PROJECT_DESCRIPTION: 'PROJECT_DESCRIPTION'
}