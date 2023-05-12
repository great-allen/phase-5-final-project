class AddressesController < ApplicationController
    before_action :authorize
    before_action :find_address, only: [:show, :update, :destroy, :set_default_address]

    # skip_before_action :authorize, only: [:index]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # added rescue_from
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index
      user = User.find_by(id: session[:user_id])
        render json: user.addresses, status: :ok
    end

    def show
        address=find_address
        if address
            render json: address,  status: :ok
        else
            render_not_found_response
        end
    end

    def create
        address=Address.create!(address_params)
        render json: address, status: :created
    end

    def update
        address=find_address
        if address
            address.update(address_params)
            render json: address, status: :accepted
        else
            render_unprocessable_entity_response
        end
    end

    def destroy
        address=find_address
        if address
            address.destroy
            render json: {},status: :ok
        else
            render_not_found_response
        end
    end

    # def set_default_address
    #     address = find_address
    #     user = address.user
    
    #     if user.default_address.nil?
    #       address.set_as_default = 1
    #       address.save
    #       render json: address, status: :ok
    #     else
    #       render json: { error: "User has already set a default address" }, status: :unprocessable_entity
    #     end
    #   end

    def set_default_address
      
      @address.set_as_default = 1
      @address.save
  
      @addresses = current_user.reload.addresses
      render json: @address, status: :ok
    end

    private

    # def find_address
    #   user = User.find_by(id: session[:user_id])
    #   @address = user.addresses.find(params[:id])
    # end

  def find_address
    Address.find(params[:id])
  end

  def address_params
    params.permit(:user_id, :first_name, :last_name, :phone_number, :address, :postcode, :is_default_address, :set_as_default)
  end
  

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Address not found" }, status: :not_found
  end
  def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
      end
end


