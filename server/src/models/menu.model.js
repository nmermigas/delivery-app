const menuItems = require("./menu.mongo");
const { fetchExchangeRates } = require("../services/currency-conversion");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const baseCurrency = "EUR";
const targetCurrencies = ["USD", "GBP", "JPY", "AUD", "CHF", "CNY", "HKD"];

async function getMenu() {
  const menu = await menuItems.find(
    {},
    {
      // to exclude the following fields from the response, something like a filter.
      _id: 0,
      __v: 0,
    }
  );

  const conversions = await fetchExchangeRates(
    baseCurrency,
    targetCurrencies,
    API_KEY
  );

  if (conversions) {
    const menuWithConversions = menu.map((menuItem) => {
      const convertedPrices = {};

      Object.keys(conversions).forEach((currency) => {
        const rate = conversions[currency];
        const convertedPrice = menuItem.price * rate;
        convertedPrices[`price_${currency}`] = convertedPrice;
      });

      convertedPrices[`price_${baseCurrency}`] = menuItem.price;
      console.log(convertedPrices);
      return {
        ...menuItem.toObject(),
        prices: convertedPrices,
      };
    });
    return menuWithConversions;
  }
  return menu;
}

// async function saveMenuItem(menuItem) {
//   try {
//     await menuItems.updateOne(
//       {
//         itemName: menuItem.name,
//       },
//       {
//         itemName: menuItem.name,
//       },
//       {
//         upsert: true,
//       }
//     );
//   } catch (err) {
//     console.log(`Could not save menu item: ${err} `);
//   }
// }

async function addNewMenuItem(menuItem) {
  await menuItems.findOneAndUpdate(
    {
      itemName: menuItem.itemName,
    },
    menuItem,
    { upsert: true }
  );
}

module.exports = {
  getMenu,
  addNewMenuItem,
};
