const {google} = require('googleapis');
const express = require("express");
const router = express.Router();
const clientDrive = require('./configDriveClient');


// function for creating a folder in google drive
async function createDriveFolder(folderName, parentId){
    const drive = clientDrive();

    const fileMetadata = {
        'name': folderName,
        'mimeType': 'application/vnd.google-apps.folder',
        'parents': [parentId]
    };

    const res = await drive.files.create({
        resource: fileMetadata,
        fields: 'id'
    });

    return res.data.id;
}

module.exports = createDriveFolder;