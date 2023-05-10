
const clientDrive = require('./configDriveClient');

// for searching a folder in google drive
async function searchDriveFolder(folderName) {
    const drive = clientDrive();

    try {
        const res = await drive.files.list({
            q: `name = '${folderName}' and trashed=false and mimeType = 'application/vnd.google-apps.folder'`,
            fields: 'files(id, name)',
            spaces: 'drive'
        });

        // console.log(res.data.files[0]);
        return res.data.files[0].id;
    } catch (error) {
    
        return false;
    }
}

module.exports = searchDriveFolder;