class Work < ActiveRecord::Base
	#belongs_to :category
	has_attached_file 	:photo,
						:styles => { :medium => "300x300>", 
									 :thumb  => "100x100>" },
						:url => "/public/data/:id/:style/:basename.:extension",
						:path => "#{Rails.root}/public/data/:id/:style/:basename.:extension" 
	validates_attachment_content_type :photo, :content_type => %w(image/jpeg image/jpg image/png)
end
