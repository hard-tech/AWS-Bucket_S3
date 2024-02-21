// imports
require('dotenv').config();

// uploadObject.js
const AWS = require('aws-sdk');
const fs = require('fs');

// Configurer AWS SDK
AWS.config.update({
    region: 'eu-west-3',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

/**
 * Fonction pour uploader un fichier à un bucket S3.
 * 
 * @param {string} bucketName Nom du bucket S3
 * @param {string} objectName Nom sous lequel le fichier sera enregistré dans le bucket
 * @param {string} fileName Nom du fichier local dans le dossier uploadDocument
 */
function uploadObject(bucketName, fileName, objectName) {
    return new Promise((resolve, reject) => {
        // Lire le contenu du fichier
        fs.readFile("./uploadDocument/" + fileName, (err, fileContent) => {
            if (err) {
                reject(err);
                return;
            }

            // Paramètres pour l'upload
            const params = {
                Bucket: bucketName,
                Key: objectName,
                Body: fileContent
            };

            // Uploader le fichier
            s3.upload(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    });
}

module.exports.uploadObject = uploadObject;
