import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default function VerticalLinearStepper(props) {
  var appData = props.appData;

  // Function to save pending status to approved status..
  const handleSave = async (e) => {
    e.preventDefault();
    // console.log("reached here");
    try {
      const id = appData._id;
      const status = "2";
      console.log(id);
      // console.log(email);
      const resp = await fetch("/researchApproveOrDisapprove", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ id, status })
      });
      console.log(resp);
      if(resp.status === 200)
      {
        // done
        alert("Approved");
      }
      else
      {
         // can't
         alert("Error");
      }
    }
    catch(e)
    {
      console.log(e);
    }


  }
  const handleunSave = async (e) => {
    e.preventDefault();
    // console.log("reached here");
    try {
      const id = appData._id;
      const status = "-2";
      console.log(id);
      // console.log(email);
      const resp = await fetch("/researchApproveOrDisapprove", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ id, status })
      });
      console.log(resp);
      if(resp.status === 200)
      {
        // done
        alert("Disapproved")
      }
      else
      {
         // can't
         alert("Error")
      }
    }
    catch(e)
    {
      console.log(e);
    }


  }
  const steps = [
    {
      label: 'Personal Info',
      description: `---------> Email: ${appData.email}       ---------> Mobile No: ${appData.mobileNo}`

    },
    {
      label: 'Step-2',
      description:
        'Please check The Transaction Limit of the student'
    },
    {
      label: 'Step-3',
      description: `Please Check the Available Funds and the maximum limit criteria.`,
    },
  ];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished {props.id} </Typography>
          <Button onClick={handleSave} sx={{ mt: 1, mr: 1 }}>
            Approve
          </Button>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
          <Button onClick={handleunSave} sx={{ mt: 1, mr: 1 }}>
            Disapprove
          </Button>
        </Paper>
      )}
    </Box>
  );
}