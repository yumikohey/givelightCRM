class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.date :date
      t.string :address
      t.string :city
      t.string :state
      t.string :string
      t.string :country
      t.string :zip_code
      t.integer :owner_user_id

      t.timestamps
    end
  end
end
