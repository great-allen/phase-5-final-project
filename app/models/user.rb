class User < ApplicationRecord
    has_secure_password
    has_many :addresses,dependent: :destroy
#   belongs_to :default_address, class_name: :Address 
# belongs_to :default_address, class_name: 'Address', optional: true

has_many :orders,dependent: :destroy
has_many :shopping_carts,dependent: :destroy
end
