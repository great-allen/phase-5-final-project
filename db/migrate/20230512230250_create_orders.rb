class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id,  :address_id
      t.string :order_no
      t.decimal :total_money, precision: 10,scale:2 
      t.datetime :payment_at
      t.string :payment_no
      t.timestamps
    end
  end
end
