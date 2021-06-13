class Api::ThingsController < ApplicationController
  before_action :set_thing, only: [:show, :destroy]
  def index
    things = Thing.all
    render json: things
  end
  def show
    render json: @thing
  end
  def create
    @thing = Thing.new(thing_params)
    if @thing.save
      render json: @thing
    else
      render json: {error: @thing.errors}, status: 422
    end
  end
  def destroy
    @thing.destroy
    render json: @thing
  end
  private
    def set_thing
      @thing = Thing.find(params[:id])
    end
    def thing_params
      params.require(:thing).permit(:name)
    end
end
