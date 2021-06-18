# frozen_string_literal: true

Rails.application.routes.draw do
  get 'ping' => proc { |_env|
    ['200', {}, 'pong']
  }
end
