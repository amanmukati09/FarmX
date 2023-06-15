document.addEventListener("DOMContentLoaded", () => {
  // Fetch crop prices from the API
  fetchCropPrices()
    .then((prices) => {
      // Update the prices on the page
      updateCropPrices(prices);
    })
    .catch((error) => {
      console.error("Error fetching crop prices:", error);
    });
});

function fetchCropPrices() {
  // Simulate fetching crop prices from an API
  return new Promise((resolve, reject) => {
    // Replace this with your API endpoint to fetch crop prices
    const apiEndpoint = "https://dummyapi.com/crop-prices";

    // Simulating a successful API response with dummy data
    const dummyData = [
      { crop: "Crop 1", price: 10 },
      { crop: "Crop 2", price: 15 },
      // Add more dummy data for other crops
    ];

    setTimeout(() => {
      resolve(dummyData);
    }, 1000); // Simulating a delay of 1 second
  });
}

function updateCropPrices(prices) {
  // Select the crop cards on the page
  const cropCards = document.querySelectorAll(".crop-card");

  // Update each crop card with the corresponding price
  cropCards.forEach((card, index) => {
    const cropNameElement = card.querySelector(".crop-name");
    const cropPriceElement = card.querySelector(".crop-price");

    // Update the crop name and price
    cropNameElement.textContent = prices[index].crop;
    cropPriceElement.textContent = `Price: $${prices[index].price}/kg`;
  });
}
