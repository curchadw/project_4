class PropertiesController < ApplicationController
     before_action :set_owner, only: [:create,:show, :edit, :update, :destroy]

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
       byebug
        property = Property.create(prop_params)
         
        if property.save
            render json: property
        else
            render json: { error: "Couldn't save"}
        end
    end

    def destroy
        property = Property.find(params[:id])
        unless property.nil?
          property.destroy
          render json: property
        else
          render json: { error: "Property not found" }, status: 404
        end
      end

    private

    def set_owner
        @owner = Owner.find(params[:owner_id])
    end

    
    def prop_params
        params.(:owner).permit(:id,:address, :state, :sale_price, :owner_id)
    end

end