# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Physician.destroy_all
Patient.destroy_all
Appointment.destroy_all
require 'faker'

spoderman = Patient.create(name:'P. Spoderman')
pibb = Patient.create(name:'Mr. Pibb')
dahlek = Patient.create(name:'D. Ahlek')

octopus = Physician.create(name:'Octopus')
pepper = Physician.create(name:'Pepper')
whomst = Physician.create(name:'Whomst')

Appointment.create(physician_id: octopus.id, patient_id: spoderman.id, date: Faker::Date.between(from: '2021-09-23', to: '2025-09-25'))
Appointment.create(physician_id: pepper.id, patient_id: pibb.id, date: Faker::Date.between(from: '2021-09-23', to: '2025-09-25'))
Appointment.create(physician_id: whomst.id, patient_id: dahlek.id, date: Faker::Date.between(from: '2021-09-23', to: '2025-09-25'))
