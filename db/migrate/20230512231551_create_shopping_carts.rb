class CreateShoppingCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :shopping_carts do |t|
      t.integer :user_id
      t.string :titlet
      t.string :platform
      t.string :category
      t.string :image_url
      t.integer :quantity 
      t.decimal :price,precision: 10, scale: 2
      t.string :uuid
      t.timestamps
    end
  end
end
