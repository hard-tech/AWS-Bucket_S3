import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import uploadObject from "./aws-fonctions/uploadObject";
import getUrl from "./aws-fonctions/getUrl";
import "./css/App.css";

function App() {
  const [file, setFile] = useState(null);
  const [objectLink, setObjectLink] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const bucketName = process.env.REACT_APP_AWS_BUCKET_NAME;
  const fileS3Path = "5610944.png";

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  useEffect(() => {
    if (file) {
      // Convertir le fichier pour l'upload si nécessaire, par exemple en utilisant FileReader API pour les fichiers non textuels
      const fileBody = file; // Assurez-vous que ceci est le contenu attendu par AWS S3

      uploadObject(bucketName, fileBody, file.name)
        .then((data) =>
          setUploadMessage(`Objet ${file.name} uploadé avec succès.`)
        )
        .catch(
          (err) => (
            setUploadMessage(`Erreur lors de l'upload de l'objet`),
            console.log(`Erreur lors de l'upload de l'objet ${err.message}`)
          )
        );
    }
  }, [file]); // Dépendance à `file` pour déclencher l'effet

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">
          {" "}
          {file ? uploadMessage : "Déposez le fichier ici"}{" "}
        </h2>
        <FileUploader handleChange={handleChange} name="file" />
        <button
          onClick={() =>
            objectLink === null ? 
              getUrl(bucketName, fileS3Path)
                .then((data) => setObjectLink(data))
                .catch((err) => console.log(err))
              : 
              (window.location.href = objectLink)
          }
        >
          <a className="App-link">
            {objectLink === null ? 
              `Appler le fichier ${fileS3Path}`
              : 
              "Télécharger ICI"}
          </a>
        </button>
      </header>
    </div>
  );
}

export default App;
