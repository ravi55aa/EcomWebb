import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Tooltip from '@mui/material/Tooltip';

import './produts.css'
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import falodaF from '../../../../css/images/products/falodaF.png'

 
const Products = (props) => {
  return (
    <div className='container'>
        <div className='holder'>
            { props.class!==null &&  props.class!==undefined &&
                <div className={`badgee ${props.class}`}>{props.class}</div>
            }
                <div className='imageHolder'>
                    
                    <img src={falodaF} alt='falooda'/>
                
                <div className='badgeHolder'>
                    <ul>
                        
                        <li>
                        <Tooltip title='your Wish List' placement='top' arrow>
                            <a href="#"><FavoriteBorderOutlinedIcon/></a>
                        </Tooltip>
                        </li>
                        <li>
                            <Tooltip title='Compare' placement='top' arrow>
                            <a href="#"><SwapHorizOutlinedIcon/></a>
                            </Tooltip>
                        </li>
                        <li>
                        <Tooltip title='overView' placement='top' arrow>
                            <a href="#"><RemoveRedEyeOutlinedIcon/></a>
                        </Tooltip>
                        </li>
                    </ul>
                </div>
                </div>
            <div className='textHolder'>
                <span className='cat'>Snack</span>
                <h3 className='mb-0'>Seeds of change organic <br/>quinoa, brown & red rice</h3>
                    <Rating className='ratings' name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /><br />
                <span className='brand'>By <span><Link>NestFood</Link></span></span>
                <div className='lastOne justify-content-between'>
                    <span className='newP'>$30.23<span className='oldP'>$40.55</span></span> 
                    <Button className=''><ShoppingCartOutlinedIcon/><span>Shop</span></Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products