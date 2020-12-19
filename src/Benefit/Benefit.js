import React from 'react';
import circle from '../circle-cropped.png'

const benefit = [
    {
        id: 1,
        image: circle,
        text: '100% AMAN'
    },
    {
        id: 2,
        image: circle,
        text: '100% AMAN'
    },
    {
        id: 3,
        image: circle,
        text: '100% AMAN'
    },
    {
        id: 4,
        image: circle,
        text: '100% AMAN'
    },
    {
        id: 5,
        image: circle,
        text: '100% AMAN'
    },
    {
        id: 6,
        image: circle,
        text: '100% AMAN'
    },
    {
        id: 7,
        image: circle,
        text: '100% AMAN'
    },
    {
        id: 8,
        image: circle,
        text: '100% AMAN'
    },
]

const Benefit = () => {
    return (
        <div className="">
            <h4 className='text-center' style={{margin:'100px 0'}}>FITUR DAN BENEFIT YANG KAMI TAWARKAN</h4>
            <div className='d-flex flex-wrap'>
                {
                    benefit.map(x =>
                        <div className='d-flex col-md-3 col-6 justify-content-center'>
                            <div className='text-center mb-5'>
                                <img src={x.image} style={{ width: '100px', margin:'auto' }} alt="" />
                                <h3 className='mt-2'>{x.text}</h3>
                            </div>
                            
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Benefit;