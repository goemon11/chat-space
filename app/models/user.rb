class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :name, presence: true, uniqueness: true
  # devise :validatable, password_length: 8..128
  has_many :group_users
  has_many :group, through: :group_users
  has_many :messages
end
