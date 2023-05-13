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

function FormPrint({ data, user }) {
  const classes = "";
  console.log(data);
  console.log(user);
  // const getFinances = (finance) => {
  //     var totalAmount = 0;

  //     finance.forEach(element => {
  //         // totalAmount = totalAmount + Number(element?.amount);
  //         totalAmount=0;
  //     });
  //     return totalAmount;
  // }
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

  // <<<<<<< HEAD
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
                <b>CONFERENCE/WORKSHOP/SEMINAR (within India)</b>
              </h4>
            </div>
          </Grid>
        </Grid>
        <br /> <br />
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
            {/* ======= */}
            <Paper className="items-center">
              {/* <div className={classes.header}>
                <h2>
                  <b>INDIAN INSTITUTE OF TECHNOLOGY ROPAR</b>
                </h2>
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
              </div> */}
              {/* <br /> <br />  */}
              {/* <Container>
                <div className={classes.form}>
                  <Grid className="py-2" container spacing={2}>
                    <Grid item xs={7}>
                      <pre>1. Name of PhD Scholar : {user.name} </pre>
                    </Grid>
                    <Grid item xs={5}>
                      <pre>Mobile No: {data.mobileNo} </pre>
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
                </div>
              </Container> */}
              {/* >>>>>>> 52d26b6edbf38a8f01c02765716138492d2d8594 */}
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
            </Paper>
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
                  <pre>Name of Conference: {data?.nameOfConference}</pre>
                </Grid>
                <pre></pre>
              </Grid>

              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>Venue of Conference: {data?.venueOfConference}</pre>
                </Grid>
                <pre></pre>
              </Grid>

              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>
                    Period of Conference: From {data?.conferenceStarts} To{" "}
                    {data?.conferenceEnds}
                  </pre>
                </Grid>
                <pre></pre>
              </Grid>

              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>
                    Paper(s)/Poster(s) to Present in Conference:{" "}
                    {data?.paperInConference}
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
                  project/ any other (please specify)<br></br> : {data?.financialSupport}
                </pre>
              </Grid>
              <pre></pre>
            </Grid>
            <Grid className="py-2" container spacing={2}>
              <Grid item xs={7}>
                <pre>
                  Advance required : {data?.advances ? "YES" : "NO"}
                  <br></br>
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
                      <TableCell style={{ fontSize: "16px" }}>{ } RS</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </Container>
        <Container>
          <div className={classes.form}>
            <Grid className="py-2 mt-2" container spacing={2}>
              <Grid item xs={7}>
                <pre>Enclosures Attached (Please tick):</pre>
                <pre>
                  <div className="form-group">
                    <label htmlFor="copyOfAcceptance">
                      1. Copy of Acceptance <s></s>
                      <input
                        type="checkbox"
                        id="copyOfAcceptance"
                        name="copyOfAcceptance"
                        value="yes"
                      />
                    </label>
                  </div>
                </pre>
                <pre>
                  <div className="form-group">
                    <label htmlFor="copyOfConferenceBrochure">
                      2. Copy of Conference Brochure <s></s>
                      <input
                        type="checkbox"
                        id="copyOfConferenceBrochure"
                        name="copyOfConferenceBrochure"
                        value="yes"
                      />
                    </label>
                  </div>
                </pre>
                <pre>
                  <div className="form-group">
                    <label htmlFor="copyOfAbstract">
                      3. Copy of Abstract <s></s>
                      <input
                        type="checkbox"
                        id="copyOfAbstract"
                        name="copyOfAbstract"
                        value="yes"
                      />
                    </label>
                  </div>
                </pre>
              </Grid>
              <pre></pre>
            </Grid>
          </div>
        </Container>
        <Container>
          <div className={classes.form}>
            <Grid className="py-2" container spacing={2}>
              <Grid item xs={7}>
                <pre>
                  Duty leave required: from {data?.studentLeaveStarts} to{" "}
                  {data?.studentLeaveEnds} No. of Days: 5
                </pre>
              </Grid>
              <pre></pre>
            </Grid>
          </div>
        </Container>
        <Container>
          <div className={classes.form}>
            <br></br>
          </div>
          <Grid className="py-2 flex flex-col" container spacing={2}>
            <Grid item className="flex-1">
              <pre>
              <img className="h-5 w-auto" src={`https://drive.google.com/uc?id=${extractFileId(data?.facultySignLink)}`} alt="sign" />
                <b>Signature of PhD Scholar</b>
              </pre>
              <pre></pre>
            </Grid>
            <Grid item className="flex-1">
              <pre>
              <img className="h-5 w-auto" src={`https://drive.google.com/uc?id=${extractFileId(data?.facultySignLink)}`} alt="sign" />
                <b>Supervisors</b>{" "}
              </pre>
            </Grid>
            <Grid item className="flex-1">
              <pre>
              <img className="h-5 w-auto" src={`https://drive.google.com/uc?id=${extractFileId(data?.hodSignLink)}`} alt="sign" />
                <b>Head of the Department</b>
              </pre>
            </Grid>
            <pre></pre>
          </Grid>
        </Container>
        <Container>
          <div className={classes.form}>
            <div style={{ border: "2px solid black", padding: "10px" }}>
              <TableContainer>
                <Table>
                  <TableHead className="text-center">
                    <b>For Research Section</b>
                  </TableHead>
                </Table>
              </TableContainer>
            </div>
          </div>
        </Container>
        <Container>
          <div className={classes.form}>
            <div style={{ border: "2px solid black", padding: "10px" }}>
              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>(For conference within India)</pre>
                </Grid>
                <pre></pre>
              </Grid>

              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>Grant Eligibility Rs.{data?.grantEligibility}</pre>
                </Grid>
                <pre></pre>
              </Grid>

              {/* <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>Earlier Sanctions: 1. Test 1</pre>
                </Grid>
                <pre></pre>
              </Grid> */}

              {/* <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>2. Test 2</pre>
                </Grid>
                <pre></pre>
              </Grid> */}

              {/* <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>
                    3. Test 3<br></br>
                    <br></br>
                  </pre>
                </Grid>
                <pre></pre>
              </Grid> */}
              <Grid className="ml-10" container spacing={2} alignItems="center">
                <Grid item xs={6}>
                  <pre>
                  <img className="h-5 w-auto" src={`https://drive.google.com/uc?id=${extractFileId(data?.researchSignLink)}`} alt="sign" />
                    <b>Dealing Assistant </b>
                  </pre>
                </Grid>
                <Grid item xs={6} mx-10>
                  <pre>
                  <img className="h-5 w-auto" src={`https://drive.google.com/uc?id=${extractFileId(data?.researchSignLink)}`} alt="sign" />
                    <b>Assistant registrar </b>
                  </pre>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
        <Container>
          <br></br>
          <div className={classes.form}>
            <br></br>
            <div style={{ border: "2px solid black", padding: "10px" }}>
              <TableContainer>
                <Table>
                  <TableHead className="text-center">
                    <b>For Accounts Section</b>
                  </TableHead>
                </Table>
              </TableContainer>
            </div>
          </div>
        </Container>
        <Container>
          <div className={classes.form}>
            <div style={{ border: "2px solid black", padding: "10px" }}>
              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>(For conference within India)</pre>
                </Grid>
                <pre></pre>
              </Grid>

              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>Grant Utilized Rs. {data?.grantUtilized} </pre>
                </Grid>
                <pre></pre>
              </Grid>

              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>Balance Available Rs. {data?.balanceAvailable} </pre>
                </Grid>
                <pre></pre>
              </Grid>

              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>Passed for payment of Rs. {data?.passedForPayment}</pre>
                </Grid>
                <pre></pre>
              </Grid>
              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>(80% of Estimated Amount).</pre>
                </Grid>
                <pre></pre>
              </Grid>

              <Grid className="py-2" container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <pre>
                  <img className="h-5 w-auto" src={`https://drive.google.com/uc?id=${extractFileId(data?.accountSignLink)}`} alt="sign" />
                    <b>Dealing Assistant </b>
                  </pre>
                </Grid>
                <Grid item xs={4}>
                  <pre>
                  <img className="h-5 w-auto" src={`https://drive.google.com/uc?id=${extractFileId(data?.accountSignLink)}`} alt="sign" />
                    <b>Accounts Officer</b>
                  </pre>
                </Grid>
                <Grid item xs={4}>
                  <pre >
                  <img className="h-5 w-auto" src={`https://drive.google.com/uc?id=${extractFileId(data?.accountSignLink)}`} alt="sign" />
                    <b>Deputy Registrar</b>
                  </pre>
                </Grid>
              </Grid>
              
            </div>
          </div>
        </Container>
        <Container style={{ fontSize: "20px" }}>
          <br />
          
          <b>Associate Dean (PG & Research)</b>
        </Container>
        <Container>
          <div className={classes.form}>
            <br></br>
            <div style={{ border: "2px solid black", padding: "10px" }}>
              <Grid className="py-2" container spacing={2}>
                <Grid item xs={7}>
                  <pre>Academic Section for Noting and Information</pre>
                </Grid>
              </Grid>

              <Grid
                className="py-2"
                container
                spacing={2}
                justifyContent="flex-end"
              >
                <Grid item>
                  <pre style={{ margin: 1 }}>
                  <img className="h-5 w-auto" src={`https://drive.google.com/uc?id=${extractFileId(data?.deanSignLink)}`} alt="sign" />
                    <b>Dealing Assistant </b>
                  </pre>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
        <Container style={{ fontSize: "20px" }}>
          <br />
          <b>Accounts Section for releasing of payment</b>
          <br></br>
        </Container>
        <br></br>
      </Paper>
    </div>
  );
}

export default FormPrint;
