import React,{useState} from 'react'
import Button from '@mui/material/Button';
import HomeSlider from './slider/slider';
import Homeslider2 from './slider/slider2'; 
import Slider from "react-slick";
import Products from './products/products';
import {Link} from 'react-router-dom'
import leaf from '../../../css/images/leaf2.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ListItems from './listItems/listItems';
import vegSeller from '../../../css/images/vegSeller.png'
import './home.css'
import Subscribe from './subscribe/subscribe';
const Home = () => {
  const [colors,setColor] = useState([]);

  const randomGenarator=()=>{
    let random = Math.round(Math.random()*16);
    return random;
  }

  window.onload = function(){
    console.log(colorChanger());

  }
  let colorChanger = () =>{
    let array = []
      let hexaDecimal = 'abcdef1234567890';
      for(let i = 0; i < 5 ; i++) { 
        let random = randomGenarator() ;
        array.push(hexaDecimal[random ] );
      }
      let result = '#'+array.join('');
      setColor(JSON.stringify(result));
  }

  var settings = {
    arrows:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll: 1,
    fade:false,
    autoPlay:true
};

  console.log("color",colors)
  
  return (
    <div style={{backgroundColor:colors}}>
      <HomeSlider/>
      <Homeslider2/>

      <div className='container-fluid holder'>
          <div className='holder2 text d-flex align-items-center justify-content-between'>
              <h3>products</h3>
              <ul className='items list list-inline ml-auto'>
                <li className='list-inline-item cursor'><Link>  <a href="#">All</a>              </Link></li>
                <li className='list-inline-item cursor'><Link>  <a href="#">milk & dairies </a>  </Link></li>
                <li className='list-inline-item cursor'><Link>  <a href="#">coffee & teas</a>  </Link></li>
                <li className='list-inline-item cursor'><Link>  <a href="#">pet foods </a>       </Link></li>
                <li className='list-inline-item cursor'><Link>  <a href="#">meats </a>           </Link></li>
                <li className='list-inline-item cursor'><Link>  <a href="#">vegetables </a>      </Link></li>
                <li className='list-inline-item cursor'><Link>  <a href="#">fruits </a>           </Link></li>
              </ul>
          </div>
          <div className='row rowHolder d-flex align-items-center'>
         
            <div className='componentHolder'>
              <Products class='trend'/>
            </div>
            <div className='componentHolder'>
              <Products class='New'/>
            </div>
            <div className='componentHolder'>
              <Products class='choice'/>
            </div>
            <div className='componentHolder'>
              <Products />
            </div>
            <div className='componentHolder'>
              <Products class='hot'/>
            </div>
            <div className='componentHolder'>
              <Products class='trend'/>
            </div>
            <div className='componentHolder'>
              <Products class='New'/>
            </div>
            <div className='componentHolder'>
              <Products class='choice'/>
            </div>
            <div className='componentHolder'>
              <Products />
            </div>
            <div className='componentHolder'>
              <Products class='hot'/>
            </div>
          </div>

          {/* Products list two */}
          <div className='holder2 text d-flex align-items-center justify-content-between'>
              <h3>Daily best sells</h3>
              <ul className='items list list-inline ml-auto'>
                <li className='list-inline-item cursor'><Link>  <a href="#">Featured</a>              </Link></li>
                <li className='list-inline-item cursor'><Link>  <a href="#"> Popular </a>  </Link></li>
                <li className='list-inline-item cursor'><Link>  <a href="#">New Added </a>  </Link></li>
              </ul>
          </div>
            <section className='row w-100 prod2'>
                <div className='col-sm-3 column'>
                      <div className="card cards" style={{backgroundColor:'#a8b59f'}}>
                              <div class="card-body cbody">
                                          <h4 class="card-title">Bring Nature<br/>into your <br/> Home</h4>  
                                          <Button>shop Now <ArrowForwardIcon/> </Button>
                              </div>
                              <img src={leaf} className='card-img' alt="onion" height={240} />
                        </div>
                </div>
                <div className='col-sm-9 column'>
                    <Slider {...settings}>
                        <div className='componentHolder2'>
                            <Products class='trend'/>
                        </div>
                        <div className='componentHolder2'>
                            <Products class='New'/>
                        </div>
                        <div className='componentHolder2'>
                            <Products />
                        </div>
                        <div className='componentHolder2'>
                            <Products class='choice'/>
                        </div>
                        <div className='componentHolder2'>
                            <Products/>
                        </div>
                        <div className='componentHolder2'>
                            <Products class='hot'/>
                        </div>
                      </Slider>
                </div>
            </section>
            <br />
            
            {/* items List2 */}
            <section className='itemsList '>
              <div className='row'>
                        <div className='col'>
                              <ListItems title='Top Selling' text='nestle original coffee matecoffee creamer'/>
                        </div>
                    
                      
                        <div className='col'>
                              <ListItems title='Trending products' text='organic cage free grade A Large brown Eggs'/>
                        </div>
                      
                      
                        <div className='col'>
                              <ListItems title='Recently Added' text='papperidge farm farmHouse healthy White BRead'/>
                        </div>
                      
                      
                        <div className='col'>
                              <ListItems title='Top Rated' text='foster form crispy classic mutton wings'/>
                        </div>
                </div>

            </section>
              <br />

              <section className='bannerHolder2'>
                <div className='box d-flex align-items-center'>
                      <div className='info'>
                        <h2>stay home & get your daily<br/>needs from our shop</h2>
                        <p>start your daily shooping with nest mart</p>
                        <Subscribe/>
                      </div>
                      <div className="img">
                        <img src={vegSeller} alt="images2"  className='w-100'/>
                      </div>
                </div>
              </section>
              <br />

      </div>
    </div>

    
  )
}
export default Home