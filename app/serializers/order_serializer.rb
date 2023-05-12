class OrderSerializer < ActiveModel::Serializer
  attributes :id,:user_id,:total_money,:address_id,:payment_at,:order_no,:payment_no
  has_many :order_items
  # belongs_to :user
  belongs_to :address
end
