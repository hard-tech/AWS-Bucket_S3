# AWS S3 Management Project (Node.js CLI)

This Node.js script provides a command-line interface (CLI) for interacting with Amazon S3. It supports creating buckets, generating signed URLs for objects, and uploading objects to a specified bucket. The script utilizes the AWS SDK for JavaScript.

## Requirements

- Node.js must be installed on your machine.
- An AWS account with necessary permissions to create buckets, upload objects, and generate signed URLs.
- AWS access keys (Access Key ID and Secret Access Key) must be locally configured in the `.env` file, with variables set as follows:
  - `AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY"`
  - `AWS_SECRET_ACCESS_KEY="YOUR_SECRET_ACCESS_KEY"`

## Configuration

1. Clone or download this repository to your machine.
2. Install dependencies in the project folder with `npm install` or `yarn install`.
3. Ensure your AWS access keys are correctly configured.

## Usage

The script supports three main commands:

### 1. Create a Bucket

To create a bucket, use the `createbucket` command followed by the bucket name.

### 2. Get a Signed URL

To obtain a signed URL for a specific object in a bucket, use the `geturl` command followed by the bucket name and object path.

### 3. Upload an Object

To upload an object to a bucket, use the `uploadobject` command followed by the bucket name, local file name, and the object path/name in the bucket. The file must be located in the `uploadDocument` folder.

## Examples

- Creating a bucket, obtaining a signed URL for an object, and uploading an object to a bucket are illustrated with sample commands.

## Security

- Never store your AWS access keys directly in the source code. Use environment variables or the AWS configuration file instead.
- Ensure appropriate IAM policies are in place for users and roles interacting with AWS services.

## Licence

Ce projet est distribué sous la licence MIT. Consultez le fichier `LICENSE` pour plus d'informations. (Veillez à inclure un fichier de licence si cela est votre intention.)

---

Ce README offre les informations essentielles pour débuter l'utilisation du script. N'hésitez pas à l'adapter ou l'étendre en fonction des particularités de votre projet ou de besoins additionnels.
