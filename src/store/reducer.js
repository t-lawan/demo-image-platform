import { createStore } from "redux"
import {
  SET_PAGES,
  HIDE_LANDING_PAGE,
  IS_LOADED,
  SET_NAVBAR_LINKS,
  SET_PAGE_INFO
} from "./action"

const initalState = {
  pages: [],
  navbar_links: [],
  page_info: null,
  isLoaded: false,
  showLandingPage: true,
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_PAGES:
      return Object.assign({}, state, {
        pages: action.pages
      })
    case SET_NAVBAR_LINKS:
      return Object.assign({}, state, {
        navbar_links: action.navbar_links
      })
    case SET_PAGE_INFO:
      return Object.assign({}, state, {
        page_info: action.page_info
      })
    case IS_LOADED:
      return Object.assign({}, state, {
        isLoaded: true
      })
    case HIDE_LANDING_PAGE:
      return Object.assign({}, state, {
        showLandingPage: false
      })
    default:
      return state
  }
}

export const store = () =>
  createStore(
    reducer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
