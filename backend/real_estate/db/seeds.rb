# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Owner.create(name: 'Curtis Chadwell', phone_number: '2105555555', real_estate_agent: 'LeBron James')
Owner.create(name: 'John Doe', phone_number: '2105555551', real_estate_agent: 'Bugs Bunny')
Owner.create(name: 'Jane Doe', phone_number: '2105555552', real_estate_agent: 'Daffy Duck')
Owner.create(name: 'Minnie Doe', phone_number: '2105555553', real_estate_agent: 'Stephen King')
Owner.create(name: 'Mickey Mouse', phone_number: '2105555554', real_estate_agent: 'Minne Mouse')
Owner.create(name: 'Batman', phone_number: '2105555556', real_estate_agent: 'Dick Grayson')


Property.create(address: '100 Elm Street', state: 'Tx', sale_price:'$600000', owner_id: 1 )
Property.create(address: 'Some Unknown', state: 'Tx', sale_price:'Free', owner_id: 2 )
Property.create(address: 'Some Other Unknown', state: 'Tx', sale_price:'Free', owner_id: 3 )
Property.create(address: 'Oz Palace', state: 'KS', sale_price:'$20000000', owner_id: 4 )
Property.create(address: 'Disney World', state: 'FL', sale_price:'Ha!', owner_id: 5 )
Property.create(address: 'Batcave', state: 'NY', sale_price:"Can't afford", owner_id: 6 )