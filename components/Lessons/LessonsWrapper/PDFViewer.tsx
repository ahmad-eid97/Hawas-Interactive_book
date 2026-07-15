"use client";
import React from 'react'
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

function PDFViewer({ docs }: {
  docs: {
    uri: string;
    fileType: string;
  }[]
}) {
  return (
    <DocViewer
      pluginRenderers={DocViewerRenderers}
      documents={docs}
    />
  )
}

export default PDFViewer