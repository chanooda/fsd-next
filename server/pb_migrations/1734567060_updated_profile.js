/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_268752357")

  // update collection data
  unmarshal({
    "updateRule": "@request.auth.profile.id = id"
  }, collection)

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2473161100",
    "hidden": false,
    "id": "relation984314667",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "followedArticles",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_268752357")

  // update collection data
  unmarshal({
    "updateRule": "@request.auth.id = user.id "
  }, collection)

  // remove field
  collection.fields.removeById("relation984314667")

  return app.save(collection)
})
