//если не добавить props со значениями product и deleteProduct и changebuttonText, то ничего работать не будет. Т.к. мы эти свойства написали на другом листе - сюда их необходимо добавить. По логике с областью видимости.

const Product = (props) => {
    const { product, deleteProduct, changeButtonText } = props

    return (
        <div className="bg-indigo-50 mt-10 py-6 px-8 rounded-md shadow-md flex justify-between">
            <div className="flex flex-col items-start">
                <p className="bg-indigo-200 text-indigo-800 font-semibold rounded-full px-3 py-1 shadow">{product.course}</p>
                <p className="text-2xl font-bold mt-4">{product.firstName} {product.lastName}</p>
                <p>Вес: {product.weigth} грамм</p>
                <p>Стоимость: {product.price} рублей</p>
            </div>

            <div className="flex flex-row mt-8 items-start">
                <a className="hover:underline cursor-pointer bg-indigo-200 text-indigo-800 font-semibold rounded-sm px-4 py-2 mb-4 shadow" onClick={() => deleteProduct(product.id)}>Удалить</a>
                <a className="hover:underline cursor-pointer bg-indigo-200 text-indigo-800 font-semibold rounded-sm px-4 py-2 shadow" onClick={() => changeButtonText(product.id)}>{product.buttonText}</a>
            </div>
        </div>
    )
}

export default Product

// если onClick написать вот так onClick={deleteProduct(product.id)}, то все продукты удаляться. Потому что он дойдет до первой же карточки с продуктами и все удалит. Надо добавить анонимную функцию () =>. 


