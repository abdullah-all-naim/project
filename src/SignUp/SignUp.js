import React from 'react';
import frame from '../frame.png'

const SignUp = () => {
    return (
        <div className='pt-5' style={{ backgroundColor: 'white', marginBottom:'70px', paddingBottom:'80px' }}>
            <div className='d-flex flex-wrap justify-content-center container'>
                <div className='col-md-6' style={{ color: 'rgba(243, 52, 89, 1)', fontFamily: "Comic Neue, cursive" }}>
                    <p style={{ fontSize: '25px' }}>tunggu apalagi?</p>
                    <h5 style={{ fontSize: '30px' }}>DAFTAR SEKARANG JUGA!</h5>
                    <p style={{ fontSize: '25px' }}>mumpung masih ada promo</p>
                    <p style={{ fontSize: '25px' }}>IDR 100.000</p>
                    <p style={{ fontSize: '25px' }}>IDR 50.000</p>
                    <h1 style={{ fontSize: '60px', color: 'black' }}>IDR 0, -</h1>
                    <p style={{ fontSize: '25px' }}>GASS PWOLL !</p>
                </div>
                <div className="col-md-6">
                    <img style={{ width: '450px' }} src={frame} alt="" />
                </div>
            </div>
            <div style={{ backgroundColor: 'rgba(243, 52, 89, 1)', borderRadius: '10px', marginBottom: '20px', cursor: 'pointer' }}>
                <h1 style={{ fontFamily: "Comic Neue, cursive", color: 'white', fontSize: '50px', textAlign: 'center', padding: '10px 0', }}>daftar sekarang</h1>
            </div>
        </div>
    );
};

export default SignUp;