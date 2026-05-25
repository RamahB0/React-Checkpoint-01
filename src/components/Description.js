import product from '../product';

function Description() {
    return (
          <div className="product-description">
            <p className="card-text">{product.description}</p>
      </div>
    );
}

export default Description;
