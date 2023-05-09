const { google } = require('googleapis');
const express = require("express");
const router = express.Router();
const clientDrive = require('./configDriveClient');


// function for creating a folder in google drive
// pass parentId for nested folders and null for root folder
async function createDriveFolder(folderName, parentId) {
    try {

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
    } catch (error) {
        return false;
    }
}

module.exports = createDriveFolder;