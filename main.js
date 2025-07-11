let selectedFile = null;

document.getElementById('fileInput').addEventListener('change', function(e) {
  if (e.target.files.length > 0) {
    selectedFile = e.target.files[0];
    document.getElementById('editBtn').disabled = false;
  }
});

document.getElementById('editBtn').addEventListener('click', function() {
  if (!selectedFile) return;

  // Read the file and send to Photopea
  const reader = new FileReader();
  reader.onload = function(e) {
    // Photopea API: open editor in iframe and send file
    openPhotopea(e.target.result);
  };
  reader.readAsDataURL(selectedFile);
});

function openPhotopea(imageDataURL) {
  // Create Photopea iframe
  const container = document.getElementById('photopeaContainer');
  container.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.photopea.com#api';
  iframe.width = 1000;
  iframe.height = 700;
  container.appendChild(iframe);

  // Communicate with Photopea using postMessage API
  iframe.onload = function() {
    // Send the image to Photopea
    const message = {
      "type": "open",
      "data": imageDataURL
    };
    iframe.contentWindow.postMessage(message, "*");
  };
}