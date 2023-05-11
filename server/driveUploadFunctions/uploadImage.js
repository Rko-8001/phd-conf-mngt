const express = require("express");
const createClientDrive = require('./configDriveClient');
const fs = require('fs');
const stream = require("stream"); // Added

async function uploadImageDrive(imageData, parentId, email, name) {
    const clientDrive = createClientDrive();

    const fileName = name;
    const fileMetadata = {
        name: fileName, // Replace with your desired file name
        parents: [parentId], // Replace with the ID of the destination folder
    };

    const uploadImg = imageData.split(/,(.+)/)[1];
    const buf = new Buffer.from(uploadImg, "base64"); // Added
    const bs = new stream.PassThrough(); // Added
    bs.end(buf); // Added

    const media = {
        mimeType: 'image/jpeg',
        body: bs,
    };

    try {
        const response = await clientDrive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id',
        });

        // console.log('File uploaded successfully. File ID:', response.data.id);
        return response.data.id;
    } catch (error) {
        console.error('Error uploading file:', error);
        return null;
    }
}

module.exports = uploadImageDrive;