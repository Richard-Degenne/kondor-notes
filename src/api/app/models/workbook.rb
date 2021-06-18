# frozen_string_literal: true

##
# Model class for workbooks.
class Workbook < ApplicationRecord
  ##
  # @!attribute [rw] name
  #   The human-readable name of the workbook.
  #   @return [String]
  # @!attribute [rw] description
  #   A description of the workbook.
  #   @return [String, nil]

  validates :name, presence: true
end
