// Function to add an image to the gallery
function addImage() {
  // Access the value of the URL input field
  const imageUrl = document.getElementById('imageUrl').value;

  // Check if the input is not empty
  if (imageUrl) {
      // Access the gallery container
      const gallery = document.getElementById('gallery');

      // Create a new div for the gallery item
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');

      // Create a new image element and set its source to the input URL
      const image = document.createElement('img');
      image.src = imageUrl;

      // Create a new remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-button');

      // Set up the remove button to delete the image
      removeButton.onclick = () => {
          gallery.removeChild(galleryItem);
      };

      // Append the image and remove button to the gallery item
      galleryItem.appendChild(image);
      galleryItem.appendChild(removeButton);

      // Append the gallery item to the gallery
      gallery.appendChild(galleryItem);

      // Clear the input field
      document.getElementById('imageUrl').value = '';
  }
}

// Add event listener to the "Add Image" button
document.getElementById('addImageButton').addEventListener('click', addImage);
