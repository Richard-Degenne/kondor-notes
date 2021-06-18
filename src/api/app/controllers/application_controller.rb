# frozen_string_literal: true

##
# Top-level class for application controllers.
class ApplicationController < ActionController::API
  before_action :check_format!

  rescue_from ActiveRecord::RecordNotFound do |e|
    h = { error: e.message }
    render json: h, status: :not_found
  end

  private

  ##
  # Checks whether the format given by the +Accept+ header is acceptable.
  #
  # When not given, the API will assume a JSON request.
  #
  # If the requested type is not supported, the request will return a HTTP
  # +406 Not Acceptable+ status.
  #
  # @return [Void]
  # @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
  def check_format!
    request.format = :json if request.format == Mime::ALL
    head :not_acceptable unless request.format == Mime['json']
  end
end
