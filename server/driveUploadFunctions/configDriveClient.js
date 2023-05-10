// importing google for using google apis
const { google } = require('googleapis');

// requiring express for using it
const express = require("express");


require('dotenv').config();

const clientId = process.env.GOOGLE_DRIVE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
const redirectUrl = process.env.GOOGLE_DRIVE_CLIENT_REDIRECT_URL;
const refreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN;

// console.log(clientId);
// console.log(clientSecret);
// console.log(redirectUrl);
// console.log(refreshToken);

const createDriveClient = () => {
    const client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl);

    client.setCredentials({ refresh_token: refreshToken });

    return google.drive({
        version: 'v3',
        auth: client,
    });
}

module.exports = createDriveClient;