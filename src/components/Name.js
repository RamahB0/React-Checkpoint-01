import product from '../product';

function Name() {
    return (
          <div className="product-name">
            <h5 className="card-title">{product.name}</h5>
          </div>
        );
}

export default Name;
