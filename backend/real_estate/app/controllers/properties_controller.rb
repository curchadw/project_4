class PropertiesController < ApplicationController

    def new
        Property.new
    end


    def index
        properties = Property.all
        render json: properties
    end


    def show
        property = Property.find(params[:id])
        options = {
            include: [:owner]
        }
        render json: property
    end

    def create
        
        property = Property.create(
            
        prop_params
            
        )

        if property.save
            render json: property
        else
            render json: { error: "Couldn't save"}
        end
    end

    private
    def prop_params
        params.permit(:address, :state, :sale_price, :owner_id)
    end

end