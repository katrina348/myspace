# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Human.destroy_all

20.times do
  name = Faker::Name.name
  age = Faker::Number.number(digits: 2)
  registry = Faker::Job.title
  avatar = Faker::Avatar.image(slug: name, size: '100x100', format: 'png', set: 'set4')
  Human.create(name: name, age: age, registry: registry, avatar: avatar)
end

puts "#{Human.all.size} Humans Seeded"