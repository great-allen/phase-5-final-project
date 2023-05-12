class PlatformImagesController < ApplicationController

    def index 
      render json: PlatformImage.all
    end
  
  end
  