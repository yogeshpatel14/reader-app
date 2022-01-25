import React, { useState, useEffect, Fragment } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FileOutlined } from "@ant-design/icons";
import { CustomButton } from "../common/button";

function PdfReader(props) {
  const { filePath } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const renderPdfDocument = () => {
    if (filePath !== null) {
      return (
        <Fragment>
          <Document
            options={options}
            file={filePath}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page height={600} pageNumber={pageNumber} />
          </Document>
          <div className="pdf-control">
            <CustomButton
              onClick={() => {
                if (pageNumber > 1) {
                  setPageNumber((pageNumber) => pageNumber - 1);
                }
              }}
              title="Previous"
            />
            <label>
              Page {pageNumber} of {numPages}
            </label>
            <CustomButton
              onClick={() => {
                if (pageNumber < numPages) {
                  setPageNumber((pageNumber) => pageNumber + 1);
                }
              }}
              title="Next"
            />
          </div>
        </Fragment>
      );
    }
  };

  return (
    <div className="div-pdf">
      <h2>
        <FileOutlined style={{ color: "#550CB1" }} />
        {filePath !== null ? filePath.name.replace(".pdf", "") : "PDF reader"}
      </h2>
      {renderPdfDocument()}
    </div>
  );
}

export default PdfReader;
