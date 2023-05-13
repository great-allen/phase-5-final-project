class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
      def index
        render json: User.all
      end
      def show
          user = User.find_by(id: session[:user_id])
          if user
            render json: user
          else
            render json: { error: "Not authorized" }, status: :unauthorized
          end
        end
  
        def create
          user = User.create(user_params)
          session[:user_id]=user.id
          if user.valid?
            render json: user, status: :created
          else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
        end

        def update
          user = User.find_by(id: params[:id])
        
          if user
            user.update(user_params)
            render json: user,status: :accepted
          else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
        end

        def destroy
          user = User.find(params[:id])
          if user 
          user.destroy
          render json: {},status: :ok
        else
          render_not_found_response
          end
        end
        

    private

    def user_params
      params.permit(:username, :password, :password_confirmation,:email,:is_admin)
    end
    def render_not_found_response
      render json: { error: "User not found" }, status: :not_found
    end
  end
