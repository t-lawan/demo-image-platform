import React, { useState } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { Document, Page } from 'react-pdf';
import { pdfjs } from "react-pdf";
import Whitehead from '../../assets/Whitehead.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReaderWrapper = styled.div`
    /* background: red; */
    display: grid;
    grid-template-columns: 2.5fr 95fr 2.5fr;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledPage = styled(Page)`
    padding: 0 2rem;
`
const PDFControl = styled.div``

const Control = styled.p`
  opacity: ${props => (props.hide ? 0 : 1)};
  cursor: pointer;
`;
function PDFReader() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
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
            <Control onClick={() => previousPage()}> Back</Control>
        </PDFControl>
      <Document
        file={Whitehead}
        renderMode={"svg"}
        onLoadSuccess={onDocumentLoadSuccess}
        
      >
        <StyledPage pageNumber={pageNumber} />
      </Document>
      <PDFControl>
         <Control onClick={() => nextPage()}> Next</Control>
          
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
  