import React, { Component } from 'react'

function Car(props) {
    return(
        <div class="text-center mx-auto">
            <div>
                <img 
                    src={props.imageUrl} 
                    class="rounded-xl shadow-xl"
                    alt="Audi"/>
            </div>

            <div>
                <div>
                    <h1 class="text-4xl font-bold text-gray-700 pt-4">
                        {props.name}
                    </h1>

                    <p class="text-xs font-thin uppercase text-gray-400 pt-4">
                        {props.productType}
                    </p>

                    <p class="text-s text-gray-800 pt-4">
                        {props.description}
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

//Export
export default Car