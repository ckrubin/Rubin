class PagesController < ApplicationController
  
  def index
    @testimonials = Testimonial.order("RANDOM()")
  end

  def price
  end

  def about
  end

  def contact
  end

  def beautyfication
  end

  def roofing
  end

  def metall
  end

  def fence
  end

  def finishing
  end

  def building
  end

  def heating
  end

  def water_supply
  end

  def sewerage
  end

  def electrician
  end

  def pools
  end
end