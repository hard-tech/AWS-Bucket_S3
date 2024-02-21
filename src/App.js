import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import uploadObject from "./aws-fonctions/uploadObject";
import './css/App.css';

function App() {
  const [file, setFile] = useState(null);
  const bucketName = "together-document";

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  useEffect(() => {
    if (file) {
      // Convertir le fichier pour l'upload si nécessaire, par exemple en utilisant FileReader API pour les fichiers non textuels
      const fileBody = file; // Assurez-vous que ceci est le contenu attendu par AWS S3

      uploadObject(bucketName, fileBody, file.name)
        .then((data) => console.log(`Objet ${file.name} uploadé avec succès.`, data))
        .catch((err) => console.error(`Erreur lors de l'upload de l'objet :`, err));
    }
  }, [file]); // Dépendance à `file` pour déclencher l'effet

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Drop file here</h1>
        <FileUploader handleChange={handleChange} name="file" />
      </header>
    </div>
  );
}

export default App;