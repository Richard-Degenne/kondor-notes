# frozen_string_literal: true

##
# This migration creates the Workbook model.
class CreateWorkbooks < ActiveRecord::Migration[6.1]
  def change
    create_table :workbooks do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
