// Chargement des variables d'environnement à partir du fichier .env pour les environnements de développement
const AWS = require('aws-sdk');

// Configuration du SDK AWS avec les clés d'accès et la région
AWS.config.update({
    region: 'eu-west-3',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

/**
 * Fonction pour uploader un fichier à un bucket S3.
 * 
 * @param {string} bucketName - Nom du bucket S3
 * @param {Buffer|Stream} file - Contenu du fichier à uploader
 * @param {string} objectName - Nom sous lequel le fichier sera enregistré dans le bucket
 * @returns {Promise} - Promesse résolue avec les données de réponse de l'upload ou rejetée avec une erreur
 */
function uploadObject(bucketName, file, objectName) {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: bucketName,
            Key: objectName,
            Body: file // Assurez-vous que 'file' est un Buffer, un Stream, ou un objet similaire accepté par AWS SDK
        };

        s3.upload(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

export default uploadObject;