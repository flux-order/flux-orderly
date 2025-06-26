// 商品をカウントするボタンを生成します
function ProductButtons({
  buttonId,
  countId,
  drinkName,
  drinkPrice,
  count,
  onClicked,
}) {
  return (
    <button className="product-btns" id={buttonId} onClick={() => onClicked()}>
      {drinkName}
      <span className="product-price">{drinkPrice}円</span>
      <div className="product-counts" id={countId}>
        {count}
      </div>
    </button>
  );
}

export default ProductButtons;
