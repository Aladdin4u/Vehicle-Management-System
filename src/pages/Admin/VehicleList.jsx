import React from 'react';

const VechicleList = () => {
    return ( 
        <div className="grid grid-cols-4 gap-4">
            <div className='bg-orange-500 rounded-lg p-8'>
                <p>50</p>
                <p>Buses</p>
            </div>
            <div className='bg-purple-500 rounded-lg p-8'>
                <p>34</p>
                <p>car</p>
            </div>
            <div className='bg-green-500 rounded-lg p-8'>
                <p>40</p>
                <p>Tricycle</p>
            </div>
            <div className='bg-orange-500 rounded-lg p-8'>
                <p>5</p>
                <p>Tractor</p>
            </div>
        </div>
     );
}
 
export default VechicleList;