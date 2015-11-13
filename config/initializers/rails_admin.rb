RailsAdmin.config do |config|

  # Prevent initializing the application before assets are precompiled (required for heroku)
  config.assets.initialize_on_precompile = false
  # Add Rails Admin assets (required)
  config.assets.precompile += ['rails_admin/rails_admin.css', 'rails_admin/rails_admin.js']
  
  ### Popular gems integration

  ## == Devise ==
   config.authenticate_with do
      unless current_user.try(:admin?)
      redirect_to main_app.root_path
    end
  end


  ## == Cancan ==
  # config.authorize_with :cancan

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
