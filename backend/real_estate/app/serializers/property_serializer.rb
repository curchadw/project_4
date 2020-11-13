class PropertySerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :address, :state, :sale_price
  belongs_to :owner
end
