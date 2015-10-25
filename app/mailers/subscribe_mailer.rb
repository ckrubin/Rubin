class SubscribeMailer < ActionMailer::Base
  default from: "admin@ckrubin.ru"

  def subscribe_email(subscriiber)
  	@subscriiber = subscriiber
  	mail(to: @subscriiber.email, subject: "Подписка на новости", bcc: "ckrubin@yandex.ru")
  end
end
