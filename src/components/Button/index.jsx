function Button({ title, handleClick, type }) {
  return (
    <button type={type} onClick={event => handleClick(event)} className='border border-solid border-color-white rounded-lg text-xl font-semibold text-white px-4 py-2 shadow-md bg-indigo-800'>
      {title}
    </button>
  )
}

export default Button;

