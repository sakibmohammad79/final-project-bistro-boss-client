import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className='flex justify-center items-center gap-4'>
            <img style={{width: '104px', borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h4 className='text-2xl'>{name}---------</h4>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600 font-bold'>${price}</p>
        </div>
    );
};

export default MenuItem;