import React from 'react'
import logo2 from '../../css/images/logo2.jpeg'
import deal from '../../css/images/deal.jpeg';
import free from '../../css/images/return.png'
import wide from '../../css/images/free.png'
import easy from '../../css/images/return.png'
import best from '../../css/images/best.jpeg'
// import logo2 from '../../css/images/logo2.jpeg'
import './footer.css' 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <div className="footerWrapper">
          <div className="footerHolder">
            <div className='container-fluid'>
              <div className="row">
                <div className=' p-0 col box d-flex align-items-center'>
                    <span className='img ms-2'><img src={best} alt="logo2"  width={50}/></span>
                    <div className='info'>
                      <h3>best prices and offers </h3>
                      <p>order $50 or more</p>
                    </div>
                </div>
                <div className='col box d-flex align-items-center'>
                    <span className='img'><img src={free} alt="logo2"  width={50}/></span>
                    <div className='info'>
                      <h3>free delivery </h3>
                      <p>order $50 or more</p>
                    </div>
                </div>
                <div className='col box d-flex align-items-center'>
                    <span className='img'><img src={deal} alt="logo2"  width={70}/></span>
                    <div className='info'>
                      <h3> great daily deal</h3>
                      <p>order $50 or more</p>
                    </div>
                </div>
                <div className='col box d-flex align-items-center'>
                    <span className='img'><img src={wide} alt="logo2"  width={70}/></span>
                    <div className='info'>
                      <h3>wide assortment </h3>
                      <p>order $50 or more</p>
                    </div>
                </div>
                <div className='col box d-flex align-items-center'>
                    <span className='img'><img src={easy} alt="logo2"  width={60}/></span>
                    <div className='info'>
                      <h3> Easy returns</h3>
                      <p>order $50 or more</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
    <br />
    <br />
          <div className="container-fluid">
                  <div className="row">
                        <div className="col-md-3 part1">
                                <span  className='w-100'><img src={logo2} alt="logo" width={180} /></span>
                                <br /><br />
                                <p className='lead'>awesome grocery store website <br /> template</p>
                                <br />
                                <p><strong>address: </strong>5171 w-campell basavana<br/>madihalli hobli blsar</p>
                                <p><strong>call us: </strong>(+91)-546-27-1112</p>
                                <p><strong>email: </strong>ravi@nest.com</p>
                                <p><strong>Hours: </strong>10:00-18:00 mon-sat</p>
                        </div>
                        <div className='col-md-6 part2'>
                          <div className='row'>
                            <div className='col'>
                                <h4>company</h4>
                              <ul className='p-0'>
                                <li> <Link to='/'> About us </Link>  </li>
                                <li> <Link to='/'> Delivery Information </Link>  </li>
                                <li> <Link to='/'> privacy policy </Link>  </li>
                                <li> <Link to='/'> terms and conditions </Link>  </li>
                                <li> <Link to='/'> contact us </Link>  </li>
                                <li> <Link to='/'> support center </Link>  </li>
                                <li> <Link to='/'> careers </Link>  </li>
                              </ul>
                            </div>
                            <div className='col'>
                                <h4>account</h4>
                              <ul className='p-0'>
                                <li> <Link to='/'> sign in </Link>  </li>
                                <li> <Link to='/'> view cart </Link>  </li>
                                <li> <Link to='/'> privacy policy </Link>  </li>
                                <li> <Link to='/'> terms and conditions </Link>  </li>
                                <li> <Link to='/'> contact us </Link>  </li>
                                <li> <Link to='/'> support center </Link>  </li>
                                <li> <Link to='/'> compare products </Link>  </li>
                              </ul>
                            </div>
                            <div className='col'>
                                <h4>corporate</h4>
                              <ul className='p-0'>
                                <li> <Link to='/'> become a vendore </Link>  </li>
                                <li> <Link to='/'>  Information </Link>  </li>
                                <li> <Link to='/'>  policy </Link>  </li>
                                <li> <Link to='/'>  conditions </Link>  </li>
                                <li> <Link to='/'> call  </Link>  </li>
                                <li> <Link to='/'> center </Link>  </li>
                                <li> <Link to='/'> promotions </Link>  </li>
                              </ul>
                            </div>
                            <div className='col'>
                                <h4 >popular</h4>
                              <ul className='p-0'>
                                <li> <Link to='/'> milk and flavoured milk </Link>  </li>
                                <li> <Link to='/'> butter and margarine </Link>  </li>
                                <li> <Link to='/'> privacy policy </Link>  </li>
                                <li> <Link to='/'> terms and conditions </Link>  </li>
                                <li> <Link to='/'> contact us </Link>  </li>
                                <li> <Link to='/'> tea and coffee </Link>  </li>
                                <li> <Link to='/'> cheese </Link>  </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-3 part3'>
                          <h3>install app</h3>
                          <br />
                          <p>from app store or google play </p>
                          
                          <div className='d-flex algin-items-center'>
                            <span> <img src={wide} alt="wide" width={70} /></span>
                            <span><img src={free} alt="deal" width={70} /></span>
                          </div>
                          <br/>
                          <p className='mb-4'>secured payment gateways</p>
                          <span> <img src={deal} alt="free" width={70} /> </span>
                        </div>
                  </div>
          </div>
    <hr />
  </div>
  )
}

export default Footer