// imports
require('dotenv').config();

/**
 * Charger le SDK AWS pour JavaScript
 */
var AWS = require('../node_modules/aws-sdk');

// Configurer AWS SDK
AWS.config.update({
    region: 'eu-west-3',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

function createBucket(bucketName) {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: bucketName,
            CreateBucketConfiguration: {
                // Spécifiez la région si nécessaire, eu-west-3 par exemple
                LocationConstraint: "eu-west-3"
            }
        };

        s3.createBucket(params, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = { createBucket };