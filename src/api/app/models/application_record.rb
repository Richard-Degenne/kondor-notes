# frozen_string_literal: true

##
# Top-level class for models.
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
