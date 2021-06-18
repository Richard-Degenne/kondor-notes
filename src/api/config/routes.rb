# frozen_string_literal: true

Rails.application.routes.draw do
  resources :workbooks

  get 'ping' => proc { |_env|
    ['200', {}, ['pong']]
  }
end
