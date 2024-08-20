import React,{useState} from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './dropdown.css'
const DropDown = (props) => {
    let {data ,placeholder,icon} = props ;
    const [toggle, setToggle] = useState( false );
    const [offSelect, setSelect] = useState( placeholder );
    const [indexMATCH, setIndex] = useState( 0 );

    const [listItem1, setlistItem1] = useState( data );
    

    let toggling = () => { //listing all categaries
        setToggle(!toggle);
    }
    
    let outSelect = (index , item) => {
        setToggle(false);
        setIndex(index)
        setSelect(item);
    }

    let filtered = (e) =>{
        let keyword = e.target.value.toLowerCase();
        let list1 = data.filter( (ele) => { 
            return ele.toLowerCase().includes( keyword ) ;
                        })
        let list2 = list1.filter((ele,i)=>{
            return list1.indexOf(ele) === i;
        })
        setlistItem1(list2);
    }
    // https://countriesnow.space/api/v0.1/countries/
return (
    <ClickAwayListener onClickAway={()=>setToggle(false)}>
    <div className='categaries cursor fw-bold'>
        {icon}
                <span className='categary cursor' onClick={toggling}> 
                                        {offSelect.length > 10 ?offSelect.substr(0,14)+'..':offSelect } 
                                        <KeyboardArrowDownIcon className='cursor arrowDown' />  
                </span>
            { toggle === true && 
            <div className='selectDrop'>

                    <div className='search'> {/* Categaries search*/} 
                        <input type="text"  placeholder='Categaries..' onChange={filtered} />
                    </div>

                    <ul>{/* list of categaries */}
                        <li onClick={()=>outSelect(0,placeholder )} className={indexMATCH === 0 ? 'active' :''}>{placeholder}</li>
                            {
                                listItem1.map((item, index)=>{ //looping over categaries and Nations
                                    return(
                                        <li key={index+1} onClick={()=>outSelect(index+1, item )} 
                                            className={indexMATCH === index+1 ? 'active' :''}> {item} 
                                        </li>
                                    )})
                            }
                    </ul>

            </div>}
    </div>
    </ClickAwayListener>
  )
}

export default DropDown