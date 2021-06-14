class Patient < ApplicationRecord
  has_many :appointments
  has_many :physicians, through: :appointments

  def get_physicians_with_appointments
   appointments = self.physicians.map do |physician|
      appointment = physician.appointments.find_by(patient_id: self.id)
      {physician: physician.name, appointment: appointment.date}
   end
   return {patient: self, appointments: appointments}
  end
end
