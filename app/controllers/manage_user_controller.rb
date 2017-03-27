class ManageUserController < ApplicationController
	def index
		if current_user.is?(:admin)
			@users = { users: User.all }
		else
			redirect_to root_url
		end
	end

	def update
	    user = User.find(params[:user][:id])
	    user.role = params[:user][:role]
	    user.save!
	    @users = User.all
	    respond_to do |format|
	        format.json { render :json => @users }
	    end
	end

	def user_params
        params.require(:user).permit(:id, :role)
    end
end
