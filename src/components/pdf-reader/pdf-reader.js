import React, { useState } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { Page } from 'react-pdf';
import { pdfjs } from "react-pdf";
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import Whitehead from '../../assets/Whitehead.pdf'

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReaderWrapper = styled.div`
    /* background: red; */
    display: grid;
    grid-template-columns: 2.5fr 95fr 2.5fr;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

const StyledPage = styled(Page)`
    padding: 0 2rem;
`
const PDFControl = styled.div``

const Control = styled.p`
  opacity: ${props => (props.hide ? 0 : 1)};
  cursor: pointer;
  visibility: ${props => (props.show ? 'visible': 'hidden')};
`;
function PDFReader(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasLoaded, setHasLoaded] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    if(!hasLoaded){
      setHasLoaded(true);
    }
  }
  const isLast = () => {
    return pageNumber === numPages;
  };

  const isFirst = () => {
    return pageNumber === 1;
  };

  const previousPage = () => {
    if (numPages) {
        if (pageNumber > 1) {
          setPageNumber(pageNumber - 1);
        }
      }
  };

  const nextPage = () => {
    if (numPages) {
      if (pageNumber < numPages) {
        setPageNumber(pageNumber + 1);
      }
    }
  };

  return (
    <PDFReaderWrapper>
        <PDFControl>
            <Control show={hasLoaded && !isFirst()} onClick={() => previousPage()}> Back</Control>
        </PDFControl>
      <Document
        file={props.file}
        renderMode={"svg"}
        onLoadSuccess={onDocumentLoadSuccess}

        
      >
        <StyledPage pageNumber={pageNumber} />
      </Document>
      <PDFControl>
         <Control show={hasLoaded && !isLast()} onClick={() => nextPage()}> Next</Control>
          
      </PDFControl>
      {/* <p>Page {pageNumber} of {numPages}</p> */}
    </PDFReaderWrapper>
  );
}

const mapStateToProps = state => {
    return {
      currentProject: state.currentProject,
      pageInfo: state.page_info
    }
  }
  
  export default connect(
    mapStateToProps,
    null
  )(PDFReader)
  