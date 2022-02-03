import { Models } from './deps'

getModels = () ->
  models = []
  regExp = /^[A-Z]/
  for func, _ of Models
    continue if !regExp.exec(func) or func is "Base"
    models.push func
    for innerFunc, _ of Models[func]
      models.push "#{func}.#{innerFunc}" if regExp.exec innerFunc
  models

getModelForRemoteName = (remoteName) ->
  for model in getModels()
    parts = model.split "."
    if parts.length is 1
      return Models[parts[0]] if Models[parts[0]].getRemoteName() is remoteName
    else if parts.length is 2
      return Models[parts[0]][parts[1]] if Models[parts[0]][parts[1]].getRemoteName() is remoteName

export default getModelForRemoteName
