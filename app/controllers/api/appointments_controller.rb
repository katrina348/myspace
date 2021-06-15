class Api::AppointmentsController < ApplicationController
  def index
    render json: Appointment.all_and_then_some
  end

  def create
    appointment = Appointment.new(appointment_params)
    if (appointment.save)
      render json: appointment
    else
      render json: appointment, status: 422
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:appointment, :physician_id, :patient_id)
  end

end
