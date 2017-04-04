class Attendants < ActiveRecord::Migration[5.0]
  def change
    create_table :attendants do |t|
      t.belongs_to :users, index: true
      t.belongs_to :events, index: true
      t.timestamps
    end
  end
end
