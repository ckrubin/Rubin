class CreateWorks < ActiveRecord::Migration
  def change
    create_table :works do |t|
      t.string :title
      t.text :text
      t.string :image

      t.timestamps
    end
  end
end
