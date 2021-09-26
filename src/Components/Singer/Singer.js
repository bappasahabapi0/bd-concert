import React from 'react';
import './Singer.css'

const Singer = (props) => {
    // console.log(props);
    const {name, band, cost,img,gener,city} = props.singer;
    return (
        <div className="col-md-4 my-2">
        <div className="row row-col-md-3 g-4">
            <div className="col rounded-3">
                <div className="card h-100  bg-info">
                    <img src={img} className="card-img top img-fluid  image" alt="" />
                    <div className="card-body text-center">
                        <h6> <strong>Singer Name: </strong> {name}</h6>
                        <p><strong>Band Name:</strong> {band}</p>
                        <p><strong>Band Type:</strong> {gener}</p>
                        <p><strong>Location:</strong> {city}</p>
                        <p><strong>Costing:</strong> {cost} BDT</p>
                        
                    </div>
                            <div className="button">
                               <button type="button" onClick={()=>props.handleAddToCart(props.singer)} className="btn btn-primary"><i class="fas fa-check"></i> Chose Singer</button>
                            </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Singer;