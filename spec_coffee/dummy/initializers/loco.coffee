App.Views.Main =
  Users: {}
  Pages: {}
  Articles: {}
App.Views.User =
  Articles: {}
App.Views.Admin =
  Users: {}
App.Views.Layouts = {}
App.Views.Shared = {}

loco = new App.Loco
  turbolinks: false                  # false by default
  notifications:
    enable: false                    # false by default
    pollingTime: 3000                # 3000 ms by default
    log: true                        # false by default
    ssl: false                       # your current protocol by default
    location: 'notification-center'  # 'notification-center' by default
    size: 10                         # 100 by default
  locale: 'en'                       # 'en' by default
  postInit: ->

loco.init()