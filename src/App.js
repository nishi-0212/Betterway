import "./styles.css";
import { useState } from "react";
import { products } from "./data";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Filters from "./components/Filters";

export default function App() {
  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  return (
    <div>
      <h1>Mini E-Commerce</h1>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <ProductList
        products={products}
        cart={cart}
        setCart={setCart}
        search={search}
        category={category}
        sort={sort}
      />

      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}
