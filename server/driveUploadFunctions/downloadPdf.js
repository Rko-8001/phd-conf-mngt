
const clientDrive = require('./configDriveClient');
const fs = require('fs');
const path = require('path');

// for downloading a pdf file from google drive
async function downloadDrivePdf(fileId, filename) {
    try {
        // Retrieve the file metadata using the provided file ID
        // const tempPath = path.join(__dirname, 'temp', filename);

        // const res = await clientDrive.driveClient.files.get({
        //     requestBody: {
        //         fileId: fileId,
        //     },
        //     media: {
        //         body: fs.createWriteStream(filePath)
        //     },
        // });

        
        const file = await clientDrive.files.get({
            fileId: fileId,
            alt: 'media',
          });
        return file.data


    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = downloadDrivePdf;