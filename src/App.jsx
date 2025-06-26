import React, { useState } from "react";
import ProductButtons from "./components/ProductButtons";
import "./assets/styles/style.scss";

//飲み物情報
const products = [
  { id: "Coffee", drinkName: "コーヒー", drinkPrice: 480 },
  { id: "tea", drinkName: "紅茶", drinkPrice: 280 },
  { id: "milk", drinkName: "ミルク", drinkPrice: 180 },
  { id: "coke", drinkName: "コーラ", drinkPrice: 190 },
  { id: "beer", drinkName: "ビール", drinkPrice: 580 },
];

function App() {
  const [counter, setCounter] = useState(Array(products.length).fill(0));
  const [sumPrice, setSumPrice] = useState(0);
  const [sumCount, setSumCount] = useState(0);

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
        {products.map((product, index) => {
          return (
            <ProductButtons
              key={product.id}
              buttonId={product.id}
              countId={`${product.id}-count`}
              drinkName={product.drinkName}
              drinkPrice={product.drinkPrice}
              count={counter[index]}
              onClicked={() => handleClick(index)}
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

export default App;
