class ImageSerializer < ActiveModel::Serializer
  attributes :id, :title, :product_id, :url
end
