import React from 'react'
import {useParams} from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import ErrorMessage from '../components/ErrorMessage'
import List from '../components/List'
import Spinner from '../components/Spinner'
// import StringifyJSON from '../components/StringifyJSON'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'

const PatientShow = ()=>{
  const {id} = useParams()
  const {data, loading, error} = useAxiosOnMount(`/api/patients/${id}`)

  if(loading) return <Spinner />
  if(error) return <ErrorMessage error={error}/>
  
  console.log(data)
  return (
      <div>
        <List
          name={`Appointments for ${data.patient.name}`}
          data = {data.appointments}
          renderData = {(appointments) => (
            <Card>
            <Card.Content>
              <Card.Header>{appointments.physician}</Card.Header>
              <Card.Meta>{appointments.appointment}</Card.Meta>
            </Card.Content>
          </Card>
        )}
        />
      </div>
    )
}

export default PatientShow