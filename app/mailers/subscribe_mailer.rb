class SubscribeMailer < ActionMailer::Base
  default from: "ckrubinsamara@gmail.com"

  def subscribe_email(subscriiber)
  	@subscriiber = subscriiber
  	mail(to: @subscriiber.email, subject: "Подписка на новости", bcc: "ckrubin@yandex.ru")
  end
end
