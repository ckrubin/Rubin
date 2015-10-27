class SubscribeMailer < ActionMailer::Base
  default from: "ckrubinsamara@gmail.com"

  def subscribe_email(subscriiber)
  	@subscriiber = subscriiber
  	mail(to: @subscriiber.email, subject: "Подписка на новости", bcc: "8877024@gmail.com")
  end
end
