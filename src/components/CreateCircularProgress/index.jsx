/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';
import { PropTypes } from 'prop-types';

import { CircularProgress, Box, Typography } from '@material-ui/core';

export function CreateCircularProgress(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} color="inherit" className="circular-progress" thickness={4} size="3rem" />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="inherit">{`${props.value}%`}</Typography>
      </Box>
    </Box>

  );
}

CreateCircularProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
