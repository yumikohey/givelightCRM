class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_save :default_role

  Roles = [ :admin, :pm, :volunteer]

  after_create :send_admin_mail

  has_many :events, through: :attendants
  has_many :tasks
  belongs_to :department

  def default_role
  	self.role ||= 'volunteer'
  end

  def send_admin_mail
    UserMailer.send_welcome_email(self).deliver_later
  end

  def is?( requested_role )
  	self.role == requested_role.to_s
  end
end
