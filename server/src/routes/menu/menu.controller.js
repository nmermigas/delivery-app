const { getMenu } = require("../../models/menu.model");

async function httpGetMenu(req, res) {
  return res.status(200).json(await getMenu());
}

module.exports = { httpGetMenu };
