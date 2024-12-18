/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number4147839554",
    "max": null,
    "min": null,
    "name": "favoriteCount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // remove field
  collection.fields.removeById("number4147839554")

  return app.save(collection)
})
