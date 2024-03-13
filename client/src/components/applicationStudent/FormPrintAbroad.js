import React from "react";

import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { tooltipClasses } from "@mui/material";

function FormPrintAbroad({ data, user }) {
    const classes = "";
    console.log(data);
    console.log(user)
    const renderParticulars = data?.finances.map((pa, index) => (
        <TableRow key={index}>
            <TableCell style={{ fontSize: "16px" }}>
                <b>{index + 1}</b>
            </TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.particular}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.amount} Rs</TableCell>
        </TableRow>
    ));
    function extractFileId(driveLink) {
        const startIndex = driveLink?.indexOf('/file/d/') + 8;
        const endIndex = driveLink?.indexOf('/view');
        if (startIndex !== -1 && endIndex !== -1) {
            return driveLink?.substring(startIndex, endIndex);
        } else {
            return null;
        }
    }

    return (
        <div>
            <Paper className="item-center">

                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <img
                            src="https://scontent-del1-2.xx.fbcdn.net/v/t1.18169-9/17264253_1867054683517452_4318177070545308732_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1LmE8QJEZloAX9D8hDW&_nc_ht=scontent-del1-2.xx&oh=00_AfCHBX4ZV0Mus_V0UPF9vKU-5y42esnQU0QQj0e8W4hqlQ&oe=6482F87B"
                            alt="your-image-alt-text"
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <div className={classes.header}>
                            <h2 className="text-center " style={{ fontSize: "36px" }}>
                                <b>INDIAN INSTITUTE OF TECHNOLOGY ROPAR</b>
                            </h2>
                        </div>
                        <br />
                        <br />
                        <div className={classes.header1}>
                            <h4 className="text-center" style={{ fontSize: "24px" }}>
                                <b>APPLICATION FORM FOR PARTICIPATING IN</b>
                            </h4>
                            <h4 className="text-center" style={{ fontSize: "24px" }}>
                                <b>CONFERENCE/SYMPOSIUM (in Abroad)</b>
                                <br />
                                <i>(All columns are mandatory to be filled)</i>
                            </h4>
                        </div>
                    </Grid>
                </Grid>
                <br /> <br />
                <div style={{ textAlign: 'center', fontSize: "24px" }} >
                    <h2>
                        <u><b>PART A: GENERAL INFORMATION</b></u>
                    </h2>
                </div>

                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>1. Name of PhD Scholar : {user?.name} </pre>
                            </Grid>
                            <Grid item xs={5}>
                                <pre>Mobile No: {data?.mobileNo} </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>2. Department/Centre : {user?.department} </pre>
                            </Grid>
                            <Grid item xs={5}>
                                <pre>Email: {user?.email} </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>3. Entry No. : {user?.entryNo} </pre>
                            </Grid>
                            <Grid item xs={5}>
                                <pre>Bank A/c No. : {data?.bankAccountNo} </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>4. Date of Joining : {user?.dateOfJoining}</pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>
                                    5. Fellowship Category (Institute/CSIR/UGC/NBHM/Any other
                                    ,please specify) : {user?.fellowshipCategory}
                                </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                {/* <div style={{border: '3px solid black', padding: '10px'}}> */}
                                <pre>
                                    6. Area of Specialization : {user?.areaOfSpecialisation}{" "}
                                </pre>
                                {/* </div> */}
                            </Grid>

                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>
                                    7. Name of Supervisor(s) : {user?.nameOfSupervisor} (
                                    {user?.emailOfSupervisor})
                                </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>
                    </div>
                </Container>
                <br></br>
                <div style={{ textAlign: 'center', fontSize: "24px" }} >
                    <h2>
                        <u><b>PART B: INFORMATION ABOUT THE CONFERENCE/ SYMPOSIUM</b></u>
                    </h2>
                </div>
                <br></br>

                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>1. Title of the conference/symposium: <b>{data?.nameOfConference} </b></pre>
                                <pre>   Name of the society organizing the conference: <b>{data?.nameOfSociety}</b> </pre>
                                <pre>   Is the conference organized by the recognized scientific society: <b>Yes</b> </pre>
                                <br></br>
                                <pre>   a. Venue              : <b>{data?.venueOfConference}</b></pre>
                                <pre>   b. Period of the event: <b>{data?.conferenceStarts}</b> to <b>{data?.conferenceEnds}</b></pre>
                                <pre>   c. Period of the connected visits (if any): <b>N/A</b></pre>
                                <pre>   d. Purpose of the visit (Please tick mark): <b>{data?.purposeOfVisit}</b> </pre>
                                <pre>       [\/] Presenting a paper  Oral/Poster(please specify): 	</pre>
                                <pre>       [] collaborative project 	</pre>
                                <pre>       [] Any other (specify): 	</pre>
                            </Grid>
                        </Grid>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>2. Why would you like to attend this conference and what is its relevance with your PhD thesis: <b>{user?.purposeOfVisit}</b>  </pre>
                            </Grid>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>3. Itinerary/Flight details (arrival & departure to the place of conference):  </pre>
                            </Grid>

                        </Grid>
                    </div>
                </Container>

                <Container>
                    <div className={classes.form}>
                        <div style={{ border: "2px solid black", padding: "10px" }}>
                            <TableContainer>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ fontSize: "16px" }}>
                                            Sr. No.  
                                            <b>{data?.flightDetails[0].serialNo}</b>
                                        </TableCell>
                                        <TableCell style={{ fontSize: "16px" }}>
                                            <p>Departure [Time/date]:  <b>{data?.flightDetails[0].destination} </b></p>
                                            
                                        </TableCell>
                                        <TableCell style={{ fontSize: "data" }}>
                                            <p>Arrival: <b>{data?.flightDetails[0].arrival} </b></p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                {/* <TableBody>
                                    <TableRow>
                                        <TableCell style={{ fontSize: "16px" }}>
                                            1.
                                        </TableCell>
                                        <TableCell style={{ fontSize: "16px" }}>

                                        </TableCell>
                                        <TableCell style={{ fontSize: "16px" }}>

                                        </TableCell>
                                    </TableRow>
                                </TableBody> */}
                            </TableContainer>
                        </div>
                    </div>
                </Container>
                <br></br>
                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>4. Whether applied to DST/DBT/INSA/other funding sources? 	:No</pre>
                                <pre>   Any outcome? (please mention)				:</pre>
                            </Grid>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <   Grid item xs={7}>
                                <pre>5. Particular of any additional visit(s):</pre>
                                <pre>     a. Purpose:  {data?.purposeOfVisit}</pre>
                                <pre>     b. Justification: {data?.justification}</pre>
                                <pre>     c. Sponsorship: {data?.sponsorship} </pre>
                            </Grid>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>6. Duty leave required from  <b>{data?.studentLeaveStarts}</b>   to   <b>{data?.studentLeaveEnds}</b> </pre>
                            </Grid>
                            <br />
                            <Grid item xs={5}>
                                <pre>No of Days: <b>5</b></pre>
                            </Grid>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>7. Visits abroad after joining the institute:  </pre>
                            </Grid>
                        </Grid>
                    </div>
                </Container>

                <Container>
                    <div className={classes.form}>
                        <div style={{ border: "2px solid black", padding: "10px" }}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Places Visited: <b>{data?.flightDetails[0].destination}</b></b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Period: </b>
                                                <b>{data?.conferenceStarts}</b> to <b>{data?.conferenceEnds}</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Purpose: </b>
                                                {data?.purposeOfVisit}
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Funding source: </b>
                                                {data?.fundingSources}
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {renderParticulars}
                                        <TableRow>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </Container>

                <br></br>

                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>
                                    8. Whether the report(s) on above visits were submitted? If yes, please enclose a copy of the last: <b>No</b>
                                </pre>
                                <pre>deputation report.	 [ \/ ] Yes      [   ] No</pre>
                            </Grid>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>
                                    9. Financial support required (if any) from institute fund/ project/ any other (please specify)
                                </pre>
                                <pre>..............................</pre>
                                <pre>Advance required: [ ]Yes   [\/]No</pre>
                            </Grid>
                        </Grid>
                    </div>
                </Container>

                <Container>
                    <div className={classes.form}>
                        <div style={{ border: "2px solid black", padding: "10px" }}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Sr. No.</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Particulars</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Amount(Rs)</b>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {renderParticulars}
                                        <TableRow>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}><b>Total</b></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </Container>

                <br></br>
                <div style={{ textAlign: 'center' }} >
                    <h2 style={{ fontSize: "24px" }}>
                        <u><b>PART C: SUPPORTING DOCUMENTS</b></u>
                    </h2>
                    <br />
                    <h3 style={{ fontSize: "20px" }}>
                        Following documents, to be attached along with the proforma while forwarding the application:
                        <br></br>
                        <b>* please tick whichever is applicable.</b>
                    </h3>
                </div>
                <br />

                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>a. [] Letter of Invitation                                     Flag 'A'</pre>
                                <pre>b. [] Copy of abstract                                         Flag 'B'</pre>
                                <pre>c. [] Conference brochure with registration fee detail         Flag 'C'</pre>
                                <pre>d. [] Acceptance of the paper                                  Flag 'D'</pre>
                                <pre>e. [] Accommodation cost/details                               Flag 'E'</pre>
                                <pre>f.    For additional visit(s)                                </pre>
                                <pre>   [] Invitation Letter(s)/e-mails	                            Flag 'F'   </pre>
                                <pre>   [] Funding Arrangement(s)	                                Flag 'G'   </pre>
                                <pre>     (Attach relevant documents)</pre>
                            </Grid>
                        </Grid>
                        <br></br>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={4}>
                                <img className="h-5 w-auto" src={`https://drive.google.com/thumbnail?id=${extractFileId(data?.facultySignLink)}`} alt="sign" />
                                <pre><b>Signature of PhD Scholar</b></pre>
                            </Grid>
                            <Grid item xs={4}>
                                <img className="h-5 w-auto" src={`https://drive.google.com/thumbnail?id=${extractFileId(data?.facultySignLink)}`} alt="sign" />
                                <pre><b>Supervisor(s)</b></pre>
                            </Grid>
                            <Grid item xs={4}>
                                <img className="h-5 w-auto" src={`https://drive.google.com/thumbnail?id=${extractFileId(data?.hodSignLink)}`} alt="sign" />
                                <pre><b>Head of the Department</b></pre>
                            </Grid>
                        </Grid>
                    </div>
                </Container>

                <br></br>

                <Container>
                    <div className={classes.form}>
                        <div style={{ border: "2px solid black", padding: "10px" }}>
                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <div style={{ textAlign: "center", fontSize: "20px" }}>
                                        <pre><b>For Research Section </b></pre>
                                    </div>
                                </Grid>
                            </Grid>
                            <hr></hr>
                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>(For conference in Abroad)</pre>
                                    <br></br>
                                    <pre>Grant Eligibility Rs. </pre>
                                </Grid>
                                <pre></pre>
                            </Grid>

                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>Earlier Sanctions: 1.{data?.nameOfConference}</pre>
                                    <pre>                   2.</pre>
                                    <pre>                   3.</pre>
                                </Grid>
                            </Grid>

                            <br></br>
                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={4}>
                                    <img className="h-5 w-auto" src={`https://drive.google.com/thumbnail?id=${extractFileId(data?.researchSignLink)}`} alt="sign" />
                                    <pre><b>Dealing Assistant</b></pre>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="h-5 w-auto" src={`https://drive.google.com/thumbnail?id=${extractFileId(data?.researchSignLink)}`} alt="sign" />
                                    <pre><b>Joint Assistant</b></pre>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="h-5 w-auto" src={`https://drive.google.com/thumbnail?id=${extractFileId(data?.researchSignLink)}`} alt="sign" />
                                    <pre><b>Assistant Registrar</b></pre>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Container>

                <br></br>

                <Container>
                    <div className={classes.form}>
                        <div style={{ border: "2px solid black", padding: "10px" }}>
                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <div style={{ textAlign: "center", fontSize: "20px" }}>
                                        <pre><b>For Accounts Section</b></pre>
                                    </div>
                                </Grid>
                            </Grid>
                            <hr></hr>
                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>(For conference in Abroad)</pre>
                                    <br></br>
                                    <pre>Grant Utilized Rs. {data?.grantUtilized}</pre>
                                </Grid>
                                <pre></pre>
                            </Grid>

                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>Balance Available <b>Rs.{user?.balance}</b></pre>
                                </Grid>
                            </Grid>

                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>Passed for payment of Rs.{data?.nameOfConference}</pre>
                                    <pre>(80% of Estimated Amount){data?.nameOfConference}</pre>
                                </Grid>
                            </Grid>

                            <br></br>
                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={4}>
                                    <img className="h-5 w-auto" src={`https://drive.google.com/thumbnail?id=${extractFileId(data?.accountSignLink)}`} alt="sign" />
                                    <pre><b>Dealing Assistant</b></pre>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="h-5 w-auto" src={`https://drive.google.com/thumbnail?id=${extractFileId(data?.accountSignLink)}`} alt="sign" />
                                    <pre><b>Accounts Officer</b></pre>
                                </Grid>
                                <Grid item xs={4}>
                                    <img className="h-5 w-auto" src={`https://drive.google.com/thumbnail?id=${extractFileId(data?.accountSignLink)}`} alt="sign" />
                                    <pre><b>Deputy Registrar</b></pre>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Container>

                <br></br>
                <br></br>

                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre><b>Associate Dean (PG & Research)</b></pre>
                            </Grid>
                            <pre></pre>
                        </Grid>
                    </div>
                </Container>
                <br></br>

                <Container>
                    <div className={classes.form}>
                        <div style={{ border: "2px solid black", padding: "10px" }}>
                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>Research Section for Noting and Information </pre>
                                </Grid>
                            </Grid>

                            <br></br>
                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={12}>
                                    <img className="h-5 w-auto" src={`https://drive.google.com/thumbnail?id=${extractFileId(data?.deanSignLink)}`} alt="sign" />
                                    <pre><b>Dealing Assistant</b></pre>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Container>

                <br></br>
                <br></br>
                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre><b>Accounts Section for releasing of payment</b></pre>
                            </Grid>
                            <pre></pre>
                        </Grid>
                    </div>
                </Container>
                <br></br>

            </Paper>
        </div>
    );
}

export default FormPrintAbroad;