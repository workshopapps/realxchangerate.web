import { TextField } from '@mui/material';
import React from 'react';

const Input = ({ text, value, handleChange, type }) => {
  return (
    <TextField
      id='outlined-basic'
      type={type}
      label={text}
      variant='outlined'
      sx={{ background: '#FAFAFA' }}
      size='small'
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      required
    />
  );
};

export default Input;
