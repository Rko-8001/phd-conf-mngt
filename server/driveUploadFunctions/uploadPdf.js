const fs = require('fs');

const express = require('express');
const clientDrive = require('./configDriveClient');

async function uploadPdf(filename, filePath, parentId) {
    try {
        const drive = clientDrive();

        const fileMetadata = {
            'name': filename,
            parents: [parentId]
        };

        const media = {
            mimeType: 'application/pdf',
            body: fs.createReadStream(filePath)
        };

        const res = await drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
        });
        fs.unlinkSync(filePath);

        return res.data.id;
    } catch (error) {
        fs.unlinkSync(filePath);
        console.log(error);
        return false;
    }
}

module.exports = uploadPdf;