import React, { useState } from 'react';
import { useProducts } from '../Context/ProductContext';
import Button from './Button';

const FilterBar = () => {
    const { dispatch, InitialState } = useProducts();
    const [slider, setSlider] = useState(50);
    const [checkedCategories, setCheckedCategories] = useState([]);
    const [selectedRating, setSelectedRating] = useState(null);

    const sliderHandler = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setSlider(newValue);
        dispatch({ type: "PRICE_RANGE", payload: newValue });
    };

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        const updatedCategories = checked
            ? [...checkedCategories, value]
            : checkedCategories.filter(category => category !== value);
        
        setCheckedCategories(updatedCategories);
        
        if (checked) {
            dispatch({ type: "CATEGORY", payload: value });
        } else {
            dispatch({ type: "REMOVE-CATEGORY", payload: value });
        }
    };

    const handleRatingChange = (e) => {
        const ratingValue = parseInt(e.target.value, 10);
        setSelectedRating(ratingValue);
        dispatch({ type: "RATINGS", payload: ratingValue });
    };

    const handleClear = () => {
        setSlider(50);
        setCheckedCategories([]);
        setSelectedRating(null);

        dispatch({ type: "CLEAR", payload: InitialState });
    };

    return (
        <div>
            <div className='flex flex-col'>
                <h4 className='Text' id='sideHeading'>Filter's</h4>

                <div>
                    <nav className="range my-5">
                        <input
                            type="range"
                            min="10"
                            max="50"
                            step={1}
                            value={slider}
                            className="slider"
                            onChange={(e) => sliderHandler(e)}
                        />
                        <span>{slider}</span>
                    </nav>

                    <hr />

                    <nav className='my-5'>
                        <form>
                            <label htmlFor="Succulents">
                                <div className='flex flex-row gap-2'>
                                    <input
                                        className="w-3"
                                        type="checkbox"
                                        name="CATEGORY"
                                        value="Succulents"
                                        checked={checkedCategories.includes('Succulents')}
                                        onChange={handleCategoryChange}
                                    />
                                    Succulents
                                </div>
                            </label>
                            <label htmlFor="Indoor Plants">
                                <div className='flex flex-row gap-2'>
                                    <input
                                        className="w-3"
                                        type="checkbox"
                                        name="CATEGORY"
                                        value="Indoor Plants"
                                        checked={checkedCategories.includes('Indoor Plants')}
                                        onChange={handleCategoryChange}
                                    />
                                    Indoor Plants
                                </div>
                            </label>
                            <label htmlFor="Air-Purifying Plants">
                                <div className='flex flex-row gap-2'>
                                    <input
                                        className="w-3"
                                        type="checkbox"
                                        name="CATEGORY"
                                        value="Air-Purifying Plants"
                                        checked={checkedCategories.includes('Air-Purifying Plants')}
                                        onChange={handleCategoryChange}
                                    />
                                    Air-Purifying Plants
                                </div>
                            </label>
                            <label htmlFor="Flowering Plants">
                                <div className='flex flex-row gap-2'>
                                    <input
                                        className="w-3"
                                        type="checkbox"
                                        name="CATEGORY"
                                        value="Flowering Plants"
                                        checked={checkedCategories.includes('Flowering Plants')}
                                        onChange={handleCategoryChange}
                                    />
                                    Flowering Plants
                                </div>
                            </label>
                        </form>
                    </nav>

                    <hr />
                    <nav className="my-5">
                        <form>
                            <label htmlFor="four">
                                <div className='flex flex-row gap-2'>
                                    <input
                                        className="w-3"
                                        type="radio"
                                        name="RATINGS"
                                        value={4}
                                        checked={selectedRating === 4}
                                        onChange={handleRatingChange}
                                    />
                                    4 Stars & above
                                </div>
                            </label>
                            <label htmlFor="three">
                                <div className='flex flex-row gap-2'>
                                    <input
                                        className="w-3"
                                        type="radio"
                                        name="RATINGS"
                                        value={3}
                                        checked={selectedRating === 3}
                                        onChange={handleRatingChange}
                                    />
                                    3 Stars & above
                                </div>
                            </label>
                            <label htmlFor="two">
                                <div className='flex flex-row gap-2'>
                                    <input
                                        className="w-3"
                                        type="radio"
                                        name="RATINGS"
                                        value={2}
                                        checked={selectedRating === 2}
                                        onChange={handleRatingChange}
                                    />
                                    2 Stars & above
                                </div>
                            </label>
                            <label htmlFor="one">
                                <div className='flex flex-row gap-2'>
                                    <input
                                        className="w-3"
                                        type="radio"
                                        name="RATINGS"
                                        value={1}
                                        checked={selectedRating === 1}
                                        onChange={handleRatingChange}
                                    />
                                    1 Stars & above
                                </div>
                            </label>
                        </form>
                    </nav>

                    <hr className='py-5'/>
                    <button onClick={handleClear} className="submit-button" style={{ padding: '5px 20px' }}> CLEAR</button>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;
