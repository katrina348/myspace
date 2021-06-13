import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import List from '../components/List'
import Spinner from '../components/Spinner'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'


const Physicians = ()=>{
    // about the useState hook
    const {data,loading,error} = useAxiosOnMount('/api/physicians')
    // const {data,loading,error} = useAxiosOnMount('https://rasdfeqres.in/api/users?delay=3')

    if(loading) return <Spinner />
    if(error) return <ErrorMessage error={error}/>
    return (
        <div>
            <List 
            renderData={(physician)=>{
              return (
              <div>
                <h1>{physician.name}</h1>
              </div>
              )
            }}
            data={data} 
            name='Physicians'/>
        </div>
    )
}

export default Physicians