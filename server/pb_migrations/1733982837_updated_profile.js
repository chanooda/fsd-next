/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_268752357")

  // update collection data
  unmarshal({
    "deleteRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_268752357")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.profile.id = id"
  }, collection)

  return app.save(collection)
})
