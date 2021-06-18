# frozen_string_literal: true

##
# Controller for workbooks.
class WorkbooksController < ApplicationController
  before_action :set_workbook, only: %i[show update destroy]

  # GET /workbooks
  # GET /workbooks.json
  def index
    @workbooks = Workbook.all.order(:id)
  end

  # GET /workbooks/1
  # GET /workbooks/1.json
  def show; end

  # POST /workbooks
  # POST /workbooks.json
  def create
    @workbook = Workbook.new(workbook_params)

    if @workbook.save
      render :show, status: :created, location: @workbook
    else
      render json: { error: @workbook.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /workbooks/1
  # PATCH/PUT /workbooks/1.json
  def update
    if @workbook.update(workbook_params)
      render :show, status: :ok, location: @workbook
    else
      render json: { error: @workbook.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /workbooks/1
  # DELETE /workbooks/1.json
  def destroy
    @workbook.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_workbook
    @workbook = Workbook.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def workbook_params
    params.require(:workbook).permit(:name, :description)
  end
end
