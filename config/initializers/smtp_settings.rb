ActionMailer::Base.smtp_settings = {
    :address => "smtp.gmail.com",
    :port => "587",
    :domain => "ckrubin.ru",
    :user_name => "ckrubinsamara@gmail.com",
    :password => "PolinaM1",
    :authentication => "plain",
    :enable_starttls_auto => true
}