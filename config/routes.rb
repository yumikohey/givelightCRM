Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/sessions',
        passwords: 'users/passwords',
        registrations: 'users/registrations'
    }
    
  get 'hello_world', to: 'hello_world#index'

  root to: "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
