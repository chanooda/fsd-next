/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = @collection.article.author.user.id",
    "updateRule": "@request.auth.id = @collection.article.author.user.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // update collection data
  unmarshal({
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
})
