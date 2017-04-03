class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.date :deadline
      t.string :description
      t.boolean :completed
      t.string :frequency
      t.decimal :progress_percentage
      t.string :priority

      t.timestamps
    end
  end
end
