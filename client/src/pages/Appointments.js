import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import ErrorMessage from '../components/ErrorMessage'
import List from '../components/List'
import Spinner from '../components/Spinner'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import AppointmentForm from '../components/AppointmentForm'

const Appointments = ()=>{

    const {data,loading,error} = useAxiosOnMount('/api/appointments')
    const [showAppointmentForm, setShowAppointmentForm] = useState(false)
    const [
      {data: physiciansData, loading: physiciansLoading, error: physiciansError}, 
      getPhysiciansData
    ] = useAxios(
        {
          url:"/api/physicians",
          method: "get"
        },
        { manual: true }
      );

      const[
      {data: patientsData, loading: patientsLoading, error: patientsError}, 
      getPatientsData
    ] = useAxios(
        {
          url:"/api/patients",
          method: "get"
        },
        { manual: true }
      );

        console.log(physiciansData)
    const showAppointmentUI = async () => {
        setShowAppointmentForm(!showAppointmentForm)
        getPhysiciansData()
        getPatientsData()
        }

    const formatPhysiciansData =()=>{
      if (!physiciansData) return []
      return physiciansData.map(p =>{
        return {key:p.id, text:p.name, value: p.id}
      })
    }

    const formatPatientsData =()=>{
      if (!patientsData) return []
      return patientsData.map(pa =>{
        return {key:pa.id, text:pa.name, value: pa.id}
      })
    }

    const addAppointment = (appointment) => {
      console.log(appointment)
      console.log('working')
      addAppointment([...data, appointment])
    }
    
    if(loading) return <Spinner />
    if(error) return <ErrorMessage error={error}/>

    return (
        <div>
          <div onClick={showAppointmentUI}>New Appointment</div>
          {showAppointmentForm && <AppointmentForm
                                    physiciansLoading={physiciansLoading}
                                    physiciansError={physiciansError}
                                    physiciansData={formatPhysiciansData()}
                                    patientsLoading={patientsLoading}
                                    patientsError={patientsError}
                                    patientsData={patientsData}
                                    patientsData={formatPatientsData()}

                                    />}
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