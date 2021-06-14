import { Link } from 'react-router-dom'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'

const Patient = ({name, date, id})=>{
  const {data, loading, error} = useAxiosOnMount(`/api/patients/${id}`)
  return(
    <Link to={`/patients/${id}`}>
      <h1>{name}{date}</h1>
    </Link>
  )
}

export default Patient