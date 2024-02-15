// Array of image file paths for artwork
var fotoKarya = [
    "foto/IMG_20240213_213824.jpg",
    "foto/IMG_20240213_213848.jpg",
    "foto/IMG_20240213_214022.jpg",
    "foto/IMG_20240213_214100.jpg",
    "foto/notes_IMG_20240213_213214.png.jpg",
    "foto/notes_IMG_20240213_213229.png.jpg",
    "foto/notes_IMG_20240213_213238.png.jpg",
    "foto/notes_IMG_20240213_213255.png.jpg",
    "foto/notes_IMG_20240213_213401.png.jpg",
    "foto/notes_IMG_20240213_213443.png.jpg",
    "foto/notes_IMG_20240213_213507.png.jpg",
    "foto/notes_IMG_20240213_213524.png.jpg",
    "foto/notes_IMG_20240213_213541.png.jpg",
    "foto/notes_IMG_20240213_213640.png.jpg",
    "foto/notes_IMG_20240213_213706.png.jpg",
    "foto/notes_IMG_20240213_213713.png.jpg",
    "foto/notes_IMG_20240213_213728.png.jpg"
];

// Function to display artwork in the gallery
function displayArtwork() {
    var gallery = document.querySelector(".gallery");
    fotoKarya.forEach(function(path) {
        var img = document.createElement("img");
        img.src = path;
        img.alt = "Foto";
        gallery.appendChild(img);
    });
}

// Call the function to display artwork
displayArtwork();