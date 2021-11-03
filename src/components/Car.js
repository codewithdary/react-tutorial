import React, { Component } from 'react'

class Car extends React.Component {
    render() {
        return(
            <div class="text-center mx-auto">
                <div>
                    <img 
                        src={this.props.imageUrl} 
                        class="rounded-xl shadow-xl"
                        alt="Audi"/>
                </div>

                <div>
                    <div>
                        <h1 class="text-4xl font-bold text-gray-700 pt-4">
                            {this.props.name}
                        </h1>

                        <p class="text-xs font-thin uppercase text-gray-400 pt-4">
                            {this.props.productType}
                        </p>

                        <p class="text-s text-gray-800 pt-4">
                            {this.props.description}
                        </p>
                        
                    </div>
                </div>
            </div>
        );
    }
}

//Export
export default Car