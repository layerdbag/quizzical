
const Button = ({ children, handleClick }) => (
  <button
    className="bg-indigo-800 text-white py-4 px-10 rounded-xl mt-4 text-lg self-center"
    onClick={handleClick}>
    {children}
  </button>
)



export default Button