class OwnersController < ApplicationController
    def new
        Owner.new
    end

    def index
        owners = Owner.all
        render json: owners, include: :properties
    end

    def create
        
        owner = Owner.create(
            name: name,
            phone_number: phone_number,
            real_estate_agent: real_estate_agent
        )

        if owner.save
            render json: owner
        else
            render json: { error: "Couldn't save"}, status: 403
        end
    end
    
    
    def show
        owner = Owner.find(params[:id])
        render json: owner
    end
end