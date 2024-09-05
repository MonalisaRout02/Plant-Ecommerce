import React,{useState} from 'react'
import { useProducts } from '../Context/ProductContext'
import Button from './Button';

const FilterBar = () => {

    const {dispatch , InitialState} =useProducts();
    const [slider, setSlider] = useState(50);

    const sliderHandler = (e) => {
        setSlider(parseInt(e.target.value, 10));
        dispatch({ type: "PRICE_RANGE", payload: slider });
      };

      const handleCategoryChange = (e) => {
        if (e.target.checked) {
            dispatch({ type: "CATEGORY", payload: e.target.value });
        } else {
            dispatch({ type: "REMOVE-CATEGORY", payload: e.target.value });
        }
    };

    const handleRatingChange = (e) => {
        dispatch({ type: "RATINGS", payload: parseInt(e.target.value, 10) });
    };


  return (
    <div>
        <div className='flex flex-col'>
        <h4 className='Text ' id='sideHeading'>Filter's</h4>

        <div>
            <nav className="range my-5">
                <input
                type="range"
                min="10"
                max="50"
                step={1}
                value={slider}
                class="slider"
                onChange={(e) => sliderHandler(e)}
                onClick={(e) => sliderHandler(e)}
                />
                <span>{slider}</span>
            </nav>

            <hr/>

            <nav className='my-5'>
              <form>
                <label for="Succulents">
                    <div className='flex flex-row gap-2'>
                    <input className="w-3" type="checkbox" name="CATEGORY" value="Succulents" onChange={(e)=> handleCategoryChange (e)}/>
                    Succulents
                    </div>
                 
                </label>
                <label for="Indoor Plants">
                <div className='flex flex-row gap-2'>
                  <input className="w-3" type="checkbox" name="CATEGORY" value="Indoor Plants" onChange={(e)=> handleCategoryChange (e)} />
                  Indoor Plants
                  </div>
                </label>
                <label for="Air-Purifying Plants">
                <div className='flex flex-row gap-2'>
                  <input  className="w-3"  type="checkbox" name="CATEGORY" value="Air-Purifying Plants" onChange={(e)=> handleCategoryChange (e)} />
                  Air-Purifying Plants
                  </div>
                </label>
                <label for="Flowering Plants">
                <div className='flex flex-row gap-2'>
                  <input className="w-3" type="checkbox" name="CATEGORY" value="Flowering Plants" onChange={(e)=> handleCategoryChange (e)} />
                  Flowering Plants
                  </div>
                </label>
               
              </form>
            </nav>

            <hr />
            <nav className="my-5">
              <form>
              
                <label for="four">
                <div className='flex flex-row gap-2'>
                  <input className="w-3" type="radio" name="RATINGS" value={4} onChange={(e)=>handleRatingChange(e)}/>
                  4 Stars & above
                  </div>
                </label>
                <label for="three">
                <div className='flex flex-row gap-2'>
                  <input className="w-3"  type="radio" name="RATINGS"  value={3} onChange={(e)=>handleRatingChange(e)} />
                  3 Stars & above
                  </div>
                </label>
                <label for="two">
                <div className='flex flex-row gap-2'>
                  <input className="w-3" type="radio" name="RATINGS"  value={2} onChange={(e)=>handleRatingChange(e)} />
                  2 Stars & above
                  </div>
                </label>
                <label for="one">
                <div className='flex flex-row gap-2'>
                  <input className="w-3" type="radio" name="RATINGS"  value={1} onChange={(e)=>handleRatingChange(e)} />
                  1 Stars & above
                  </div>
                </label>
              </form>
            </nav>

            <hr className='py-5'/>
            <button onClick={()=> dispatch({type:"CLEAR",payload:InitialState})} className="submit-button" style={{ padding: '5px 20px' }}> CLEAR</button> 
        </div>
        </div>
     
    </div>
  )
}

export default FilterBar
