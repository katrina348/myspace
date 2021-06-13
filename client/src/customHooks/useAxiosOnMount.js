import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxiosOnMount = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const getData = async () => {
        // about try catch
        console.log('getData called')
        try {
            let res = await axios.get(url)
            // making an assumption that data is coming
            // back as res.data
            setData(res.data)
            setError(null)
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
        // eslint-disable-line react-hooks/exhaustive-deps
    }, [])





    return { data, loading, error, setData }
}
export default useAxiosOnMount