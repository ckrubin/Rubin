class Work < ActiveRecord::Base
	#belongs_to :category
	has_attached_file 	:photo,
						:styles => { :medium => "300x300>", 
									 :thumb  => "100x100>" },
						:url => "/public/data/:id/:style/:basename.:extension",
						:path => "#{Rails.root}/public/data/:id/:style/:basename.:extension" 
	
	validates_attachment_content_type :photo, :presence => true, :size => { :in => 0..10.megabytes },
						:content_type => {:content_type => /^image\/(jpeg|png|jpg|gif|tiff)$/}
end
