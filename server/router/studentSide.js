const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')


// connection established
require('../mongoDb/connection');

// requiring user Schema 
const User = require('../model/userSchema');
const AppData = require('../model/applicationData');
const AppDataAbroad = require('../model/applicationAbroad');

const { genAppToken } = require('../tokens/generateToken');
const searchDriveFolder = require('../driveUploadFunctions/searchFolder');
const createDriveFolder = require('../driveUploadFunctions/createFolder');
const uploadPdf = require('../driveUploadFunctions/uploadPdf');

// credentials import
require('dotenv').config();

// student info loading    
router.post('/studentInfoLoading', async (req, res) => {

    const bearerHeader = await req.headers["authorization"];
    if (!bearerHeader) {
        return res.status(422).json({ error: "No Header" });
    }
    var bearerToken = bearerHeader.split(" ")[1];

    // console.log( "Student Side Token: " + bearerToken);

    if (!bearerToken) {
        return res.status(422).json({ error: "No Token" });
    }

    // verfiy the token
    var decode
    try {
        decode = jwt.verify(bearerToken, process.env.JWT_SECRET)
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }
    //setting email and role from decode
    const role = decode.role;
    const email = decode.email;

    // fetching data from mongo
    try {
        const student = await User.findOne({ email: email });
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(420).json({ message: "bad" });
    }
});

router.post('/updateInfo', async (req, res) => {

    const bearerHeader = await req.headers["authorization"];
    if (!bearerHeader) {
        return res.status(422).json({ error: "No Header" });
    }
    var bearerToken = bearerHeader.split(" ")[1];

    // console.log( "Student Side Token: " + bearerToken);

    if (!bearerToken) {
        return res.status(422).json({ error: "No Token" });
    }
    // verfiy the token
    var decode
    try {
        decode = jwt.verify(bearerToken, process.env.JWT_SECRET)
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }


    //setting email and role from decode
    const role = decode.role;
    const email = decode.email;
    const { mobileNo } = req.body;

    try {
        await User.updateOne({ email: email }, {
            mobileNo: mobileNo
        });

        return res.status(200).json({ message: "Updated" });
    } catch (error) {
        console.log(error);
        return res.status(422).json({ message: "Erorr" });
    }

})

// submitting application 
router.post('/studentApplicationSubmit', async (req, res) => {

    var {
        email, entryNo,
        status, mobileNo,
        bankAccountNo, ifscCode,
        nameOfConference, venueOfConference, paperInConference,
        conferenceStarts, conferenceEnds,
        financialSupport,
        advances, finances,
        coaa, coaba, cocba,
        studentLeaveStarts, studentLeaveEnds, numberOfDays } = req.body;

    var { copyOfAbstract, copyOfConferenceBrochure, copyOfAcceptance } = req.files;

    finances = JSON.parse(finances);


    console.log("Name of Conferenceii: " + nameOfConference);

    try {

        // searching for student folder
        searchDriveFolder(entryNo).then((parentID) => {
            console.log("Parent Id: " + parentID);
            // creating application folder inside student folder
            var applicationFolderName = conferenceStarts + "-" + conferenceEnds + "__" + nameOfConference; // name of application folder
            const applicationFolderId = createDriveFolder(applicationFolderName, parentID).then((result) => {
                console.log("Application Folder Id: " + result);

                uploadPdf("copyOfAbstract.pdf", copyOfAbstract.tempFilePath, applicationFolderId).then((abstractFileId) => {
                    console.log("Abstract File Id: " + abstractFileId);


                    uploadPdf("copyOfConferenceBrochure.pdf", copyOfConferenceBrochure.tempFilePath, applicationFolderId)
                        .then((brochureFileId) => {
                            console.log("Brochure File Id: " + brochureFileId);


                            uploadPdf("copyOfAcceptance.pdf", copyOfAcceptance.tempFilePath, applicationFolderId)
                                .then((acceptanceFileId) => {
                                    console.log("Acceptance File Id: " + acceptanceFileId);

                                    // saving data to mongo
                                    const data = new AppData(
                                        {
                                            email, status,
                                            mobileNo,
                                            bankAccountNo, ifscCode,
                                            nameOfConference, venueOfConference, paperInConference,
                                            conferenceStarts, conferenceEnds,
                                            financialSupport,
                                            advances, finances,
                                            coaa, coaba, cocba,
                                            numberOfDays,
                                            studentLeaveStarts, studentLeaveEnds,
                                            abstractFileId, brochureFileId, acceptanceFileId
                                        });
                                    data.save()
                                        .then((result) => {
                                            console.log("Application Submitted..");
                                            return res.status(200).json({ message: "Application Submitted.." });
                                        }).catch((error) => {
                                            console.log(error);
                                            return res.status(422).json({ message: "Can't submit application. Try Again.." })
                                        }
                                        );

                                }).catch((error) => {
                                    console.log(error);
                                    return res.status(422).json({ message: "Can't submit application. Try Again.." })
                                }
                                );

                        }).catch((error) => {
                            console.log(error);
                            return res.status(422).json({ message: "Can't submit application. Try Again.." })
                        }
                        );

                }).catch((error) => {
                    console.log(error);
                    return res.status(422).json({ message: "Can't submit application. Try Again.." })
                }
                );

            }).catch((error) => {
                console.log(error);
                return res.status(422).json({ message: "Can't submit application. Try Again.." })
            }
            );

        }).catch((error) => {
            console.log(error);
            return res.status(422).json({ message: "Can't submit application. Try Again.." })
        }
        );
    } catch (error) {
        console.log(error);
        return res.status(422).json({ message: "Can't submit application. Try Again.." })
    }

});

// submitting application abroad 
router.post('/studentApplicationSubmitAbroad', async (req, res) => {

    var {
        email, entryNo, mobileNo,
        status, type,
        bankAccountNo, ifscCode,
        nameOfConference, venueOfConference,
        nameOfSociety, societyRecognized, reasonToAttend,
        paperInConference, fundingSources,
        purposeOfVisit, justification, sponsorship,
        financialSupport, advances,
        conferenceStarts, conferenceEnds,
        studentLeaveStarts, studentLeaveEnds,
        finances, flightDetails
    } = req.body;

    const {
        invitationLetterAdditional, letterOfInvitation,
        conferenceBrochure, copyOfAbstract,
        accomodationCost, acceptanceOfPaper
    } = req.files

    finances = JSON.parse(finances);
    flightDetails = JSON.parse(flightDetails);

    try {
        // searching for student folder
        console.log("Entry No: " + entryNo);
        searchDriveFolder(entryNo).then((parentID) => {
            console.log("Parent Id: " + parentID);
            const parentId = parentID;
            // creating application folder inside student folder
            var applicationFolderName = conferenceStarts + "-" + conferenceEnds + "__" + nameOfConference; // name of application folder
            const applicationFolderId = createDriveFolder(applicationFolderName, parentId).then((result) => {
                console.log("Application Folder Id: " + result);

                uploadPdf("invitationLetterAdditional.pdf", invitationLetterAdditional.tempFilePath, applicationFolderId)
                    .then((invitationLetterAdditionalFileId) => {
                        console.log("Invitation Letter Additional File Id: " + invitationLetterAdditionalFileId);

                        uploadPdf("letterOfInvitation.pdf", letterOfInvitation.tempFilePath, applicationFolderId)
                            .then((letterOfInvitationFileId) => {
                                console.log("Letter Of Invitation File Id: " + letterOfInvitationFileId);
                                uploadPdf("conferenceBrochure.pdf", conferenceBrochure.tempFilePath, applicationFolderId)
                                    .then((conferenceBrochureFileId) => {
                                        console.log("Conference Brochure File Id: " + conferenceBrochureFileId);
                                        uploadPdf("copyOfAbstract.pdf", copyOfAbstract.tempFilePath, applicationFolderId)
                                            .then((copyOfAbstractFileId) => {
                                                console.log("Copy Of Abstract File Id: " + copyOfAbstractFileId);
                                                uploadPdf("accomodationCost.pdf", accomodationCost.tempFilePath, applicationFolderId)
                                                    .then((accomodationCostFileId) => {
                                                        console.log("Accomodation Cost File Id: " + accomodationCostFileId);
                                                        uploadPdf("acceptanceOfPaper.pdf", acceptanceOfPaper.tempFilePath, applicationFolderId)
                                                            .then((acceptanceOfPaperFileId) => {
                                                                console.log("Acceptance Of Paper File Id: " + acceptanceOfPaperFileId);

                                                                const data = new AppDataAbroad(
                                                                    {
                                                                        email, entryNo, mobileNo,
                                                                        status, type,
                                                                        bankAccountNo, ifscCode,
                                                                        nameOfConference, venueOfConference,
                                                                        nameOfSociety, societyRecognized, reasonToAttend,
                                                                        paperInConference, fundingSources,
                                                                        purposeOfVisit, justification, sponsorship,
                                                                        financialSupport, advances,
                                                                        conferenceStarts, conferenceEnds,
                                                                        studentLeaveStarts, studentLeaveEnds,
                                                                        finances, flightDetails,
                                                                        invitationLetterAdditionalFileId, letterOfInvitationFileId,
                                                                        conferenceBrochureFileId, copyOfAbstractFileId,
                                                                        accomodationCostFileId, acceptanceOfPaperFileId
                                                                    });

                                                                data.save()
                                                                    .then((result) => {
                                                                        console.log("Application Submitted..");
                                                                        return res.status(200).json({ message: "Application Submitted.." });

                                                                    }).catch((error) => {
                                                                        console.log(error);
                                                                        return res.status(422).json({ message: "Can't submit application. Try Again.." })
                                                                    });


                                                            }).catch((error) => {
                                                                console.log(error);
                                                                return res.status(422).json({ message: "Can't submit application. Try Again.." })
                                                            });
                                                    }).catch((error) => {
                                                        console.log(error);
                                                        return res.status(422).json({ message: "Can't submit application. Try Again.." })
                                                    });
                                            }).catch((error) => {
                                                console.log(error);
                                                return res.status(422).json({ message: "Can't submit application. Try Again.." })
                                            });
                                    }
                                    ).catch((error) => {
                                        console.log(error);
                                        return res.status(422).json({ message: "Can't submit application. Try Again.." })
                                    });
                            }).catch((error) => {
                                console.log(error);
                                return res.status(422).json({ message: "Can't submit application. Try Again.." })
                            });
                    }).catch((error) => {
                        console.log(error);
                        return res.status(422).json({ message: "Can't submit application. Try Again.." })
                    });

            }).catch((error) => {
                console.log(error);
                return res.status(422).json({ message: "Can't submit application. Try Again.." })
            });
        });

    } catch (error) {
        console.log(error);
        return res.status(422).json({ message: "Can't submit application. Try Again.." })
    }

});

module.exports = router;

// apps view
router.post('/studentApplicationView', async (req, res) => {

    // bearer header 'Bearer token'
    const bearerHeader = await req.headers["authorization"];

    if (!bearerHeader) {
        return res.status(422).json({ error: "No Header" });
    }
    var bearerToken = bearerHeader.split(" ")[1];

    // console.log( "Student Side Token: " + bearerToken);

    if (!bearerToken) {
        return res.status(422).json({ error: "No Token" });
    }

    // verfiy the token
    var decode
    try {
        decode = jwt.verify(bearerToken, process.env.JWT_SECRET)
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error });
    }


    //setting email from decode
    const email = decode.email;
    const status = "0";
    try {
        // const data = await AppData.find({ email: email, status: status});
        // sorting acc to latest updated.. 
        const data = await AppData.find({ email: email }).sort({ "updatedAt": -1 });

        // console.log(data);
        return res.status(200).json(data);

    } catch (error) {
        console.log(error);
    }
})

//creating application token for viewing..
router.post('/createApplicationToken', async (req, res) => {

    const id = req.body.id;
    try {
        const token = await genAppToken(id);
        return res.status(200).json({ appToken: token });
    } catch (error) {
        return res.status(422).json({ error: "cant generate token.." });
    }
    // return res.status(200).json({id: id});
})




module.exports = router;

