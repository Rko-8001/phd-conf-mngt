import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Previous_year = () => {
    const fundSaved = 5000;
    const usedFunds = 100000;
    const totalFundAlloted = fundSaved + usedFunds;
    const usedPercentage = (usedFunds / totalFundAlloted) * 100;
    const availablePercentage = 100 - usedPercentage;
    return (
        <Box>
          <Typography variant="h5" gutterBottom>
            Funds Statistics for Previous Year
          </Typography>
          <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" value={availablePercentage} />
            </Box>
            <Box minWidth={35}>
              <Typography variant="body2" color="textSecondary">
                {`${availablePercentage.toFixed(1)}%`}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" value={usedPercentage} color="secondary" />
            </Box>
            <Box minWidth={35}>
              <Typography variant="body2" color="textSecondary">
                {`${usedPercentage.toFixed(1)}%`}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            Fund Saved: {fundSaved}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Used Funds: {usedFunds}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Total Fund Alloted: {totalFundAlloted}
          </Typography>
        </Box>
      );
}

export default Previous_year
