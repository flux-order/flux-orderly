
/*
const products = [
  { id: "Coffee", drinkName: "コーヒー", drinkPrice: 480 },
  { id: "tea", drinkName: "紅茶", drinkPrice: 280 },
  { id: "milk", drinkName: "ミルク", drinkPrice: 180 },
  { id: "coke", drinkName: "コーラ", drinkPrice: 190 },
  { id: "beer", drinkName: "ビール", drinkPrice: 580 },
];
*/

class ProductsDirector {
  // id: object.array
  #products = [];
  
  constructor() {
    console.log("create object!");
  }

  getProducts() {
    return this.#products;
  }

  // ? 商品の追加
  // id: number, productName: string, productPrice: number
  addProducts(id, name, price){
    const newProduct = {
      id: id,
      name: name,
      price: price
    };
    
    this.#products.push(newProduct)
  }
  
  // ? 商品の削除を行う
  // id: number
  deleteProducts(id) {   
    this.#products.splice(id, 1);
    this.#products = reWriteId(this.#products);
  }
}

// "id" を連番に書き換える
function reWriteId (products) {
  return products.map((product, index) => {
    return products.id = index;
  })
}

export default ProductsDirector;