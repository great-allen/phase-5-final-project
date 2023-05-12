class OrderItemsController < ApplicationController
    before_action :authorize
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
      render  json: OrderItem.all
    end
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user.order_items
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

      # def create
      #   user = User.find_by(id: session[:user_id])
      #   if user
      #     cart = user.create_shopping_cart!(cart_params)
      #     render json: cart,status: :created
      #   else
      #     render json: { error: "Not authorized" }, status: :unauthorized
      #   end
      # end
      def create
        item=OrderItem.create!(item_params)
        render json: item, status: :created
    end

    def update
      item=find_order_item
      if item
          item.update(item_params)
          render json: item, status: :accepted
      else
          render_unprocessable_entity_response
      end
  end

    def destroy
      item=find_order_item
      if item
          item.destroy
          render json: {},status: :ok
      else
          render_not_found_response
      end
    end

    # def destroy_all
    #   user = User.find_by(id: session[:user_id])
    #   if user
    #   user.shopping_carts.destroy_all
    #   render json: {},status: :ok
    # else
    #   render_not_found_response
    #  end
    # end

    
      private
      def find_order_item
        OrderItem.find(params[:id])
      end

      def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
      end
      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end
      def item_params
        params.permit(:title,:platform,:category,:url,:price,:amount,:order_id)
      end
      def render_not_found_response
        render json: { error: "item not found" }, status: :not_found
      end
end
