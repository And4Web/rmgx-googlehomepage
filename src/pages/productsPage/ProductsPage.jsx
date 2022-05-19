// import "./styles.css";
import { products } from "../../../src/productsData";
import ProductDropdown from "./ProductDropdown";

export default function ProductsPage() {
  return (
    <div className="products-page">
      <h1>Google Products</h1>
      <ProductDropdown products={products} />
    </div>
  );
}
