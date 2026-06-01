========================================================================
                 VELVET SCENT — PRODUCT IMAGES GUIDE
========================================================================

Welcome to your luxury perfume store catalog! This folder ('images/products/')
is designed to hold all your product pictures. 

Because the website is fully static, the system matches your products to their
pictures completely automatically based on the product ID.

------------------------------------------------------------------------
📸 HOW TO NAME AND DROP YOUR IMAGES:
------------------------------------------------------------------------

1. Name your image file after the ID of the product.
   - For Product ID 1 ("Oud Noir Absolute"), name the file: 1.jpg
   - For Product ID 2 ("Midnight Vetiver"), name the file: 2.jpg
   - ...and so on, up to: 50.jpg

2. Save or copy your renamed image directly into this folder ('images/products/').

3. That's it! The website will instantly detect the new files and load them
   for the corresponding products.

------------------------------------------------------------------------
✨ RECOMMENDED IMAGE SPECIFICATIONS (For a Premium Luxury Aesthetic):
------------------------------------------------------------------------

- File Format:   JPEG (.jpg) is highly recommended for fastest loading.
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
  (e.g., change `image: "images/products/1.jpg"` to `image: "images/products/1.png"`).

- Using Web URLs?
  You can also host your images on any third-party server or image hosting site. 
  Just copy the direct link and paste it into the 'image' field inside 'js/data.js'
  (e.g., `image: "https://yourwebsite.com/images/oud.jpg"`).

- Automatic Fallbacks:
  If any image file is missing, the website is built with a smart fallback system 
  and will automatically load a gorgeous high-quality premium perfume stock 
  photo from Unsplash so your site never looks broken!
========================================================================
