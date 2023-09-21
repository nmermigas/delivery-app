const { getMenu, addNewMenuItem } = require("../../models/menu.model");

async function httpGetMenu(req, res) {
  return res.status(200).json(await getMenu());
}

async function httpAddNewMenuItem(req, res) {
  const menuItem = req.body;

  if (!menuItem.itemName || !menuItem.price || !menuItem.category) {
    return res.status(400).json({
      error: "Missing required property",
    });
  }
  await addNewMenuItem(menuItem);
  return res.status(201).json(menuItem);
}

module.exports = { httpGetMenu, httpAddNewMenuItem };
