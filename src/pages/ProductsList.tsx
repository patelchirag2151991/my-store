import { useEffect, useState } from "react";

import "./ProductsList.css";
import ProductCard from "./ProductCard";
import ProductsCardSkeleton from "./ProductsCardSkeleton";
import useData from "../hooks/useData";
import Table from "../components/TableView/Table";
import Loader from "../components/Common/Loader";
import gridImage from "../assets/grid_view.png";
import listImage from "../assets/list_view.png";

const ProductsList = () => {
  const [toggleView, setView] = useState(true);
  const toggleHandler = (e: any) => {
    e.preventDefault();
    setView(!toggleView);
  };

  const [sortBy, setSortBy] = useState("");
  const [sortedProducts, setSortedProducts] = useState<any>([]);

  const { data, error, isLoading } = useData("/products");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    if (data) {
      const products = [...data];

      if (sortBy === "price desc") {
        setSortedProducts(products.sort((a, b) => b.price - a.price));
      } else if (sortBy === "price asc") {
        setSortedProducts(products.sort((a, b) => a.price - b.price));
      } else {
        setSortedProducts(products);
      }
    }
  }, [sortBy, data]);

  return (
    <>
      <section className="product_list_section">
        <header className="align_center products_list_header">
          <h2>Products</h2>
          <div className="grid_container">
            <button
              className={
                toggleView
                  ? "product_sort_item product_filter_item_active"
                  : "product_sort_item"
              }
              onClick={toggleHandler}
            >
              <img src={gridImage} style={{ width: 25, height: 25 }} />
            </button>
            <button
              className={
                toggleView
                  ? "product_sort_item"
                  : "product_sort_item product_filter_item_active"
              }
              style={{ marginLeft: 5 }}
              onClick={toggleHandler}
            >
              <img src={listImage} style={{ width: 25, height: 25 }} />
            </button>
            <select
              name="sort"
              id=""
              className="products_sorting"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Relevance</option>
              <option value="price desc">Price High to Low</option>
              <option value="price asc">Price Low to High</option>
            </select>
          </div>
        </header>
      </section>

      {!toggleView ? (
        <section className="align_center table_page">
          {isLoading && <Loader />}
          {error && <em className="form_error">{error}</em>}
          {data && (
            <Table headings={["Product Image", "Title", "Price", "Rating"]}>
              <tbody>
                {sortedProducts.map((product: any) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={`${product?.image}`}
                        alt={`${product?.description}`}
                        width="25"
                      />
                    </td>
                    <td>{product?.title}</td>
                    <td>{product?.price.toFixed(2)}</td>

                    <td>{product?.rating.rate}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </section>
      ) : (
        <div className="products_list">
          {error && <em className="form_error">{error}</em>}
          {isLoading
            ? skeletons.map((n) => <ProductsCardSkeleton key={n} />)
            : data &&
              sortedProducts.map((product: any) => {
                return <ProductCard key={product.id} product={product} />;
              })}
        </div>
      )}
    </>
  );
};

export default ProductsList;
