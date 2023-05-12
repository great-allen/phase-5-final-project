class ImagesController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # added rescue_from
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    # def index

    #   render json: Image.all, status: :ok
    # end
    
    

    # def show
    #     image=find_image
    #     if image
    #         render json: image,  status: :ok
    #     else
    #         render_not_found_response
    #     end
    # end

    def create
        image= Image.create!(image_params)
        render json: image, status: :created
    end

    # def update
    #     image=find_image
    #     if image
    #         image.update(image_params)
    #         render json: image, status: :accepted
    #     else
    #         render_unprocessable_entity_response
    #     end
    # end

    def destroy
        image=find_image
        if image
            image.destroy
            render json: {},status: :ok
        else
            render_not_found_response
        end
    end

    private

  def find_image
    Image.find(params[:id])
  end

  def image_params
    params.permit(:title,:product_id,:url)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Image not found" }, status: :not_found
  end
  def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
      end
end
