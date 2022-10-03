import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({price}) => {
    const{features}=price
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3><span className='text-6xl text-white font-bold '>{price.price}</span>
                <span className='text-2xl text-gray-300'>/mon</span>
                </h3>
                <p className='text-3xl font-bold my-3'>
                    {price.name}
                </p>
            </div>
            
                {
                    features.map((feature,idx) => <Feature
                    key={idx}
                    feature={feature}
                    >

                    </Feature>)
                }
            <button className='bg-green-500 text-white w-full mt-3 py-2 font-bold text-2xl rounded-md'>Buy Now</button>
            
        </div>
    );
};

export default PriceOption;