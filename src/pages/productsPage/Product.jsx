import "./product.css";

const Product = (props) => {
  const { src, name } = props;

  return (
    <div className="product">
      <img className="product-img" src={src} alt={name} />
      <span style={{ padding: 0, margin: "5px" }}>{name}</span>
    </div>
  );
};
export default Product;
