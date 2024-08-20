// C:\Users\RAVI\Desktop\react1\chatApplication\chat\chatting\src\css\images
import React,{useState,useEffect} from 'react';
import './header.css'
import logo from '../../css/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import DropDown from '../dropDown/dropDown';
import axios from 'axios'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Header = ( props ) => {
  let [location, setLocation]=useState([])
  let [miniDropdown , setminiDropdown]=useState(false)

  let data = [           'food and clothes',
                'milk and curds',      'water and bottels',
                'watch and bags',      'shirt and bunniens',
                'pen and papers'   ,   'laptop and mobiles',
                'cabard and pillow' ,  'table and desk',
                'fan and table Fans',  " chappal and hoddie"
            ]

    let locations=async(url)=>{
        try{
            await axios.get(url).then(( res )=>{
                let responce = res.data.data;
                responce.forEach((item,index)=>{
                location.push( item.country )
            })
          })
        }
        catch(err){
          console.log(err.message) ;
        }
    }
      useEffect(( )=>{  //Async operation
        locations('https://countriesnow.space/api/v0.1/countries/');
      }, [])


  return (
    <>
    <header>
      <div className='container-fluid'>
          <div className='row'>


              <div className='col-sm-2 cursor'> {/* logo  */}
                  <img src = {logo} height={100} alt='logo'/>
              </div>


              <div className='col-sm-5 '>   {/* categary */}
                        <div className='searchBar rounded-3 d-flex align-items-center'>
                              <DropDown data={data} placeholder="All Categaries"  icon={false}/>
                              
                              <div className='serachInput'> {/* search Input */}
                                  <input type="text" placeholder='Search your items here..' />
                                  <SearchIcon className='cursor searchIcon'/>
                              </div>
                        </div>
              </div>


              <div className='col-sm-5 '>
                  <div className='lastColumn d-flex align-items-center' >
                      <div className='d-flex align-items-center'>
                            <DropDown data={location} placeholder="choose Location" icon={<FmdGoodOutlinedIcon  style={{fontSize:"20px"}}/>}/>
                        <ClickAwayListener onClickAway={()=>{setminiDropdown(false)}}>
                            <ul className='list list-inline mb-0 headerTabs'>
                                <li className='list-inline-item'>
                                    <span className='badgeHolder'>
                                        <RestartAltIcon className='icon' />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                    compare
                                    </span>
                                  </li>
                                <li className='list-inline-item'>
                                    <span className='badgeHolder'>
                                        <FavoriteBorderOutlinedIcon className='icon' />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                    wishList
                                    </span>
                                  </li>
                                <li className='list-inline-item'>
                                    <span className='badgeHolder'>
                                        <ShoppingCartOutlinedIcon className='icon' />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                    Cart
                                    </span>
                                    
                                    
                                  </li>
                                <li className='list-inline-item'>
                                    <span className='badgeHolder' onClick={()=>{setminiDropdown(!miniDropdown)}}>
                                        <AccountCircleOutlinedIcon className='icon' />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                    Account
                                    </span>
                                    {miniDropdown &&
                                      <ul className='miniDropD'>
                                      <li><Button className='button'><Person2OutlinedIcon/>My Account</Button></li>
                                      <li><Button className='button'><FormatListBulletedOutlinedIcon/> OrderAc</Button></li>
                                      <li><Button className='button'><FavoriteBorderOutlinedIcon/>MyVoucher</Button></li>
                                      <li><Button className='button'><SettingsSuggestOutlinedIcon/>Setting</Button></li>
                                      <li><Button className='button'><LogoutOutlinedIcon/>Sign-out</Button></li>
                                    </ul>}
                                    
                                  </li>
                            </ul>
                        </ClickAwayListener>
                      </div>
                  </div>
              </div>


          </div>
      </div>
    </header>
    </>
  )
}

export default Header