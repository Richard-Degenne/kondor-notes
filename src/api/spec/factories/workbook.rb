# frozen_string_literal: true

FactoryBot.define do
  factory :workbook do
    name { FFaker::Lorem.words.join('-') }
    description { FFaker::Lorem.sentence }

    trait :invalid do
      name { nil }
    end
  end
end
