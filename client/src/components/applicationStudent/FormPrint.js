import React from "react";

import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


function FormPrint({ data, user }) {
    const classes = "";
    const getFinances = (finance) => {
        var totalAmount = 0;

        finance.forEach(element => {
            totalAmount = totalAmount + Number(element.amount);
        });
        return totalAmount;
    }
    const renderParticulars = data.finances.map((pa, index) =>
        <TableRow key={index}>
            <TableCell style={{ fontSize: "16px" }}>
                <b>{index + 1}</b>
            </TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa.particular}</TableCell>
            <TableCell style={{ fontSize: "16px" }}>{pa.amount} Rs</TableCell>
        </TableRow>
    )

    return (
        <div>

            <Paper className="items-center">
                <div className={classes.header}>
                    <h2>
                        <b>INDIAN INSTITUTE OF TECHNOLOGY ROPAR</b>
                    </h2>
                    {/* <h4>
            APPLICATION FORM FOR PARTICIPATING IN CONFERENCE/WORKSHOP/SEMINAR
          </h4>
          <h4>(within India)</h4> */}
                </div>
                <br /> <br />
                <div className={classes.header1}>
                    <h4>
                        <b>
                            APPLICATION FORM FOR PARTICIPATING IN <br></br>
                            CONFERENCE/WORKSHOP/SEMINAR
                        </b>
                    </h4>
                    <h4>
                        <b>(within India)</b>
                    </h4>
                </div>
                <br /> <br />
                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>1. Name of PhD Scholar : {user.name} </pre>
                            </Grid>
                            <Grid item xs={5}>
                                <pre>Mobile No: {data.mobileNo}  </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>2. Department/Centre : {user.department} </pre>
                            </Grid>
                            <Grid item xs={5}>
                                <pre>Email: {user.email} </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>3. Entry No. : {user.entryNo} </pre>
                            </Grid>
                            <Grid item xs={5}>
                                <pre>Bank A/c No. : {data.bankAccountNo} </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>4. Date of Joining : {user.dateOfJoining}</pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>
                                    5. Fellowship Category (Institute/CSIR/UGC/NBHM/Any other
                                    ,please specify) : {user.fellowshipCategory}
                                </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                {/* <div style={{border: '3px solid black', padding: '10px'}}> */}
                                <pre>6. Area of Specialization : {user.areaOfSpecialisation} </pre>
                                {/* </div> */}
                            </Grid>

                            <pre></pre>
                        </Grid>

                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>7. Name of Supervisor(s) : {user.nameOfSupervisor} ({user.emailOfSupervisor})</pre>
                            </Grid>
                            <pre></pre>
                        </Grid>
                    </div>
                </Container>
                <Container>
                    <div className={classes.form}>
                        <div style={{ border: "2px solid black", padding: "10px" }}>
                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>Conference Details: </pre>
                                </Grid>
                                <pre></pre>
                            </Grid>

                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>Name of Conference: {data.nameOfConference}</pre>
                                </Grid>
                                <pre></pre>
                            </Grid>

                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>Venue of Conference: {data.venueOfConference}</pre>
                                </Grid>
                                <pre></pre>
                            </Grid>

                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>Period of Conference: From {data.conferenceStarts} To {data.conferenceEnds}</pre>
                                </Grid>
                                <pre></pre>
                            </Grid>

                            <Grid className="py-2" container spacing={2}>
                                <Grid item xs={7}>
                                    <pre>
                                        Paper(s)/Poster(s) to Present in Conference: {data.paperInConference}
                                        <br></br>
                                        <br></br>
                                    </pre>
                                </Grid>
                                <pre></pre>
                            </Grid>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>
                                    Financial support required (if any) from institute fund/
                                    project/ any other (please specify) : {data.financialSupport}
                                </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>
                                    Advance required : {data.advances ? "YES" : "NO"}<br></br>
                                </pre>
                            </Grid>
                            <pre></pre>
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
                                                <b>Amount (Rs)</b>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {renderParticulars}
                                        <TableRow>
                                            <TableCell style={{ fontSize: "16px" }}></TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>
                                                <b>Total</b>
                                            </TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>{getFinances(data.finances)} RS</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className={classes.form}>
                        <Grid className="py-2" container spacing={2}>
                            <Grid item xs={7}>
                                <pre>
                                    Duty leave required: from {data.studentLeaveStarts} to {data.studentLeaveEnds} No. of
                                    Days: 5
                                </pre>
                            </Grid>
                            <pre></pre>
                        </Grid>
                    </div>
                </Container>
            </Paper>
        </div>
    );
}

export default FormPrint;