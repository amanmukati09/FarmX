// Function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Retrieve the uploaded image
  const imageUpload = document.getElementById("image-upload");
  const imageFile = imageUpload.files[0];

  if (imageFile) {
    // Display a loading message
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<p>Loading...</p>";

    // Prepare form data for sending the image file
    const formData = new FormData();
    formData.append("image", imageFile);

    // Send the image file to the server for processing
    fetch("/detection", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Render the detection result
        renderDetectionResult(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        resultContainer.innerHTML = "<p>An error occurred. Please try again later.</p>";
      });
  }
}

// Function to render the detection result
function renderDetectionResult(result) {
  const resultContainer = document.getElementById("result");

  if (result.success) {
    const { fruitName, disease, description } = result;

    const resultHTML = `
      <h4>Detected Fruit: ${fruitName}</h4>
      <p>Disease: ${disease}</p>
      <p>Description: ${description}</p>
    `;

    resultContainer.innerHTML = resultHTML;
  } else {
    resultContainer.innerHTML = "<p>No fruit or disease detected.</p>";
  }
}

// Attach event listener to the form submission
const uploadForm = document.getElementById("upload-form");
uploadForm.addEventListener("submit", handleFormSubmit);
