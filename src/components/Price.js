import product from '../product';

function Price() {
    return (
          <div className="product-price">
            <p className="price-text"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          </div>
        );
}

export default Price;
