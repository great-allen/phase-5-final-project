class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.integer :user_id
      t.string :phone_number
      t.string :address
      t.string :postcode
      t.string :first_name
      t.string :last_name
      t.timestamps
    end
  end
end
