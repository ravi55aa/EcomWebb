import React from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import Button from '@mui/material/Button';
import './subscribe.css';
const Subscribe = () => {
  return (
    <>
            <div className='sendMail cursor'>
                <GridViewIcon/>
                <input type='text' placeholder='write your Gmail..'/>
                <Button>Subscribe</Button>
            </div>
    </>
  )
}

export default Subscribe