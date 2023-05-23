import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import image from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='feature-item bg-fixed text-white p-4 bg-opacity-30 bg-brightness-10 mb-16'>
            <SectionTitle
            heading={'Chick It Now'}
            subHeading={'From Our menu'}>
            </SectionTitle>
            <div className='md:flex justify-center items-center px-24 pt-12 pb-24'>
                <img style={{width: '400px', height: '250px'}} src={image} alt="" />
                <div className='ml-12 space-y-3'>
                    <h2>Aug 20, 2023</h2>
                    <h3>WHERE I CAN GET SOME?</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</h5>
                    <button className="btn text-white btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;