class PropertiesController < ApplicationController
    
    
    def new
        Property.new
        
    end


    def index
        @properties = Property.all
        render json: @properties
    end


    def show
        @property = Property.find(id: params[:id])
        options = {
            include: [:owner]
        }
        render json: @property
    end

    def create
        
        @property = Property.create(prop_params)
        # @owner = Owner.find(params[:owner_id])
         
        if @property.save
            
            render json: @property
        else
            render json: { error: "Couldn't save"}
        end
    end


    # def update
    #     @property = Property.find(params[:id])
    #     @property.update(params.require(:property).permit(:address, :state, :sale_price, :owner_id))
    #     render json: @property
    # end 



    def destroy
        @property = Property.find(id: params[:id])
        unless @property.nil?
          @property.destroy
          render json: @property
        else
          render json: { error: "Property not found" }, status: 404
        end
      end

    private

    
    
    def prop_params
        params.require(:property).permit(:address, :state, :sale_price, :owner_id)
    end

end