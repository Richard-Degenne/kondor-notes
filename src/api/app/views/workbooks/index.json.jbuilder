# frozen_string_literal: true

json.array! @workbooks, partial: 'workbooks/workbook', as: :workbook
