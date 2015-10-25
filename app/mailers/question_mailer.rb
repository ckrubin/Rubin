class QuestionMailer < ActionMailer::Base
  default from: "admin@ckrubin.ru"

  def question_email(question)
  	@question = question
  	mail to: "ckrubin@yandex.ru", subject: @question.subject
  end
end
