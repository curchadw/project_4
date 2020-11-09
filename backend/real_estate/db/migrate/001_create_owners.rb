class CreateOwners < ActiveRecord::Migration[6.0]
    def change
        create_table :owners do |t|
            t.string :name
            t.string :phone_number
            t.string :real_estate_agent
            t.timestamps
        end
    end
end