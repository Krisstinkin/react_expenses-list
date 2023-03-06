import Button from "components/Button"
import { useState } from "react"
import { Form, Field } from 'react-final-form'

const courses = ['Молочные товары', 'Хлебобулочные изделия', 'Кондитерские товары', 'Фрукты', 'Овощи']

const ExpensesForm = ({ addProduct }) => {

    const [firstName, setFirstName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [weigth, setWeigth] = useState ('')
    const [course, setCourse] = useState (courses[0])
    const [price, setPrice] = useState ('')

    const handleClick = event => {

        event.preventDefault()

        const product = {
            firstName,
            lastName,
            weigth,
            course,
            price
        }

        addProduct(product)
        setFirstName('')
        setLastName('')
        setWeigth('')
        setPrice('')
        setCourse(courses[0])
    }

    return (

        <div className='max-w-sm mx-10 my-10 gap-y-4 flex flex-col'>
            <form className="max-w-sm mx-10 my-10 gap-y-4 flex flex-col">
                <h2 className='font-bold text-xl'>Дополнить список покупок</h2>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Продукт</label>
                    <input 
                        onChange={(event) => setFirstName(event.target.value)}
                        value={firstName} 
                        name='firstName' 
                        type='text' 
                        className="col-span-2 border border-solid border-gray-400 rounded" 
                    />
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Атрибут</label>    
                    <input 
                        onChange={(event) => setLastName(event.target.value)}
                        value={lastName} 
                        name='lastName' 
                        type='text' 
                        className="col-span-2 border border-solid border-gray-400 rounded" 
                    />
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Вес</label>
                    <input 
                        onChange={(event) => setWeigth(event.target.value)}
                        value={weigth} 
                        name='weigth' 
                        type='text' 
                        className="col-span-2 border border-solid border-gray-400 rounded" 
                    />
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Стоимость</label>
                    <input 
                        onChange={(event) => setPrice(event.target.value)}
                        value={price} 
                        name='price' 
                        type='text' 
                        className="col-span-2 border border-solid border-gray-400 rounded" 
                    />
                </div>
                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Категория</label>
                    <select 
                        value={course} 
                        onChange={event => setCourse(event.target.value)} 
                        className="col-span-2 border border-solid border-gray-400 rounded">

                        {courses.map(course => (
                                <option key={course}>{course}</option>
                        ))}
                    </select>
                </div>
                <Button title='Добавить' handleClick={handleClick} type='submit' />
            </form>
        </div>
    )
}

export default ExpensesForm