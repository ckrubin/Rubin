class Project < ActiveRecord::Base
	acts_as_taggable
	validates :title, presence: true
	validates :intro, presence: true
	validates :image, presence: true
 	mount_uploader :image, ImageUploader
end
