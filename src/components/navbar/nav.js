import React from 'react'
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import './nav.css'
import {Link} from 'react-router-dom';
import megamenu from '../../css/images/megamenu.webp'

const Navbar = () => {
  return (
    <nav className='nav d-flex align-items-center'>
        <div className='container-fluid'>
            <div className='row position-relative'>
                
                <div className='col-sm-3 task1 d-flex align-items-center '>
                <Button className=''><GridViewIcon className='me-1 opacity-50'/> list All Categaries <KeyboardArrowDownIcon className='ms-2'/></Button>
                </div>

                <div className='col-sm-7 task2' >
                    <ul className='list list-inline'>
                        <li className='list-inline-item'><Button> <Link to='/'> Home</Link> </Button></li>
                        <li className='list-inline-item'><Button> <Link to='/about'> About </Link> </Button></li>
                        <li className='list-inline-item'><Button> <Link to='/'> Shop </Link> </Button></li>
                        <li className='list-inline-item'><Button> <Link to='/'> Vendors </Link> </Button></li>
                        
                        <li className='list-inline-item  megamenu'><Button> <Link to='/megaMenu'> Mega Menu <KeyboardArrowDownIcon/></Link> </Button>
                                        <div className='drop w-100 position-absolute menu'>
                                            <div className='row w-100'>
                                                    <div className='w-100 mb-0 col menu1 '>
                                                        <h4 className='mb-0'>food and services</h4>
                                                        <ul className='list list-inline'>
                                                            <li className='list-inline-item'> <Button> Meat & Poultry </Button> </li>
                                                            <li className='list-inline-item'><Button>Fresh Vegetables</Button>  </li>
                                                            <li className='list-inline-item'><Button> Herbs & Seasonings</Button> </li>
                                                            <li className='list-inline-item'> <Button> Cuts & Sprouts</Button> </li>
                                                            <li className='list-inline-item'> <Button>Exotic Fruits & Veggies</Button> </li>
                                                            <li className='list-inline-item'> <Button>Packaged Produce</Button> </li>
                                                        </ul>
                                                    </div>
                                                <div className='col menu1 '>
                                                        <h4 >BreakFast and Dairy's</h4>
                                                        <ul className='list list-inline'>
                                                            <li className='list-inline-item'><Button>Butter and Margarine</Button></li>
                                                            <li className='list-inline-item'><Button>Eggs Substitutes</Button></li>
                                                            <li className='list-inline-item'><Button>Marmalades</Button></li>
                                                            <li className='list-inline-item'><Button>Sour Cream</Button></li>
                                                            <li className='list-inline-item'><Button>Cheese</Button></li>
                                                        </ul>
                                                </div>
                                                <div className='col menu1 '>
                                                        <h4>Meat and SeaFood</h4>
                                                        <ul className='list list-inline'>
                                                            <li className='list-inline-item'><Button>Breakfast Sausage</Button></li>
                                                            <li className='list-inline-item'><Button>Chicken</Button></li>
                                                            <li className='list-inline-item'><Button>Sliced Deli Meat</Button></li>
                                                            <li className='list-inline-item'><Button>Crab and selfish</Button></li>
                                                            <li className='list-inline-item'><Button>Wild Caught Fillets</Button></li>
                                                        </ul>
                                                </div>
                                                    
                                                <div className='col menu1'>
                                                    <img src={megamenu} alt="megamenu post" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                        
                        <li className='list-inline-item'><Button> <Link to='/'> Blogs </Link> </Button></li>

                        <li className='list-inline-item pages'><Button> <Link to='/'> Pages <KeyboardArrowDownIcon/></Link> </Button>
                                <div className = 'pagesDropD drop'>
                                    <ul className='mb-0 text-left '>
                                        <li><Button>About Us</Button></li>
                                        <li><Button>contact</Button></li>
                                        <li><Button>My Account</Button></li>
                                        <li><Button>Login</Button></li>
                                        <li><Button>Register</Button></li>
                                        <li><Button>Forgot Password</Button></li>
                                        <li><Button>Reset Password</Button></li>
                                        <li><Button>Purchase guide</Button></li>
                                        <li><Button>Privacy Policy</Button></li>
                                        <li><Button>Terms of service</Button></li>
                                        <li><Button>404 page</Button></li>
                                    </ul>
                                </div>
                                </li>

                        <li className='list-inline-item'><Button> <Link to='/'> Contact </Link> </Button></li>
                    </ul>
                </div>

                <div className='col-sm-2 task3 d-flex align-items-center'>
                    <div className='d-flex align-items-center'>
                            <span><HeadsetMicOutlinedIcon className='me-2'/></span>
                            <div className>
                                <h3 className='mb-0'>1900-888</h3>
                                <p>24/7 support center</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar