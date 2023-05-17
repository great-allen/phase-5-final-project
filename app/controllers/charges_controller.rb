
require "stripe"


class ChargesController < ApplicationController
  skip_before_action :authorize, only: :create
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  Stripe.api_key = "sk_test_51N1J1DKel7nI8Ew4r5XWt2av6s2ODAk20Fru2JIITtBC2hPAfMgrOS7v0PWZr3CjxG5wJe34YE6lAEZPmGCos9sc004RVAX12M"
    
  def index
    user = User.find_by(id: session[:user_id])
    charges  = Stripe::Charge.list({
     
      paid:true
    })

  user_charges = charges.select { |charge| charge.description == user.username }

  render json: user_charges, status: :ok

  end
  # def index
  #   payment_intent_id = params[:payment_intent_id]
  #   charge = Stripe::Charge.retrieve(payment_intent_id)
  #   render json: charge, status: :ok
  # end
  
  

  # def show
  #   charge = Stripe::Charge.retrieve(params[:paymentIntentId])
  #   if charge
  #     render json:charge,status: :ok
  #   else
  #     render_not_found_response
  # end
  # end
  
  def create
    
    payment_intent = Stripe::PaymentIntent.create(
      amount: params[:amount],
      currency: "aud",
      # automatic_payment_methods: {
      #   enabled: true,
      # },
      payment_method_types: ['card'],
      
      receipt_email: params[:receipt_email],
      shipping: {
        address: {
          "country": "AU",
          line1: params[:line1],
          line2:params[:line2],
          postal_code: params[:postal_code],
          
        },
        name: params[:name],
        phone: params[:phone]
      },
      # metadata:{
      #   customer:params[:customer]
      # }
      description:params[:description],
      
    )
     
    render json: {
      clientSecret: payment_intent["client_secret"],
    }
  end

  private
  def render_not_found_response
    render json: { error: "Product not found" }, status: :not_found
  end
end
