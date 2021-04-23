export const PageUrls = {
    ABOUT: '/about',
    SUBSCRIBE: '/subscribe',
    ARCHIVE: '/archive',
    UPCOMING: '/upcoming'
}

export const getCorrectBackgroundImage = (pageInfo, currentProject) =>{
    console.log('SHOW CURRENT PROJECT', pageInfo)
    if(pageInfo.showCurrentProject) {
        return currentProject.backgroundImage.file.url;
    } else {
        return pageInfo.backgroundImage.file.url
    }
}