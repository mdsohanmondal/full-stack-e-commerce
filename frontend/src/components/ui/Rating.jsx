'use client';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const RatingBar = ({ readOnly = false, starts }) => {
  const [value, setValue] = useState(2);
  useEffect(() => {
    if (starts !== undefined) {
      setValue(starts);
    }
  }, [readOnly, starts]);

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Rating
        readOnly={readOnly}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default RatingBar;
