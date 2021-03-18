export const SET_PAGES = "SET_PAGES";
export const SET_PROJECTS = "SET_PROJECTS";
export const SET_PAGE_INFO = "SET_PAGE_INFO";
export const SET_NAVBAR_LINKS = "SET_NAVBAR_LINKS";

export const IS_LOADED = "IS_LOADED";
export const HIDE_LANDING_PAGE = "HIDE_LANDING_PAGE";


export const setProjects = (projects) => {
    return {
        type: SET_PROJECTS,
        projects: projects
    }
}


export const setPages = (pages) => {
    return {
        type:SET_PAGES,
        pages: pages
    }
}

export const setPageInfo = (page_info) => {
    return {
        type: SET_PAGE_INFO,
        page_info: page_info
    }
}

export const setNavbarLinks = (navbar_links) => {
    return {
        type:SET_NAVBAR_LINKS,
        navbar_links: navbar_links
    }
}

export const isLoaded = () => {
    return {
        type: IS_LOADED
    }
}


export const hideLandingPage = () => {
    return {
        type: HIDE_LANDING_PAGE
    }
}