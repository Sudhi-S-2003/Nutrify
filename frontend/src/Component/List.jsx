import { Link } from "react-router-dom"
function List({searchData}) {
  return (
          
<ul className="absolute top-14 left-5 right-0 border border-base-300 rounded-lg mt-1 max-h-40 overflow-auto z-10 bg-base-200 shadow-lg">
{searchData && searchData.length > 0 ? (
        searchData.map((item, index) => (
           <Link to={"/Login"}>
          <li
            className="p-2 hover:bg-base-300 cursor-pointer flex items-center"
            key={index}
          >
            <img
              src={item.image}
              alt="item"
              className="h-6 w-6 mr-2 rounded-full"
            />
            <span>{item.Food}</span>
          </li>
          </Link>
        ))
      ) : (
        <li className="p-2">No results found</li>
      )}

 </ul>
  )
}

export default List