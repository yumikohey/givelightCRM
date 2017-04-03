Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/sessions',
        passwords: 'users/passwords',
        registrations: 'users/registrations'
    }
    
  get 'manage_users', to: 'manage_user#index'
  post 'manage_users/update', to: 'manage_user#update'

  root to: "users#sign_up"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
