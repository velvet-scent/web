========================================================================
                 VELVET SCENT — PRODUCT IMAGES GUIDE
========================================================================

Welcome to your luxury perfume store catalog! This folder ('images/products/')
is designed to hold all your product pictures.

------------------------------------------------------------------------
📸 HOW IMAGES ARE LINKED TO PRODUCTS:
------------------------------------------------------------------------

The images in this folder are directly referenced inside the `js/data.js` file.

1. When you add a new image here (e.g., 'new-perfume.jpeg'), it won't show up
   automatically on the website until you link it in the data file.

2. Open `js/data.js` and locate the product you want to update.

3. Change the "image" property of that product to match the new filename:
   Example: image: "images/products/new-perfume.jpeg"

------------------------------------------------------------------------
✨ RECOMMENDED IMAGE SPECIFICATIONS (For a Premium Luxury Aesthetic):
------------------------------------------------------------------------

- File Format:   JPEG (.jpg/.jpeg) is highly recommended for fastest loading.
- Aspect Ratio:  Vertical Portrait (3:4 ratio) works best.
- Dimensions:    600px width by 800px height is the ideal size.
- Style Tip:     Use high-quality product shots with clean white, light grey, 
                 dark/black, or completely transparent backgrounds for a 
                 high-end boutique feel.

------------------------------------------------------------------------
💡 PRO TIPS:
------------------------------------------------------------------------

- Using PNGs or WebP?
  If you prefer using '.png' or '.webp' files, simply drop them here and update 
  the file extension for that product inside 'js/data.js' 
  (e.g., change `image: "images/products/oud.jpg"` to `image: "images/products/oud.png"`).

- Automatic Fallbacks:
  If any image file is missing or the file name in `data.js` is misspelled, the 
  website is built with a smart fallback system and will automatically load a 
  high-quality premium perfume stock photo from Unsplash so your site never 
  looks broken!
========================================================================
