/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool1740301618",
    "name": "isFavorite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool1740301618",
    "name": "favorited",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
