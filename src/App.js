import React from "react";
import {useEffect ,useState} from "react";
import {apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter"
import Cards from "./components/Cards";
import {toast} from "react-toastify";
import Sppiner from "./components/Sppiner";

const App = () => {

  const[courses , setCourses] = useState(null)
  const[loading , setLoading] = useState(true)
  const[category , setCategory] = useState(filterData[0].title);

  
    async function fetchData() {
      setLoading(true);

      try{
        let res = await fetch(apiUrl);
        let output = await res.json();
        // save data
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
      setLoading(false)
    }
    useEffect( () => {
      fetchData();
    },[] );

  


  return (
    <div className="min-h-screen bg-bgDark2 flex flex-col">

      <div>   
        <Navbar/>
      </div>

      <div className="bg-bgDark2">
            <div>
              <Filter filterData = {filterData}
              category={category}
              setCategory = {setCategory}/>
            </div>

            <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h[50vh]">
                {
                  loading ? (<Sppiner/>) : (<Cards courses={courses} category = {category}/>)
                }
            </div>
      </div>
          


     
    </div>
  );
  
};

export default App;
