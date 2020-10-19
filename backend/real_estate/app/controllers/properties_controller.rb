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
            address: address,
            state: state,
            sale_price: sale_price ,
            owner: Owner.find(params[:owner_id])
        )

        if property.save
            render json: property
        else
            render json: { error: "Couldn't save"}, status: 403
        end
    end

    private
    # def prop_params
    #     params.require(:property).permit(:address, :state, :sale_price, :owner_id)
    # end

end