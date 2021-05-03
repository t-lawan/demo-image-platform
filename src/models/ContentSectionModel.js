export class ContentSectionModel {
    blackAudioTitle;
    whiteAudioTitle;
    audioDescription;
    audioFile;
    backgroundImage;
    text;
    type;
    mediaPartners;
    credits;
    imageGallery;
    pdfFile;
    pdfImage;
    pdfTitle;
    pdfDescription;
    backgroundImages;
    videoText;
    videoUrl;
    videoBackgroundImage;

    constructor(whiteAudioTitle,blackAudioTitle, audioDescription, audioFile, imageGallery, backgroundImage, backgroundImages, text, type, mediaPartners, credits, pdfFile, pdfImage, pdfTitle, pdfDescription, videoText, videoUrl, videoBackgroundImage) {
        this.blackAudioTitle = whiteAudioTitle;
        this.whiteAudioTitle = blackAudioTitle;
        this.audioDescription = audioDescription;
        this.audioFile = audioFile;
        this.imageGallery = imageGallery;
        this.backgroundImage = backgroundImage;
        this.backgroundImages = backgroundImages;
        this.text = text;
        this.type = type;
        this.mediaPartners = mediaPartners;
        this.credits = credits;
        this.pdfFile = pdfFile;
        this.pdfImage = pdfImage;
        this.pdfTitle = pdfTitle;
        this.pdfDescription = pdfDescription;
        this.videoText = videoText;
        this.videoUrl = videoUrl;
        this.videoBackgroundImage = videoBackgroundImage;
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
    PROJECT_DESCRIPTION: 'PROJECT_DESCRIPTION',
    ABOUT_TEXT: 'ABOUT_TEXT',
    JUMBOTRON: 'JUMBOTRON'
}