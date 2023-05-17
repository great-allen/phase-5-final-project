Rails.application.routes.draw do
  resources :order_items
  get "/shopping_cart", to: 'shopping_carts#show'
  delete '/user_shopping_carts', to: 'shopping_carts#destroy_all'
  post '/create-payment-intent', to: 'charges#create'
  get '/charges', to: 'charges#index'
  get '/charges/:payment_intent_id', to: 'charges#show'
  resources :shopping_carts
  # resource :charges
  resources :orders
  resources :addresses 
    
  resources :platform_images, only: [:index]
  resources :platforms , only: [:index,:create]
  resources :products
  resources :users
  resources :images, only: [:create,:destroy]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
