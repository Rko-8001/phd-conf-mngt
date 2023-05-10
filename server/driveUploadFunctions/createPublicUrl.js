const fs = require('fs');

const createDriveClient = require('./configDriveClient');

async function createPublicUrl(fileId) {

    try {
        const clientDrive = createDriveClient();
        console.log(fileId);
        const resp = await clientDrive.permissions.create({
            fileId: fileId,
            resource: {
                role: 'reader',
                type: 'anyone',
            },
            fields: 'id',
        });

        const response = await clientDrive.files.get({ 
            fileId: fileId,
            fields: 'webViewLink, webContentLink',
        });

        return response.data.webContentLink;

    } catch (error) {
        console.log(error);
        return null;;
    }
}

module.exports = createPublicUrl;