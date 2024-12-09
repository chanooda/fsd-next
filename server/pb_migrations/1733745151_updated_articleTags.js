/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1721216315")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_jCmJtHzLNw` ON `articleTags` (\n  `articleId`,\n  `tagId`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1721216315")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
