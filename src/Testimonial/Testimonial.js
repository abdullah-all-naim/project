import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';

const Testimonial = () => {
    return (
            <div className='py-5' style={{ backgroundColor:'white'}}>
            <h2 className='text-center my-5' style={{ fontFamily: "Comic Neue, cursive" }}>Cerita Mereka</h2>
                <div className='d-flex flex-wrap justify-content-center' style={{ fontFamily: "Comic Neue, cursive" }}>
                    <div className='col-md-2 col-4 text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' }}>
                        <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-44px)' }} />
                        <div>
                            <h4>SELENA GOES</h4>
                            <div className='mb-3' >
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                            </div>
                            <div style={{ borderBottom: '2px solid gray' }}></div>
                            <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                        </div>
                    </div>
                    <div className='col-md-2 col-4 text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', fontFamily: "Comic Neue, cursive", boxShadow: '5px 5px' }}>
                        <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-44px)' }} />
                        <div>
                            <h4>SELENA GOES</h4>
                            <div className='mb-3' >
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                            </div>
                            <div style={{ borderBottom: '2px solid gray' }}></div>
                            <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                        </div>
                    </div>
                    <div className='col-md-2 col-4 text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', fontFamily: "Comic Neue, cursive", boxShadow: '5px 5px' }}>
                        <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-44px)' }} />
                        <div>
                            <h4>SELENA GOES</h4>
                            <div className='mb-3' >
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                            </div>
                            <div style={{ borderBottom: '2px solid gray' }}></div>
                            <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                        </div>
                    </div>
                    <div className='col-md-2 col-4 text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', fontFamily: "Comic Neue, cursive", boxShadow: '5px 5px' }}>
                        <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-44px)' }} />
                        <div>
                            <h4>SELENA GOES</h4>
                            <div className='mb-3' >
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                                <StarIcon style={{ color: 'gold' }} />
                            </div>
                            <div style={{ borderBottom: '2px solid gray' }}></div>
                            <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Testimonial;