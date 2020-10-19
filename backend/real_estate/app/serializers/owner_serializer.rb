class OwnerSerializer < ActiveModel::Serializer
  attributes :name, :phone_number, :real_estate_agent
  has_many :properties
end
