/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // update collection data
  unmarshal({
    "deleteRule": "@collection.article.author.id = @request.auth.id",
    "updateRule": "@collection.article.author.id = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // update collection data
  unmarshal({
    "deleteRule": "@request.body.author.id = @request.auth.id",
    "updateRule": "@request.body.author.id = @request.auth.id"
  }, collection)

  return app.save(collection)
})
