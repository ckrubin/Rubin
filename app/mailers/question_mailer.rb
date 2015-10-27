class QuestionMailer < ActionMailer::Base
  default from: "ckrubinsamara@gmail.com"

  def question_email(question)
  	@question = question
  	mail to: "ckrubin@yandex.ru", subject: @question.subject
  end
end
