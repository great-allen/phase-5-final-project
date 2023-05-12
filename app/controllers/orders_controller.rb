class OrdersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # added rescue_from
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


  def index
    render json: Order.all.order(("id desc")), status: :ok
  end
  

    def show
        order=find_order
        if order
            render json: order,  status: :ok
        else
            render_not_found_response
        end
    end

    def create
        order=Order.create!(order_params)
        render json: order, status: :created
    end

    def update
        order=find_order
        if order
            order.update(order_params)
            render json: order, status: :accepted
        else
            render_unprocessable_entity_response
        end
    end

    def destroy
        order=find_order
        if order
            order.destroy
            render json: {},status: :ok
        else
            render_not_found_response
        end
    end

    private

  def find_order
    Order.find(params[:id])
  end

  def order_params
    params.permit(:user_id, :address_id, :total_money, :payment_at,:payment_no)
  end
  

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Order not found" }, status: :not_found
  end
  def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
      end
end
