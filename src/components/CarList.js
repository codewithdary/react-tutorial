import React from 'react'

let cars = ['Mercedes','BMW','Audi','Volve','Porsche'];

class CarList extends React.Component {
    render() {
        return <ul>
            {cars.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    }
}

export default CarList