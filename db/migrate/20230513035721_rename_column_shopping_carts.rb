class RenameColumnShoppingCarts < ActiveRecord::Migration[6.1]
  def change
    rename_column :shopping_carts, :titlet, :title
  end
end
