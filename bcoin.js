const axios = require("axios");
const apiKey = "TFK5P3Y74NWKG8U8";
async function getBitcoinPrice() {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CAD&apikey=${apiKey}`
    );
    const data = response.data;
    if (data["Realtime Currency Exchange Rate"]) {
      const exchangeRate =
        data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
      console.log(`Current Bitcoin Price in CAD: ${exchangeRate}`);
    } else {
      console.error(
        "Unable to fetch Bitcoin price. Please check your API key or try again later."
      );
    }
  } catch (error) {
    console.error("An error occurred while fetching Bitcoin price:", error);
  }
}
getBitcoinPrice();
