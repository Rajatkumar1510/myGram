import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Modals from "./components/Modals";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modals
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
