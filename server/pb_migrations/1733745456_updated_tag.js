/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_212839922")

  // update collection data
  unmarshal({
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_212839922")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = @request.body.articleId.author.id",
    "updateRule": "@request.auth.id = @request.body.articleId.author.id"
  }, collection)

  return app.save(collection)
})
