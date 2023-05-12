class ShoppingCartSerializer < ActiveModel::Serializer
  attributes :id,:title,:image_url,:price,:quantity,:platform,:category,:user_id,:uuid
end
