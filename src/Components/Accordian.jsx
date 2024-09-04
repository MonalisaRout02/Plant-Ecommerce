import React, { useState } from 'react';
import data from '../Data/FAQ';

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleClick(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className='flex justify-center my-20'>
        
      <div className=' w-3/4'> 
      <h2 className='Text'id='subHeading'>FAQ's</h2>
        {data && data.length > 0 ? (
          data.map(dataItem => (
            <div
              className='item px-4 py-4 border-2 my-5 rounded-lg shadow-sm'
              key={dataItem.id}
            >
              <div
                className='flex flex-row justify-between cursor-pointer'
                onClick={() => handleClick(dataItem.id)}
              >
                <h2 className='Text py-2' id='sideHeading'>
                  {dataItem.question}
                </h2>
                <span className='px-2'>
                  {selected === dataItem.id ? (
                    <div><img src='/assets/open.svg' alt='openArrow' /></div>
                  ) : (
                    <div><img src='/assets/closed.svg' alt='closedArrow' /></div>
                  )}
                </span>
              </div>
              <div>
                {selected === dataItem.id && (
                  <div>
                    <img className="w-full py-2" src='/assets/divider.svg' alt='divider' />
                    <div className='pt-2'>{dataItem.answer}</div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
