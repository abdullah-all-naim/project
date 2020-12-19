import React from 'react';
import headerimg from '../header-img.png'


const Header = () => {
    return (
        <div className='container py-5' style={{padding:''}}>
            <div className='row  d-flex justify-content-center align-items-center'>
                <div className='col-md-6 text-left' data-aos='fade-right'>
                    <p className='' style={{fontWeight: 'bold', fontFamily: "Comic Neue, cursive", fontSize:'20px'}}>Sudah coba rutin upload video, share link ke segala penjuru, mendaki gunung, lewatin lembah tapi viewers dan subscribermu mogok segitu aja? <br/><br/><br/>

                    eiiits, jangan pesimis dulu bosque. Inilah saatnya PENDEKAR TURUN GUNUNG!
                    siapa tau, kamilah yang ditakdirkan jadi jawaban terakhir semua gundahmu #UhukLebaay</p>
                </div>
                <div className='col-md-6' data-aos='fade-left'>
                    <img style={{ width: '100%' }} src={headerimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;