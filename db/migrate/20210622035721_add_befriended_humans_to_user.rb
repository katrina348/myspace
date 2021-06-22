class AddBefriendedHumansToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :befriended_humans, :text
  end
end
