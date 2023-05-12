class CreatePlatformImages < ActiveRecord::Migration[6.1]
  def change
    create_table :platform_images do |t|
      t.string :title
      t.string :url
      t.integer :platform_id
      t.timestamps
    end
  end
end
