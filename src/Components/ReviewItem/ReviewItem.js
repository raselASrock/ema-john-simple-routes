import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    const {name, price, quantity, img} = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>Total Order: {quantity} item</small></p>
                </div>
                <div className="delet-container">
                    <button>Delet</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;