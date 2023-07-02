// Global array to store uploaded files
let files = [];

// Function to handle file upload
function uploadFile() {
  let conf = confirm("Are you sure ?");
  if(conf){
    let fileInput = document.getElementById("file-upload");
    let file = fileInput.files[0];
    
    if (file) {
      files.push(file);
      displayFiles();
    }
  }
}

// Function to remove a file
function removeFile(index) {
    files.splice(index, 1);
    displayFiles();
}

// Function to display files on the page
function displayFiles() {
  let fileList = document.getElementById("file-list");

  // Clear existing content
  fileList.innerHTML = "";

  // Loop through each file and create a file element
  for (let i = 0; i < files.length; i++) {
    let file = files[i];

    // Create file element
    let fileElement = document.createElement("div");
    fileElement.className = "file";
    fileElement.innerHTML =
      "<h3>" + file.name + "</h3>" +
      "<p>Size: " + file.size + " bytes</p>" +
      "<a href='" + URL.createObjectURL(file) + "' download>Download</a>";

    // Add file element to the file list
    fileList.appendChild(fileElement);
  }
}
