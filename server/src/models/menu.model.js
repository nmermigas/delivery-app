const menuItems = require("./menu.mongo");

async function getMenu() {
  return await menuItems.find(
    {},
    {
      // to exclude the following fields from the response, something like a filter.
      _id: 0,
      __v: 0,
    }
  );
}

async function saveMenuItem(menuItem) {
  try {
    await menuItems.updateOne(
      {
        itemName: menuItem.name,
      },
      {
        itemName: menuItem.name,
      },
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.log(`Could not save menu item: ${err} `);
  }
}

module.exports = {
  getMenu,
};
