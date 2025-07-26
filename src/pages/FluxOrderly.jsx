import React, { useEffect, useState } from "react";
import ProductButtons from "@/components/ProductButtons";
import "@/assets/styles/style.scss";
import ProductsDirector from "@/features/ProductsDirector";

function FluxOrderly() {
  const [counter, setCounter] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);
  const [sumCount, setSumCount] = useState(0);
  const [products, setProducts] = useState(new ProductsDirector());

  // 初期レンダリング時にカウンターに商品数を代入
  useEffect(() => {
    setCounter(Array(products.getProducts().length).fill(0));
  }, [products]);

  // クリックされたらカウントアップする処理
  const handleClick = (index) => {
    setCounter((prev) => {
      let newCounters = [...prev];
      newCounters[index]++;
      return newCounters;
    });

    setSumPrice((prev) => (prev += products[index].drinkPrice));
    setSumCount((prev) => (prev += 1));
  };

  return (
    <div>
      {
        // ? mapを使って飲み物情報表示
      }
      <div className="products-container">
        {products.getProducts().map((product, i) => {
          return (
            <ProductButtons
              key={product.id}
              buttonId={product.id}
              countId={`${product.id}-count`}
              drinkName={product.drinkName}
              drinkPrice={product.drinkPrice}
              count={counter[i]}
              onClicked={() => handleClick(i)}
            />
          );
        })}
      </div>
      {
        // ? 合計と商品数の表示
      }
      <div className="product-container">
        <div className="product-title">お会計</div>
        <div className="product-liner"></div>
        <div className="product-count">商品数 : {sumCount}個</div>
        <div className="products-total">合計金額 : {sumPrice}円</div>
      </div>
    </div>
  );
}

export default FluxOrderly;
