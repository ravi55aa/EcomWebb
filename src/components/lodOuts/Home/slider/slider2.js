import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Slider from "react-slick";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './slider2.css';
import images1 from '../../../../css/images/image11.png'
import images2 from '../../../../css/images/image2.png'
import images3 from '../../../../css/images/image3.png'
import images4 from '../../../../css/images/image4.png'
import images5 from '../../../../css/images/image5.webp'
// import images6 from '../../../../css/images/image6.png'
import images7 from '../../../../css/images/image7.png'
import images8 from '../../../../css/images/image8.png'
import images9 from '../../../../css/images/image9.png'
import images10 from '../../../../css/images/image10.png'
// 2nd  layer
import onion from '../../../../css/images/onion.png' 
import thise from '../../../../css/images/thise.png' 
import organic from '../../../../css/images/organic.png' 
const Homeslider2 = () => {
    const [rand ,setRandom] = useState(null)
    var settings = {
        arrows:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade:false
    };
    // window.onload = function(){
    //     randomGen();
    // }
    // const random = () =>{
    //     let ranodmNo = Math.floor(Math.random()*16);
    //     return ranodmNo
    // }
    // function randomGen(){
    //     const hexaDecimal = '1234567890abcdef'
    //     let set = []; 
    //     for(let i=0; i<=5; i++){
    //         set.push(hexaDecimal[random()]) 
    //     }
    //     let result = '#'+set.join('')
    //     setRandom(result);
    // }
    //     console.log(rand);
    // let colorsPack = [  {image:{images1},color:'#2ea0d1'}, {image:{images10},color:'#d4b6a3'},
    //                     {image:{images5},color:'#1ab01c'},{image:{images8},color:'#afe3ec'},
    //                     {image:{images3},color:'#c1ed22'},{image:{images1},color:'#52524b'},
    //                     {image:{images4},color:'#1b1f4d'},{image:{images7},color:'#c17994'},
    //                     {image:{images9},color:'#268894'},{image:{images2},color:'#c9358b'}]
    return (
        <div className='main container-fluid'>
            {/* 10 sliders*/}
            <Slider {...settings} className='main_homeSlider'>
                        <div className='items'  >
                            <div className='itemContainer' style={{backgroundColor:'#fff'}}>
                                <img src={images1} alt="images1" />
                                <h5 >item1</h5>
                                <p className='lead'>36items</p>
                            </div >
                        </div>
                        <div className='items'>
                            <div className='itemContainer' style={{backgroundColor:'#fff'}}>
                                <img src={images10} alt="" />
                                <h5>item</h5>
                                <p>36items</p>
                            </div >
                        </div>
                <div className='items'>
                    <div className='itemContainer' style={{backgroundColor:'#fff'}}>
                        <img src={images5} alt="" />
                        <h5>item</h5>
                        <p>36items</p>
                    </div >
                </div>
                <div className='items'>
                    <div className='itemContainer' style={{backgroundColor:'#fff'}}>
                        <img src={images8} alt="" />
                        <h5>item</h5>
                        <p>36items</p>
                    </div >
                </div>
                <div className='items'>
                    <div className='itemContainer' style={{backgroundColor:'#fff'}}>
                        <img src={images3} alt="" />
                        <h5>item</h5>
                        <p>36items</p>
                    </div >
                </div>
                <div className='items'>
                    <div className='itemContainer' style={{backgroundColor:'#fff'}}>
                        <img src={images1} alt="" />
                        <h5>item</h5>
                        <p>36items</p>
                    </div >
                </div>
                <div className='items'>
                    <div className='itemContainer' style={{backgroundColor:'#fff'}}>
                        <img src={images4} alt="" />
                        <h5>item</h5>
                        <p>36items</p>
                    </div >
                </div>
                <div className='items'>
                    <div className='itemContainer' style={{backgroundColor:'#fff'}}>
                        <img src={images7} alt="" />
                        <h5>item</h5>
                        <p>36items</p>
                    </div >
                </div>
                <div className='items'>
                    <div className='itemContainer' style={{backgroundColor:'#fff'}}>
                        <img src={images9} alt="" />
                        <h5>item</h5>
                        <p>36items</p>
                    </div >
                </div>
                <div className='items'>
                    <div className='itemContainer' style={{backgroundColor:'#fff'}}>
                        <img src={images2} alt="" />
                        <h5>item</h5>
                        <p>36items</p>
                    </div >
                </div>
            </Slider>

            {/* 3 boxes */}
            <div className='row d-flex main2'>
                    <div className='col-sm-4 column'>
                        <div className="card cards" style={{backgroundColor:'#eee7d1'}}>
                                <div class="card-body">
                                    <h4 class="card-title">EveryDay fresh & <br/> clean with our<br/> products</h4>  
                                    <Button>shop Now <ArrowForwardIcon/></Button>
                                </div>
                                <img src={onion} className='card-img' alt="onion" />
                            </div>
                    </div>
                        <div className='col-sm-4 column'>
                            <div className="card cards " style={{backgroundColor:'#efe3e4'}}>
                                    <div class="card-body">
                                        <h4 class="card-title">make your breakfast <br/> health and easy</h4>  
                                        <Button>shop Now <ArrowForwardIcon/></Button>
                                    </div>
                                    <img src={thise} className='card-img' alt="onion" />
                            </div>
                        </div>
                        <div className='col-sm-4 column'>
                            <div className="card cards" style={{backgroundColor:'#e0e4e9'}}>
                                    <div class="card-body">
                                        <h4 class="card-title">the best organic<br/> products online</h4>  
                                        <Button>shop Now <ArrowForwardIcon/></Button>
                                    </div>
                                    <img src={organic} className='card-img' alt="onion" />
                            </div>
                        </div>
                </div>
            </div>      
        )
}

export default Homeslider2