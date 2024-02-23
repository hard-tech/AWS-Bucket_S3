# AWS S3 Management Project (Web interface)

This React application allows users to upload files to AWS S3 and retrieve secure, signed URLs for accessing these files. It leverages AWS SDK for JavaScript to interact with Amazon S3 services, providing a seamless file handling experience within the application.

## Getting Started

### Prerequisites

- Node.js installed on your system
- An AWS account with access to S3 services
- An S3 bucket set up for file storage

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies:
   ```bash
   npm install
   ```
3. Configure your AWS credentials by setting the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables.

### Running the Application

Start the application by running:
```bash
npm start
```
The React app will launch in your default web browser.

## Features

### File Upload

The `uploadObject.js` script handles the uploading of files to your configured S3 bucket. It uses the AWS SDK to authenticate and perform the upload operation.

### Accessing Files

The `getUrl.js` script generates signed URLs for securely accessing the uploaded files. These URLs are temporary and expire after a predefined duration, enhancing the security of your file storage.

## Environment Configuration

Ensure you have the following environment variables set:

- `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
- `REACT_APP_BUCKET_NAME`: The name of your S3 bucket.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is distributed under the MIT License. See the LICENSE file for more information. (Be sure to include a license file if this is your intention.)