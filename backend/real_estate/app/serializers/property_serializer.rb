class PropertySerializer < ActiveModel::Serializer
  attributes :address, :state, :sale_price, :owner_id
  belongs_to :owner
end
