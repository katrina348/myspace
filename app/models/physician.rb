class Physician < ApplicationRecord
  has_many :appointments
  has_many :patients, through: :appointments

  def get_patients_with_physicians
    puts 'get_patients_with_physicians called'
      appointments = self.patients.map do |patient|
      appointment = patient.appointments.find_by(physician_id: self.id)
      {patient: patient.name, appointment: appointment.date}
    end
    return {physician: self, appointments: appointments}
  end
end
