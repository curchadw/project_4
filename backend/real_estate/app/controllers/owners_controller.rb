class OwnersController < ApplicationController
    def new
        Owner.new
    end

    def index
        owners = Owner.all
        render json: owners, include: :properties
    end

    def create
            
            owner = Owner.new(owner_params)
          
            owner.save
            if owner.save
                render json: owner
            else
                render json: { error: "Couldn't save"}
            end
        

    end

    
    
    
    def show
        owner = Owner.find(params[:id])
        render json: owner
    end


    private 

    

    def owner_params
        params.permit(:name,:phone_number,:real_estate_agent, properties_attributes:[:address, :state, :sale_price])
    end
end