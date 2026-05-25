import product from '../product';

function Image() {
    return (
          <div className="product-image">
            <img
          src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
      />
        </div>
  );
}

export default Image;
