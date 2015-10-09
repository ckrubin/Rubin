# Send the email
class TestMailer < ActionMailer::Base

  def message
    mail(
      :subject => 'Hello from Postmark',
      :to  => '8877024@gmail.com',
      :from => 'notification@ckrubin.ru',
      :html_body => '<strong>Hello</strong> dear Postmark user.',
      :track_opens => 'true')
  end

end