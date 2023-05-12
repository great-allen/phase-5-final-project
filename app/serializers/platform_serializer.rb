class PlatformSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :platform_images
end
