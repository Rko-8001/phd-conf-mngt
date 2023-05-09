// importing google for using google apis
const { google } = require('googleapis');

// requiring express for using it
const express = require("express");
const router = express.Router();

const clientDrive = require('./configDriveClient');

// for searching a folder in google drive
async function searchDriveFolder(folderName) {
    const drive = clientDrive();

    const res = await drive.files.list({
        q: `name = '${folderName}' and trashed=false and mimeType = 'application/vnd.google-apps.folder'`,
        fields: 'files(id, name)',
        spaces: 'drive'
    });
    // console.log(res.data.files[0]);
    return res.data.files[0].id;
}

module.exports = searchDriveFolder;