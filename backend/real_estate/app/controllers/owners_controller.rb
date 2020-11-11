class OwnersController < ApplicationController
    def new
        Owner.new
    end

    def index
        owners = Owner.all
        render json: owners, include: :properties
    end

    def create
        
            owner = Owner.create(owner_params)
            

            if owner.save
                render json: @owner
            end
        

    end

    # def update
    #     @owner = Property.find(params[:id])
    #     @owner.update(params.require(:owner).permit(:name,:phone_number,:real_estate_agent)
    #     render json: @owner
    # end 
    
    
    def show
        owner = Owner.find(params[:id])
        render json: owner
    end


    private 

    

    def owner_params
        params.permit(:name,:phone_number,:real_estate_agent)
    end
end