import React, { Component } from 'react'

class Car extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2017/05/03/14/24/audi-2281218_960_720.jpg" width="300px"/>
                </div>

                <div>
                    <div>
                        <h1>
                            Audi
                        </h1>

                        <p>
                            Luxury vehicles
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

//Export
export default Car