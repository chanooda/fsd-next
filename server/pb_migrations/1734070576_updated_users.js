/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_268752357",
    "hidden": false,
    "id": "relation1542800728",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "profile",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_268752357",
    "hidden": false,
    "id": "relation1542800728",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "profile",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
