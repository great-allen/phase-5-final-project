class ShoppingCart < ApplicationRecord
    belongs_to :user

  #   validates :title, :platform, :category, :image_url,:price,:quantity presence: true
  # validates :price, numericality: { greater_than_or_equal_to: 0 }
  # validates :quantity, numericality: { greater_than: 0 }
end
