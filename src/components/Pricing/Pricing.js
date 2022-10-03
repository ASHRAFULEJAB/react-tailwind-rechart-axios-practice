import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1,name:'Free',price:0,
         features:[
            'Extraordinary feature',
            'Extra feature',
            'Premuim feature',
            'Normal feature',
            'Platinum feature',
            'Surprise feature'
         ]
    },
        {id:2,name:'Medium',price:9.99,
        features:[
            'Everything Free',
            'Extra feature',
            'Premuim feature',
            'Normal feature',
            'Platinum feature',
            'Surprise feature'
         ]
    },
        {id:3,name:'Premium',price:19.99,
        features:[
            'Everythig Premium',
            'Extra feature',
            'Premuim feature',
            'Normal feature',
            'Platinum feature',
            'Surprise feature'
         ]
    },
    ]
    return (
        <div>
            <h2 className='text-5xl mt-3 bg-slate-400 p-12 text-white font-bold'>Biggest Deal on the town!!
            </h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
            {
                pricingOptions.map(price => <PriceOption
                key={price.id}
                price={price}
                >

                </PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;