// import Card from "../Component/Card";
import { useEffect, useState } from "react";
import FilterSearch from "../Component/FilterSearch";
import axios from "axios";
import Card from "../Component/Card";
import Loading from "../Component/Loading";
function AuthFood() {
  const [data, setData] = useState([]);
  const [filterData, SetFilterData] = useState([]);
  const [paginatedData, SetPaginatedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get("http://localhost:7000/Auth/food", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        SetFilterData(response.data);
      });
  }, []);
  useEffect(() => {
    PaginatedDataHandler();
  }, [currentPage, filterData]);

  function ChangePage(op){
    setCurrentPage((prevPage) => {
      const newPage = prevPage + op;
      const totalPages = Math.ceil(filterData.length / itemsPerPage);
      if (newPage < 1 || newPage > totalPages) {
        return prevPage; // Prevent going out of bounds
      }
      return newPage;
    });
  }
  function PaginatedDataHandler(){
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    SetPaginatedData(filterData.slice(startIndex, endIndex));
  }
  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  if (data.length<=0){
    return <Loading/>
  }
  return (
    <div>
    <FilterSearch data={data} setFilterData={SetFilterData} />
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 gap-4" >
        {paginatedData.map((item) => (
          <Card key={item.id} data={item} Auth={true} />
        ))}
      </div>

     {/* Pagination */}
     <div className="flex justify-center mt-4">
        <div className="join">
          {
            currentPage>1 && <button className="join-item btn" onClick={()=>ChangePage(-1)}>«</button>
          }
          
          <button className="join-item btn">Page {currentPage}</button>
          {currentPage < totalPages && (
            <button className="join-item btn" onClick={() => ChangePage(1)}>
              »
            </button>
          )}
         
        </div>
      </div>
    </div>
  );
}

export default AuthFood;
