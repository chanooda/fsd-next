/// <reference path="../pb_data/types.d.ts" />
migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("pbc_1721216315");

    // update collection data
    unmarshal(
      {
        name: "articleTags",
      },
      collection,
    );

    // update field
    collection.fields.addAt(
      1,
      new Field({
        cascadeDelete: false,
        collectionId: "pbc_2473161100",
        hidden: false,
        id: "relation37359206",
        maxSelect: 1,
        minSelect: 0,
        name: "articleId",
        presentable: false,
        required: false,
        system: false,
        type: "relation",
      }),
    );

    // update field
    collection.fields.addAt(
      2,
      new Field({
        cascadeDelete: false,
        collectionId: "pbc_212839922",
        hidden: false,
        id: "relation59357059",
        maxSelect: 1,
        minSelect: 0,
        name: "tagId",
        presentable: false,
        required: false,
        system: false,
        type: "relation",
      }),
    );

    return app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("pbc_1721216315");

    // update collection data
    unmarshal(
      {
        name: "ArticleTags",
      },
      collection,
    );

    // update field
    collection.fields.addAt(
      1,
      new Field({
        cascadeDelete: false,
        collectionId: "pbc_2473161100",
        hidden: false,
        id: "relation37359206",
        maxSelect: 1,
        minSelect: 0,
        name: "article",
        presentable: false,
        required: false,
        system: false,
        type: "relation",
      }),
    );

    // update field
    collection.fields.addAt(
      2,
      new Field({
        cascadeDelete: false,
        collectionId: "pbc_212839922",
        hidden: false,
        id: "relation59357059",
        maxSelect: 1,
        minSelect: 0,
        name: "tag",
        presentable: false,
        required: false,
        system: false,
        type: "relation",
      }),
    );

    return app.save(collection);
  },
);
