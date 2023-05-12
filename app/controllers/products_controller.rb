class ProductsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # added rescue_from
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index
        render json: Product.all.order(release_date: :desc), status: :ok
    end

    def show
        product=find_product
        if product
            render json: product,  status: :ok
        else
            render_not_found_response
        end
    end

    def create
        product=Product.create!(product_params)
        render json: product, status: :created
    end

    def update
        product=find_product
        if product
            product.update(product_params)
            render json: product, status: :accepted
        else
            render_unprocessable_entity_response
        end
    end

    def destroy
        product=find_product
        if product
            product.destroy
            render json: {},status: :ok
        else
            render_not_found_response
        end
    end

    private

  def find_product
    Product.find(params[:id])
  end

  def product_params
    params.permit(:title,:amount,:category_id,:status,:msrp,:price,:platform,:release_date,:description,:is_new_released,:is_popular,:is_released,:feature)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Product not found" }, status: :not_found
  end
  def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
      end
end
