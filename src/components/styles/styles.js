import styled, { createGlobalStyle } from "styled-components"
import Swiss721 from "../../assets/fonts/Swis721_Lt_BT_Light.ttf"
import FreightBigBook from "../../assets/fonts/Freight_Big_Book.otf"
import AkzidenzGrotesk from "../../assets/fonts/Akzidenz-Grotesk.ttf"
import WhiteFaviconSVG from "../../assets/white-favicon.svg"

export const Colours = {
  green: " #00d200"
}


export const size = {
  mobileS: "320px",
  mobileM: "420px",
  mobileL: "520px",
  mobileSL: "568px",
  mobileXL: "736px",
  tablet: "768px",
  tabletL: "1023px",
  laptop: "1024px",
  laptopM: "1124px",
  laptopL: "1400px",
  desktopS: "1600px",
  desktopM: "1900px",
  desktop: "2260px",
}

export const Layers = {
  LANDING_PAGE: 5000,
  MOBILE_NAVBAR: 2000,
  TICKER: 1000,
  CAROUSEL_NAVIGATION: 1500
}
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Swiss721';
    src: url(${Swiss721}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

@font-face {
    font-family: 'AkzidenzGrotesk';
    src: url(${AkzidenzGrotesk}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

@font-face {
    font-family: 'FreightBigBook';
    src: url(${FreightBigBook}) format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: block;

}
    * {
  ${'' /* box-sizing: border-box;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${Colours.green};
  } */}
}

textarea:focus, input:focus{
    outline: none;
}
html,
body {
  font-family: 'FreightBigBook';
  width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-style: normal; 
  background: rgba(242, 242, 242, 0.9); 
  }
  h1,h2,h3,h4,h5,h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    color: black;
    }
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
  margin-bottom: 1.45rem;
  ${'' /* font-size: 2.5rem; */}
  font-size: 2.5vw;
  line-height: 1.1;
  @media (max-width: ${size.mobileL}) {
    ${'' /* font-size: 1.5rem; */}
    font-size: 1.5vw;
  }
}
h2 {
  margin-bottom: 1.45rem;
  ${'' /* font-size: 2rem; */}
  font-size: 2vw;
  line-height: 1.1;
}
h3 {
  margin-bottom: 1.45rem;
  ${'' /* font-size: 1.4rem; */}
  font-size: 1.4vw;
  line-height: 1.1;
}
h4 {
  margin-bottom: 1.45rem;
  ${'' /* font-size: 1rem; */}
  font-size: 1vw;
  line-height: 1.1;
}
h5 {
  margin-bottom: 1.45rem;
  ${'' /* font-size: 0.85028rem; */}
  font-size: 0.85028vw;
  line-height: 1.1;
}
h6 {
  margin-bottom: 1.45rem;
  ${'' /* font-size: 0.78405rem; */}
  font-size: 0.78405vw;
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
p, a, li, button{
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  ${'' /* font-size: 2rem; */}
  font-size: 2vw;
  line-height: 1.3;
  letter-spacing: 0.1rem;
  @media (max-width: ${size.mobileL}) {
    ${'' /* font-size: 1rem; */}
    font-size: 1vw;
  }
  
}
li {

}



  .active-link {
    color: ${Colours.green} !important;
  }

  .with-star{
    list-style-type: none;
  &:before {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    color: inherit;
    background-size: 20px;
    background-image: url(${WhiteFaviconSVG});
    background-repeat: no-repeat;
    margin-right: 10px;
    ${"" /* margin-bottom: -5px; */}
  }
  p {
  display: inline;
}
  }

  .slide {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .slick-prev {
    @media (max-width: ${size.mobileL}) {
      left: 0;
    }
  }
  .slick-next {
    @media (max-width: ${size.mobileL}) {
      right: 0;
    }
  }
  .slick-prev:before, .slick-next:before{
    color: ${Colours.green};
    font-family: 'Swiss721';
  }
  @keyframes marquee {
    0% {
        transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
        transform: translate3d(var(--move-final), 0, 0);
    }
}

@-moz-keyframes scroll-left {
            0% {
                -moz-transform: translateX(100%);
            }
            100% {
                -moz-transform: translateX(-100%);
            }
        }
        
        @-webkit-keyframes scroll-left {
            0% {
                -webkit-transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-100%);
            }
        }
        
        @keyframes scroll-left {
            0% {
                -moz-transform: translateX(100%);
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -moz-transform: translateX(-100%);
                -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
            }
        }
`

export const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
  /* margin-top: 2rem; */
`
