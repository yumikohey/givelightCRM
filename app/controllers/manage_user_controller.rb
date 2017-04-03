class ManageUserController < ApplicationController
	include ReactOnRails::Controller

	def index
		if current_user.is?(:admin)
			users = { users: User.all }
			# respond_to do |format|
			#   format.html
			#   format.json { render :json => @users }
			# end
			redux_store("usersStore", props: users)
		else
			redirect_to root_url
		end
	end

	def update
	    @user = User.find(params[:data][:id])
	    @user.role = params[:data][:role]
	    @user.save!
	    respond_to do |format|
	        format.json { render :json => User.all }
	    end
	end

	def user_params
        params.require(:user).permit(:id, :role)
    end
end
