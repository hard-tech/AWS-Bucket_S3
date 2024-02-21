// imports

/**
 * Charger le SDK AWS pour JavaScript
 */
var AWS = require('aws-sdk');

/**
 * Configurer la région et les clés d'accès
 * @param {string} region la région AWS
 * @param {string} accessKeyId la clé d'accès ID
 * @param {string} secretAccessKey la clé secrète d'accès
 */
AWS.config.update({
    region: 'eu-west-3',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

/**
 * Initialiser le client S3 avec les clés d'accès stockées dans les variables d'environnement
 */
const s3 = new AWS.S3();

function getUrl(bucketName, keyFile) {
    /**
     * Définition des paramètres pour obtenir une URL signée
     * @param {string} Bucket le nom du bucket S3
     * @param {string} Key le chemin d'accès du fichier dans le bucket
     * @param {number} Expires la durée de validité de l'URL en secondes
     */
    var params = {
        Bucket: bucketName, // Remplacer par le nom de votre bucket
        Key: keyFile, // Remplacer par le chemin d'accès du fichier dans le bucket
        Expires: 60 * 5 // Durée de validité de l'URL en secondes (ici, 5 minutes)
    };

    /**
     * Générer l'URL signée
     * @param {string} operation l'opération à effectuer sur le fichier S3 (ex: 'getObject')
     * @param {object} params les paramètres de l'opération
     * @param {function} cb la fonction de rappel avec les erreurs et l'URL signée
     */

    // Retourne une promesse
    return new Promise((resolve, reject) => {
        s3.getSignedUrl('getObject', params, (err, url) => {
            if (err) {
                reject(err);
            } else {
                resolve(url);
            }
        });
    });
}

export default getUrl;