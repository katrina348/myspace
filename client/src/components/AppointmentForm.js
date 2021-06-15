import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import Physicians from '../pages/Physicians'
import ErrorMessage from './ErrorMessage'
import StringifyJSON from './StringifyJSON'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const AppointmentForm = ({physiciansLoading,
      physiciansError, 
      physiciansData, 
      patientsLoading,
      patientsError,
      patientsData,
  }) =>{
  const [appointment, setAppointment] = useState('')
  const [patientId, setPatientId] = useState('')
  const [physicianId, setPhysicianId] = useState('')

  const handleSubmit = async () => {
    console.log(appointment)
    console.log(patientId)
    console.log(physicianId)
    
    try{
    let res = await axios.post(`/api/appointments`, 
    {appointment: appointment, physicianId, patient_id: patientId}
    )
    console.log(res)
    }catch(err){
      console.log(err)
    }
      
  }

  const physicianChanged = ({value}) => {
    console.log(value)
    setPhysicianId(value)

  }
  const patientChanged = ({value}) => {
    console.log(value)
    setPatientId(value)
  }
    return(
      <div>
        <h1>appointment Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            value={appointment}
            onChange={(e) => setAppointment(e.target.value)}
            fluid 
            label='Appointment' 
            placeholder='Appointment' />

          <Form.Select
            onChange={physicianChanged}
            fluid
            label='Physicians'
            options={physiciansData}
            placeholder='Physicians'
          />

            <Form.Select
            onChange={patientChanged}
            fluid
            label='Patients'
            options={patientsData}
            placeholder='Patients'
          />
          
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>

      </div>
    )
}

export default AppointmentForm