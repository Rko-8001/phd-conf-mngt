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

function FormPrintSettlement({ data, user }) {
    const classes = "";
    console.log("DATAAA", data);
    console.log(user);
    const renderParticularsTravel = data?.travels.map((pa, index) => (
        <TableRow key={index}>
            {/* <TableCell style={{ fontSize: "16px" }}>
                <b>{index + 1}</b>
            </TableCell> */}
            <TableCell style={{ fontSize: "16px" }}>{pa?.deptdate}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.deptplace}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.depttime}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.arrivaldate}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.arrivalplace}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.arrivaltime}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.mode}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.KM}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.fare}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.TicketNo}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.remarks}</TableCell>
        </TableRow>
    ));

    const renderParticulars = data?.finances.map((pa, index) => (
        <TableRow key={index}>
            <TableCell style={{ fontSize: "16px" }}>
                <b>{index + 1}</b>
            </TableCell>
            <TableCell style={{ fontSize: "16px" }}>detail 1</TableCell>
            <TableCell style={{ fontSize: "16px" }}>25489</TableCell>
            <TableCell style={{ fontSize: "16px" }}>yoo</TableCell>
            {/* <TableCell style={{ fontSize: "16px" }}>{pa?.deptdate}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.deptplace}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa?.depttime}</TableCell> */}
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
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUt2pRCk3SRqS-EyLO87iM7cmj2eZmPuE2pRBZ1uHPZg&s"
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
                                <b>TRAVELLING ALLOWANCE REIMBURSEMENT/SETTLEMENT FORM</b>
                            </h4>
                            {/* <h4 className="text-center" style={{ fontSize: "24px" }}>
                                <b>CONFERENCE/SYMPOSIUM (in Abroad)</b>
                                <br />
                                <i>(All columns are mandatory to be filled)</i>
                            </h4> */}
                        </div>
                    </Grid>
                </Grid>
                <br /> <br />
                {/* <div style={{ textAlign: 'center', fontSize: "24px" }} >
                    <h2>
                        <u><b>PART A: GENERAL INFORMATION</b></u>
                    </h2>
                </div> */}

                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>Name : {user?.name} </pre>
                            </Grid>
                            <Grid item xs={5}>
                                <pre>Emp. Code: {data?.empCode} </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>Department/Centre : {user?.department} </pre>
                            </Grid>
                            <Grid item xs={5}>
                                <pre>Designation: {user?.email} </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>Basic Pay with Grade Pay : {data?.Bpay} </pre>
                            </Grid>
                            <Grid item xs={5}>
                                <pre>Budget Head : {data?.budgetHead} </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>Advance Drawn Rs: : {data?.advanceDrawn}</pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>
                                    Bank Account No. : {data?.bankAccNo}
                                </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        {/* <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>
                                    6. Area of Specialization : {user?.areaOfSpecialisation}{" "}
                                </pre>
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
                        </Grid> */}
                    </div>
                </Container>
                <br></br>



                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre><b>INSTRUCTION FOR PREPARING TRAVELLING ALLOWANCE REIMBURSEENT BILLS :</b></pre>
                                <pre>1. Claim must be properly filled in and submitted within 15 days of
                                    completion of journey. <br></br>Failure to do so may entail recovery of
                                    advance, drawn if any, in single instalment, from the salary.    </pre>
                                <pre>2. Money Receipts/Ticket numbers/PNR (in case of travel by rail) copy of paper ticket <br></br>
                                    or e-ticket with boarding pass (in case of travel by air) should be furnished along with T.A. bill.</pre>
                                <pre>3. Hotels bills and Food bills should invariably be enclosed.</pre>
                                <pre>All contingent expenses claimed for which bills are not available should be self-certified.</pre>
                                <br></br>
                                <pre>Travel between Cities/Countries including local to and fro Airport/Railway station etc.</pre>
                            </Grid>
                        </Grid>
                        {/* <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>2. Why would you like to attend this conference and what is its relevance with your PhD thesis: <b>{user?.purposeOfVisit}</b>  </pre>
                            </Grid>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>3. Itinerary/Flight details (arrival & departure to the place of conference):  </pre>
                            </Grid>

                        </Grid> */}
                    </div>
                </Container>


                <br></br>


                <Container>
                    <div className={classes.form}>
                        <div style={{ border: "2px solid black", padding: "10px" }}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Dept. date</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Dept. time</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Dept. place</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Arr. date</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Arr. time</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Arr. place</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Mode</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>KM</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Fare: </b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Ticket No.: </b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Remarks: </b>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {renderParticularsTravel}
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









                {/* <div style={{ textAlign: 'center', fontSize: "24px" }} >
                    <h2>
                        <u><b>PART B: INFORMATION ABOUT THE CONFERENCE/ SYMPOSIUM</b></u>
                    </h2>
                </div>
                <br></br> */}

                {/* <Container>
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
                </Container> */}

                {/* <Container>
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
                            </TableContainer>
                        </div>
                    </div>
                </Container> */}
                <br></br>
                {/* <Container>
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
                </Container> */}

                {/* <Container>
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
                </Container> */}

                <br></br>

                {/* <Container>
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
                </Container> */}



                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>Any other expenses (Lodging, Boarding, Registration fee, Visa fee, Insurance, etc.)</pre>
                            </Grid>
                        </Grid>
                    </div>
                </Container>


                <br></br>

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
                                                <b>Details</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Amount(Rs)</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Receipt</b>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {renderParticulars}
                                        <TableRow>
                                            <TableCell style={{ fontSize: "16px" }}>1</TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>Deetails 1</TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>9302</TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>Yoo</TableCell>
                                        </TableRow>
                                        {/* <TableRow>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}><b>Total</b></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                        </TableRow> */}
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
                                <pre><b>Certified that</b></pre>
                                <pre> All claims mentioned in this form correspond to actual expenditure incurred by me <br></br> for which no reimbursement/claims have been
made from any other source (Govt./Private/Others)</pre>
                                <pre> I was not provided with any free boarding/lodging/conveyance/registration fee waiver/travel <br></br> coupons for which claim has been made.</pre>
                            </Grid>
                        </Grid>
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

export default FormPrintSettlement;