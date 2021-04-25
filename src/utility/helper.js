export const PageUrls = {
    ABOUT: '/about',
    SUBSCRIBE: '/subscribe',
    NEWSLETTER: '/newsletter',
    ARCHIVE: '/archive',
    UPCOMING: '/upcoming'
}

export const getCorrectBackgroundImage = (pageInfo, currentProject) =>{
    if(pageInfo.showCurrentProject) {
        return currentProject.backgroundImage.file.url;
    } else {
        return pageInfo.backgroundImage.file.url
    }
}