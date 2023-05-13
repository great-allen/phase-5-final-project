class AddressSerializer < ActiveModel::Serializer
  attributes :id,:first_name,:last_name,:phone_number,:address,:postcode,:user_id
end
