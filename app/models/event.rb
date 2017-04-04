class Event < ApplicationRecord
	has_many :users, through: :attendants
end
