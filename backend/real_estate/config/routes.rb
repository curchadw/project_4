Rails.application.routes.draw do
  get '/test', to: 'application#test'
  resources :owner
  resources :property
  get'/owners', to: 'owners#index'
  get'/properties', to: 'properties#index'
  get'/properties/:id', to: 'properties#show'
  get'/owners/:id', to: 'owners#show'
  post'/properties/', to: 'properties#create'
  post'/owners/', to: 'owners#create'
end
