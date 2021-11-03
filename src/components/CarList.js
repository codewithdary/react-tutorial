import React from 'react'
import Car from './Car';
import cars from './Cars';

class CarList extends React.Component {    
    render() {           
        return(
            <div class="mx-auto w-4/5 grid sm:grid-cols-3 gap-6">
                {cars.map(function(car) {
                    return <Car {...car} />
                })}            
            </div>
        );
    }
}

export default CarList