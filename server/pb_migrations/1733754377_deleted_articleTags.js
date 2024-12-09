/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1721216315");

  return app.delete(collection);
}, (app) => {
  const collection = new Collection({
    "createRule": "@request.auth.id = @request.body.articleId.author.id",
    "deleteRule": "@request.auth.id = @request.body.articleId.author.id",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_2473161100",
        "hidden": false,
        "id": "relation37359206",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "articleId",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_212839922",
        "hidden": false,
        "id": "relation59357059",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "tagId",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_1721216315",
    "indexes": [
      "CREATE UNIQUE INDEX `idx_jCmJtHzLNw` ON `articleTags` (\n  `articleId`,\n  `tagId`\n)"
    ],
    "listRule": "@request.auth.id = @request.body.articleId.author.id",
    "name": "articleTags",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.id = @request.body.articleId.author.id",
    "viewRule": "@request.auth.id = @request.body.articleId.author.id"
  });

  return app.save(collection);
})
