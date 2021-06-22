class CreateHuman < ActiveRecord::Migration[6.1]
  def change
    create_table :human do |t|
      t.string :name
      t.integer :age
      t.string :registry
      t.string :avatar

      t.timestamps
    end
  end
end
