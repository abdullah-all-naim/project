import React from 'react';
import chat from '../chat.png'

const ChatAdmin = () => {
    return (
        <div className='text-center my-5' style={{fontFamily: "Comic Neue, cursive"}}>
            <h2>pertanyaanmu tidak ada disini?</h2>
            <img src={chat} alt=""/>
            <h2 style={{color: 'rgba(243, 52, 89, 1)'}}>chat admin</h2>
        </div>
    );
};

export default ChatAdmin;