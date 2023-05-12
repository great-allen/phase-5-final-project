class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.integer :category_id
      t.string :title
      t.string :status, default: 'off'
      t.integer :amount, default: 0
      t.string :uuid
      t.decimal :msrp,precision: 10,scale: 2
      t.decimal :price,precision: 10,scale: 2
      t.text :description
      t.string :platform
      t.string :release_date
      t.boolean :is_popular, default: false
      t.boolean :is_new_released, default: false
      t.boolean :is_released, default: true
      t.string :feature
      t.timestamps
    end
  end
end
