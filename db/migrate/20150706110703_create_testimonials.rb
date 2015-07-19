class CreateTestimonials < ActiveRecord::Migration
  def change
    create_table :testimonials do |t|
      t.text :comment
      t.string :author
      t.string :company

      t.timestamps
    end
  end
end
