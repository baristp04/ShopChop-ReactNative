import { useState,useEffect } from "react"
import axios from "axios";

const useFetch = (url) => {
    const[data, setData] = useState([])
    const[loading,setLoading] = useState(true)
    const[error, setError] = useState(null)

    async function fetchData(){
        try{
            const {data:productData} = await axios.get(url)
            setLoading(false)
            setData(productData)
        }catch(err){
            setLoading(false)
            setError(err.message)
        }
    }

    useEffect(() => {fetchData()},[])

    return{data,loading,error}
}

export default useFetch

