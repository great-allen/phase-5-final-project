class ProductSerializer < ActiveModel::Serializer
  attributes :id,:title,:description,:price,:category_id,:status,:amount,:uuid,:msrp,:platform,:release_date,:is_new_released,:is_popular,:is_released,:category,:feature
  belongs_to :category
  has_many :images

  def category
    self.object.category.title
   end
end
