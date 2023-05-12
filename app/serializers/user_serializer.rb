class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest,:is_admin,:default_address_id
  
  
end
