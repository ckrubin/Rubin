class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.string :intro
      t.text :description

      t.timestamps
    end
  end
end
