class CreateOrderItems < ActiveRecord::Migration[6.1]
  def change
    create_table :order_items do |t|
      t.string :title
      t.integer :amount
      t.decimal :price,precision: 10, scale: 2
      t.string :url 
      t.string :platform 
      t.string :category
      t.integer :order_id
      t.timestamps
    end
  end
end
