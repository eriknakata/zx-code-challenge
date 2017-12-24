import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/product.css'

const product = (props) => {
    return (
        <div className="product-card">
            <img src={props.imageUrl} alt={props.title} title={props.title} />
            <span className="product-title">{props.title}</span>
            <span className="product-price">R$ {props.price}</span>
            <div className="product-buttons">
                <button className="btn-subtract" onClick={() => props.productRemoved(props.quantity)}>
                    -
                </button>
                <div className="box-quantity">
                    <span>{props.quantity}</span>
                </div>
                <button className="btn-plus" onClick={() => props.productAdded(props.quantity)}>
                    +
                </button>
            </div>
        </div>
    );
}

product.propTypes = {
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productRemoved: PropTypes.func.isRequired,
    productAdded: PropTypes.func.isRequired
};

product.defaultProps = {
    quantity: 0
}

export default product