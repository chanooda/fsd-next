/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_268752357")

  // update collection data
  unmarshal({
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_268752357")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = @collection.profile.user.id",
    "updateRule": "@request.auth.id = @collection.profile.user.id"
  }, collection)

  return app.save(collection)
})
