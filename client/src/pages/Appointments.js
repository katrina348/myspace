import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import List from '../components/List'
import Spinner from '../components/Spinner'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'


const Appointments = ()=>{
    // about the useState hook
    const {data,loading,error} = useAxiosOnMount('/api/appointments')
    // const {data,loading,error} = useAxiosOnMount('https://rasdfeqres.in/api/users?delay=3')

    if(loading) return <Spinner />
    if(error) return <ErrorMessage error={error}/>
    return (
        <div>
            <List 
            renderData={(a)=>{
              return (
              <div>
                <p>{a.patient}'s appointment is on {a.date} with Dr. {a.physicianName}.</p>
              </div>
              )
            }}
            data={data} 
            name='Appointments'/>
        </div>
    )
}

export default Appointments