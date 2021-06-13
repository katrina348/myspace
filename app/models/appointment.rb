class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :physician

  def self.all_and_then_some
    appointments = Appointment.all
    appointments.map do |appointment|
       {appointment_id:appointment.id,
        physician_id: appointment.physician.id,
        patient_id: appointment.patient.id,
        date:appointment.date, 
        physicianName:appointment.physician.name, 
        patient:appointment.patient.name}
    end
  end
end
