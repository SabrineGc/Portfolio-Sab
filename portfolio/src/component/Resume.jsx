import React, { useState, useEffect } from "react";
import pdf from "./Resume/Sabrine Gaceur Done (2).pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



export default function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);
  return (
    <section id="resume" >
    <div className="container2 px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap" style={{ justifyContent: "center", position: "relative" , display: "flex", flexDirection: "row" }} >
      <div fluid className="resume-section">

        <div className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>

        <div style={{ justifyContent: "center", position: "relative", display: "flex", flexDirection: "row" }}>
      <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
              style={{
                textDecoration: "none",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                transition: "background 0.3s ease",
              }}
      >
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}
