import { Link } from "react-router-dom";
import Card from "../../Component/Card";
import LockedCard from "../../Component/LockedCard";
import FilterSearch from "../../Component/FilterSearch";
import { useEffect,useState } from "react";
import axios from 'axios'
import Loading from "../../Component/Loading";

function Food() {
  const [blurdata,setBlurData] = useState([])
  const [data, setData] = useState([]);
  const [filterData,setFilterData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:7000/Food/all').then(
      (response) => {
        // console.log(response.data)
        setData(response.data);
        setFilterData(response.data)
        const randomData = [];
        const dataCopy = [...response.data];
        for (let i = 0; i < 8; i++) {
          if (dataCopy.length === 0) break;
          const randomIndex = Math.floor(Math.random() * dataCopy.length);
          randomData.push(dataCopy.splice(randomIndex, 1)[0]);
        }
        setBlurData(randomData);
        }
    )
  },[])
  if (data.length<=0){
    return <Loading/>
  }
  return (
    <div>
<FilterSearch data={data} setFilterData={setFilterData} />
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 gap-4">
        {
          filterData.map((data)=>{
            return <Card key={data.id} data={data} />
          })
        }
      </div>

      {/* LockedCard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 gap-4 relative">
        {
          blurdata.map((data)=>{
            return <LockedCard key={data.id} data={data} />
            })
        }
             {/* Locked blur effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md flex flex-col justify-center items-center text-white text-center p-4">
        <h2 className="text-2xl font-bold mb-2">Login to Unlock</h2>
        <p className="mb-4">
          Get full access to exclusive content by logging in now!
        </p>
        <Link to="/Signup">
              <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg">
                Sign In
              </button>
            </Link>
      </div>

      </div>
    </div>
  );
}

export default Food;
