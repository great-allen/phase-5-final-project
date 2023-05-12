class PlatformsController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
      platforms = Platform.order(:title)
      render json: platforms, status: :ok
    end
    
    def create
        platform=Platform.create!(params.permit(:title))
        render json: platform, status: :created
    end


    private

    def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
      end

      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end
end
