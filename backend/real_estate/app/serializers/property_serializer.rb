class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :state, :sale_price, :owner_id
  belongs_to :owner
end
