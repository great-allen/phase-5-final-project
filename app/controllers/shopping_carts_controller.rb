class ShoppingCartsController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
      def index
        render  json: ShoppingCart.all
      end
      def show
          user = User.find_by(id: session[:user_id])
          if user
            render json: user.shopping_carts
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
          cart=ShoppingCart.create!(cart_params)
          render json: cart, status: :created
      end
  
      def update
        cart=find_cart
        if cart
            cart.update(cart_params)
            render json: cart, status: :accepted
        else
            render_unprocessable_entity_response
        end
    end
  
      def destroy
        cart=find_cart
        if cart
            cart.destroy
            render json: {},status: :ok
        else
            render_not_found_response
        end
      end
  
      def destroy_all
        user = User.find_by(id: session[:user_id])
        if user
        user.shopping_carts.destroy_all
        render json: {},status: :ok
      else
        render_not_found_response
       end
      end
  
      
        private
        def find_cart
          ShoppingCart.find(params[:id])
        end
  
        def authorize
          return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
        end
        def render_unprocessable_entity_response(invalid)
          render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
        def cart_params
          params.permit(:title,:platform,:category,:image_url,:price,:quantity,:user_id,:uuid)
        end
        def render_not_found_response
          render json: { error: "Cart not found" }, status: :not_found
        end
      
  end
  