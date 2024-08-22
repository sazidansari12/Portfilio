import React from 'react'

const DownloadResume = () => {
    const handleDownload = () => {
      
      const pdfUrl = 'https://drive.google.com/drive/my-drive';
  
 
      const link = document.createElement('a');
      link.href = pdfUrl;
  
      link.download = 'downloaded-file.pdf';
  
      
      document.body.appendChild(link);
  
      link.click();
  
      document.body.removeChild(link);
    };
  
    return (
      <button onClick={handleDownload}>Download PDF</button>
    );
  };
  
  export default DownloadResume;