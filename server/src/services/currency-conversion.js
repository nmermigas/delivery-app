const axios = require("axios");

require("dotenv").config();

// const API_KEY = process.env.API_KEY;
// const baseCurrency = "EUR";

// const targetCurrencies = ["USD","GBP","JPY","AUD"]

async function fetchExchangeRates(baseCurrency, targetCurrencies, API_KEY) {
  const targetRates = targetCurrencies.join(",");
  try {
    const response = await axios.get(
      `http://data.fixer.io/api/latest?access_key=${API_KEY}&base=${baseCurrency}&symbols=${targetRates}`
    );

    if (response.data.success) {
      return response.data.rates;
    } else {
      throw new Error(
        `Failed to fetch exchange rates. Error ${response.data.error.code}`
      );
    }
  } catch (error) {
    console.error("Error fetching exchange rates: ", error);
  }
}

module.exports = { fetchExchangeRates };
