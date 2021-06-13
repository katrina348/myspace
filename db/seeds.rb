# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'


andrew = Patient.create(name:'Andrew')
skyler = Patient.create(name:'Skyler')
lilly = Patient.create(name:'Lilly')

bob = Physician.create(name:'Bob')
dick = Physician.create(name:'Dick')
harry = Physician.create(name:'Harry')

Appointment.create(physician_id: bob.id, patient_id: andrew.id, date: Faker::Date.between(from: '2021-09-23', to: '2025-09-25'))
Appointment.create(physician_id: dick.id, patient_id: skyler.id, date: Faker::Date.between(from: '2021-09-23', to: '2025-09-25'))
Appointment.create(physician_id: harry.id, patient_id: lilly.id, date: Faker::Date.between(from: '2021-09-23', to: '2025-09-25'))
