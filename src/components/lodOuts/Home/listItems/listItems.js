import React from 'react';
import './listItems.css';
import Rating from '@mui/material/Rating';
import images1 from '../../../../css/images/image11.png'
import images4 from '../../../../css/images/image4.png'
import { Link } from 'react-router-dom';


const  ListItems  = (props) => {
  return (
    <>
        <div className='items'> 
            <h3>{props.title}</h3><br />
            <div className='cont d-flex align-items-center'>
                
                <div className='imgHolder'>
                        <img src={images1} alt="banana"/>
                </div>

                <div className='info'>
                        <Link to=''>
                                <h4>{props.text}</h4>
                        </Link>
                        <Rating className='ratings' name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        <div className='lastOne justify-content-between'>
                                <span className='newP'>$30.23<span className='oldP' style={{font:'10px'}}>$40.55</span></span>
                        </div>
                </div>

            </div>
            <div className='cont d-flex align-items-center'>
                
                <div className='imgHolder'>
                        <img src={images4} alt="banana"/>
                </div>

                <div className='info'>
                        <Link to=''>
                                <h4>{props.text}</h4>
                        </Link>
                        <Rating className='ratings' name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        <div className='lastOne justify-content-between'>
                                <span className='newP'>$30.23<span className='oldP' style={{font:'10px'}}>$40.55</span></span>
                        </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default  ListItems ;