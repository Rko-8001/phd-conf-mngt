import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import img from './assets/img5.webp';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Heading() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {/* Welcome to the Faculty Portal */}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {/* <h6>Welcome to the Faculty Portal </h6> */}
                <h4>Indian Institute of Technology Ropar</h4>
                <h4>भारतीय प्रौद्योगिकी संस्थान रोपड़</h4>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* ID: 1030114 */}
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {/* $19.00 */}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}