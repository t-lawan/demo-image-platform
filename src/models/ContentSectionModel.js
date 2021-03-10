export class ContentSectionModel {
    audioFile;
    backgroundImage;
    text;
    type;
    constructor(audioFile,backgroundImage, text, type) {
        this.audioFile = audioFile;
        this.backgroundImage = backgroundImage;
        this.text = text;
        this.type = type;
    }
}

export const ContentSectionModelType = {
    TEXT: 'TEXT',
    AUDIO: 'AUDIO',
    BACKGROUND_IMAGE: 'BACKGROUND_IMAGE'
}