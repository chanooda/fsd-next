/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1721216315")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.articleId.author.id",
    "deleteRule": "@request.auth.id = @request.body.articleId.author.id",
    "listRule": "@request.auth.id = @request.body.articleId.author.id",
    "updateRule": "@request.auth.id = @request.body.articleId.author.id",
    "viewRule": "@request.auth.id = @request.body.articleId.author.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1721216315")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
