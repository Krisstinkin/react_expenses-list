import Header from "components/Header";
import Product from "components/Goods";
import Footer from "components/Footer";
import { useState } from "react";
import ProductsForm from "components/ProductsForm";

function App() {
   const [products, setProducts] = useState([
    {
      id: 1,
      firstName: "Молоко",
      lastName: "1,5%",
      weigth: 900,
      course: "Молочные товары",
      price: "75",
      buttonText: "Добавлено"
    },
    {
      id: 2,
      firstName: "Хлеб",
      lastName: "Ржаной",
      weigth: 290,
      course: "Хлебобулочные изделия",
      price: "45",
      buttonText: "Добавить"
    },
    {
      id: 3,
      firstName: "Шоколад",
      lastName: "Горький",
      weigth: 70,
      course: "Кондитерские товары",
      price: "125",
      buttonText: "Добавить"
    },
    {
      id: 4,
      firstName: "Творог",
      lastName: "5%",
      weigth: 200,
      course: "Молочные товары",
      price: "70",
      buttonText: "Добавлено"
    },
    {
      id: 5,
      firstName: "Мандарины",
      lastName: "Мароканские",
      weigth: 500,
      course: "Фрукты",
      price: "95",
      buttonText: "Добавить"
    }
   ])

   const deleteProduct = (id) => {
      const filteredProducts = products.filter(product => product.id !== id) //логика от обратного - покажем массив без того продукта, который удалили
      setProducts(filteredProducts) //обновляем наше состояние - передаем наш отфильтрованный массив. setProducts и придуман именно для того, чтобы мы в него могли передавать переделанный массив
   }

   const addProduct = (product) => {
    setProducts([...products, product])
   }

   const changeButtonText = (id) => {

      let productsJson = JSON.parse(JSON.stringify(products))

      const productsAdd = productsJson.find(product => product.id === id);

        if (productsAdd.buttonText === "Добавить") {

          productsAdd.buttonText = "Добавлено";

      } else 
          (productsAdd.buttonText = "Добавить");

      setProducts(productsJson)
   }

  return (
        <div>
          <Header />
          <div className="mx-10 max-w-screen-lg mx-auto min-h-screen">
            <ProductsForm addProduct={addProduct} />
            {products.length === 0 && (
              <div className="mt-20 text-center text-7xl text-gray-300 font-thin">Список покупок пуст</div>
            )}
            {products.length > 0 && products.map((product) => {
              return (
                <Product key={product.id} product={product} deleteProduct={deleteProduct} changeButtonText={changeButtonText} />
              )
            })}
          </div>
          <Footer />
        </div>
    );
    
}

export default App;

//map это тоже самое, что и forEach - формирует новый массив из того, что мы здесь возвращаем
//вот этой записью <Product product={product} /> мы как будто вызываем функцию, которая отрисует нам карточку с продуктом. Просто недостаточно передать <Product /> - получим только HTML
//React всем дает ключи (key) для быстрой отрисовки изменений произошедших. Поэтому надо незабывать давать вот это состояние компонентам key={product.id}. Иначе он не поймет какой продукт изменяется

