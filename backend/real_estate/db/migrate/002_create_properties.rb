class CreateProperties < ActiveRecord::Migration[6.0]
    def change
        create_table :properties do |t|
            t.integer :owner_id
            t.string :address
            t.string :state
            t.string :sale_price
            t.timestamps
        end
    end
end