class OrderItemSerializer < ActiveModel::Serializer
  attributes :id,:price,:amount,:platform,:category,:url,:order_id,:title
end
