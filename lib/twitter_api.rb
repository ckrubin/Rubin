class TwitterApi

def self.tweets
	client.user_timeline('ooockrubin', count: 3, exclude_replies: true, include_rts: false)
end

	def self.client
		@client ||= Twitter::REST::Client.new do |config|
  			config.consumer_key        = "nFvnpPBKxfw3hz3CFpfiBIP6d"
  			config.consumer_secret     = "LGK7uwea4HtWuuT9qzzqVTG6qtxmelEscTxTjWNUmaJQ8E9w6s"
  		end
  	end
end