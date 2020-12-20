import React from 'react';
import articleimg from '../article-img.png'
const article = [
    {
        id: 1,
        image: articleimg,
        title: 'Strategi SEO YouTube yang Berhasil!',
        description: 'Popularitas konten video sedang meningkat. Sebuah laporan yang diterbitkan pada tahun 2018 oleh State of Inbound menemukan bahwa 45% tim.. '
    },
    {
        id: 2,
        image: articleimg,
        title: 'Strategi SEO YouTube yang Berhasil!',
        description: 'Popularitas konten video sedang meningkat. Sebuah laporan yang diterbitkan pada tahun 2018 oleh State of Inbound menemukan bahwa 45% tim.. '
    },
    {
        id: 3,
        image: articleimg,
        title: 'Strategi SEO YouTube yang Berhasil!',
        description: 'Popularitas konten video sedang meningkat. Sebuah laporan yang diterbitkan pada tahun 2018 oleh State of Inbound menemukan bahwa 45% tim.. '
    },
]

const Article = () => {
    return (
        <div className="bg-white">
            <h2 className='font-weight-bold text-center' style={{paddingTop:'100px'}}>Artikel terpopuler</h2>
            <div className='d-flex flex-wrap justify-content-center'>
                
                {
                    article.map(x =>
                        <div className='d-flex justify-content-center col-4 col-lg-2 m-5 py-4' style={{backgroundColor:'#E5E5E5'}}>
                            <div className='text-center bg-white py-4'>
                                <div>
                                    <img src={x.image} alt="" />
                                </div>
                                <div className='m-auto'>
                                    <h4 className='col-10 text-left py-4'>{x.title}</h4>
                                    <p className='col-10 text-left'>{x.description}</p>
                                </div>
                                <div>
                                    <h5 className='bg-danger text-white my-5'>selengkapnya</h5>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Article;
