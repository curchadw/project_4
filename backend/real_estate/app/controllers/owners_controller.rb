class OwnersController < ApplicationController
    def new
        Owner.new
    end

    def index
        @owners = Owner.all
        render json: @owners, include: :properties
    end

    def create
        
            @owner = Owner.new(params[:owner])
            @owner.save

            if @owner.save
                render json: @owner
            end
        

    end
    
    
    def show
        @owner = Owner.find(params[:id])
        render json: @owner
    end


    private 

    

    def owner_params
        params.require(:owner).permit(:name,:phone_number,:real_estate_agent)
    end
end