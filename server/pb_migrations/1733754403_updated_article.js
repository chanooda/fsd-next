/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // remove field
  collection.fields.removeById("json2823804126")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "json2823804126",
    "maxSize": 0,
    "name": "tagList",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
})