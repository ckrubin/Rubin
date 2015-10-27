class QuestionMailer < ActionMailer::Base
  default from: "ckrubinsamara@gmail.com"

  def question_email(question)
  	@question = question
  	mail to: "8877024@gmail.com", subject: @question.subject
  end
end
