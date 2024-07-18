
import { useState, useEffect } from "react";

const useFetch =url=> {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
           let res=await fetch('http://localhost:8000/api/info')
           let data= await res.json()
           console.log(data)
           setData(data)
        };

        fetchData();
    }, [url]);

    return {data};
};

export default useFetch;
