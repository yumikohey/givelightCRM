class Attendants < ActiveRecord::Migration[5.0]
  def change
  	create_table :attendants do |t|
  	  t.integer :event_id
  	  t.integer :user_id
  	end
  end
end
