import "./ProductCard.css";
import star from "../assets/white-star.png";

interface ProductProps {
  product: {
    title: string;
    description: string;
    price: number;
    rating: {
      rate?: number;
      count?: number;
    };
    image?: URL;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <img src={`${product?.image}`} alt={`${product?.description}`} />
      </div>
      <div className="product_details">
        <h3 className="product_price">${product?.price}</h3>
        <p className="product_title">{product?.title}</p>

        <footer className="align_center">
          <div className="product_info_footer">
            <p className="product_rating">
              <img src={star} alt="star" /> {product?.rating.rate}{" "}
            </p>
            <p className="product_review_count">{product?.rating.count}</p>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
