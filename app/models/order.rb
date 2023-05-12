class Order < ApplicationRecord
    validates :user_id, presence: true
  
  validates :address_id, presence: true
  validates :total_money, presence: true
  
  validates :order_no, uniqueness: true

  has_many :order_items, dependent: :destroy
  belongs_to :user
  
  belongs_to :address
#   belongs_to :payment

before_create :gen_order_no



private
  def gen_order_no
    self.order_no = RandomCode.generate_order_uuid
  end

end
