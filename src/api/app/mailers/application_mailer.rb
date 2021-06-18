# frozen_string_literal: true

##
# Top-level class for application mailers.
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
