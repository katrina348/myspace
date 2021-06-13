class Api::AppointmentsController < ApplicationController
  def index
    render json: Appointment.all_and_then_some
  end
end
