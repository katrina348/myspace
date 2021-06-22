class Api::HumansController < ApplicationController

  before_action :authenticate_user!

  def index
    render json: User.random_human(current_user.befriended_humans)
  end

  def update
    current_user.befriended_humans << params {:id}.to_i
    current_user.save
  end
end
