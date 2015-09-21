class SessionController < ApplicationController
  def start
    username = params[:username] || ""
    password = params[:password] || ""

    if username.strip == "cromwell" && password.strip == "password"
      cookies[:my_token] = "shhhcromwell"
      head :created
    else
      head :forbidden
    end
  end

  def info
    if cookies[:my_token] == "shhhcromwell"
      render json: {
        username: "cromwell",
        First: "Ryan",
        Last: "Cromwell"
      }
    else
      head :forbidden
    end
  end

  def terminate
    cookies.delete :my_token
    head :ok
  end
end
