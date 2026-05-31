const products = [
  // MEN'S (17)
  { id: 1, name: "Oud Noir Absolute", category: "Men", priceGHS: 1200, priceUSD: 100, description: "A deeply masculine blend of rich agarwood, leather, and warm spices.", rating: 5, image: "images/products/1.jpg", isBestSeller: true, isNew: false },
  { id: 2, name: "Midnight Vetiver", category: "Men", priceGHS: 950, priceUSD: 80, description: "Earthy vetiver layered with sharp citrus and cedarwood.", rating: 4.5, image: "images/products/2.jpg", isBestSeller: false, isNew: true },
  { id: 3, name: "Royal Amber", category: "Men", priceGHS: 1400, priceUSD: 115, description: "Luxurious amber, musk, and dark vanilla for the modern gentleman.", rating: 4.8, image: "images/products/3.jpg", isBestSeller: false, isNew: false },
  { id: 4, name: "Crimson Spice", category: "Men", priceGHS: 1050, priceUSD: 88, description: "Bold black pepper, cinnamon, and aged rum notes.", rating: 4.2, image: "images/products/4.jpg", isBestSeller: false, isNew: true },
  { id: 5, name: "Silver Birch", category: "Men", priceGHS: 1100, priceUSD: 92, description: "Fresh, crisp birch leaves with a heart of icy mint.", rating: 4.7, image: "images/products/5.jpg", isBestSeller: false, isNew: false },
  { id: 6, name: "Golden Tobacco", category: "Men", priceGHS: 1350, priceUSD: 112, description: "Sweet pipe tobacco entwined with honey and tonka bean.", rating: 4.9, image: "images/products/6.jpg", isBestSeller: true, isNew: false },
  { id: 7, name: "Azure Marine", category: "Men", priceGHS: 850, priceUSD: 70, description: "Invigorating ocean breeze, sea salt, and bergamot.", rating: 4.3, image: "images/products/7.jpg", isBestSeller: false, isNew: true },
  { id: 8, name: "Shadow Leather", category: "Men", priceGHS: 1500, priceUSD: 125, description: "Intense smoky leather, incense, and saffron.", rating: 5, image: "images/products/8.jpg", isBestSeller: false, isNew: false },
  { id: 9, name: "Forest Canopy", category: "Men", priceGHS: 980, priceUSD: 82, description: "Pine needles, oakmoss, and damp earth.", rating: 4.1, image: "images/products/9.jpg", isBestSeller: false, isNew: false },
  { id: 10, name: "Obsidian Musk", category: "Men", priceGHS: 1250, priceUSD: 104, description: "Dark, animalic musk softened by rare black orchid.", rating: 4.6, image: "images/products/10.jpg", isBestSeller: false, isNew: false },
  { id: 11, name: "Desert Mirage", category: "Men", priceGHS: 1150, priceUSD: 96, description: "Dry woods, warm sand, and spiced cardamom.", rating: 4.4, image: "images/products/11.jpg", isBestSeller: false, isNew: true },
  { id: 12, name: "Emerald Cedar", category: "Men", priceGHS: 900, priceUSD: 75, description: "Vibrant green notes over a sturdy cedarwood base.", rating: 4.2, image: "images/products/12.jpg", isBestSeller: false, isNew: false },
  { id: 13, name: "Noble Sandalwood", category: "Men", priceGHS: 1450, priceUSD: 120, description: "Creamy, refined sandalwood imported from Mysore.", rating: 4.9, image: "images/products/13.jpg", isBestSeller: false, isNew: false },
  { id: 14, name: "Frostbite", category: "Men", priceGHS: 880, priceUSD: 73, description: "An icy blast of peppermint, eucalyptus, and white musk.", rating: 4.0, image: "images/products/14.jpg", isBestSeller: false, isNew: false },
  { id: 15, name: "Monarch Patchouli", category: "Men", priceGHS: 1020, priceUSD: 85, description: "Rich, aged patchouli with hints of dark chocolate.", rating: 4.5, image: "images/products/15.jpg", isBestSeller: false, isNew: true },
  { id: 16, name: "Steel Horizon", category: "Men", priceGHS: 1120, priceUSD: 93, description: "A modern, metallic fougère with lavender and coumarin.", rating: 4.3, image: "images/products/16.jpg", isBestSeller: false, isNew: false },
  { id: 17, name: "Velvet Tuxedo", category: "Men", priceGHS: 1600, priceUSD: 133, description: "The ultimate evening fragrance. Iris, vanilla, and suede.", rating: 5, image: "images/products/17.jpg", isBestSeller: false, isNew: false },

  // WOMEN'S (17)
  { id: 18, name: "Rose D'Or", category: "Women", priceGHS: 1300, priceUSD: 108, description: "Luminous Damask rose infused with liquid gold and honey.", rating: 4.9, image: "images/products/18.jpg", isBestSeller: true, isNew: false },
  { id: 19, name: "Jasmine Whisper", category: "Women", priceGHS: 980, priceUSD: 82, description: "Delicate night-blooming jasmine and white tea.", rating: 4.6, image: "images/products/19.jpg", isBestSeller: false, isNew: true },
  { id: 20, name: "Vanilla Elegance", category: "Women", priceGHS: 1100, priceUSD: 92, description: "Bourbon vanilla absolute, toasted almonds, and cashmere.", rating: 4.8, image: "images/products/20.jpg", isBestSeller: false, isNew: false },
  { id: 21, name: "Blossom Noir", category: "Women", priceGHS: 1450, priceUSD: 120, description: "Dark cherry blossom, patchouli, and mysterious woods.", rating: 4.7, image: "images/products/21.jpg", isBestSeller: false, isNew: true },
  { id: 22, name: "Crystal Peony", category: "Women", priceGHS: 850, priceUSD: 70, description: "Fresh pink peonies, lychee, and sparkling musk.", rating: 4.5, image: "images/products/22.jpg", isBestSeller: false, isNew: false },
  { id: 23, name: "Luminous Lily", category: "Women", priceGHS: 920, priceUSD: 77, description: "Radiant lily of the valley and morning dew.", rating: 4.3, image: "images/products/23.jpg", isBestSeller: false, isNew: false },
  { id: 24, name: "Empress Gardenia", category: "Women", priceGHS: 1350, priceUSD: 112, description: "Opulent white florals centered around a creamy gardenia core.", rating: 5, image: "images/products/24.jpg", isBestSeller: true, isNew: false },
  { id: 25, name: "Orchid Majesty", category: "Women", priceGHS: 1250, priceUSD: 104, description: "Exotic black orchid, spices, and smooth amber.", rating: 4.6, image: "images/products/25.jpg", isBestSeller: false, isNew: false },
  { id: 26, name: "Fruity Seduction", category: "Women", priceGHS: 890, priceUSD: 74, description: "Playful notes of ripe plum, raspberry, and spun sugar.", rating: 4.4, image: "images/products/26.jpg", isBestSeller: false, isNew: true },
  { id: 27, name: "Silk Tuberose", category: "Women", priceGHS: 1400, priceUSD: 116, description: "Intoxicating tuberose draped in smooth, milky accords.", rating: 4.7, image: "images/products/27.jpg", isBestSeller: false, isNew: false },
  { id: 28, name: "Neroli Sunlight", category: "Women", priceGHS: 950, priceUSD: 79, description: "Bright orange blossom and Mediterranean citrus.", rating: 4.2, image: "images/products/28.jpg", isBestSeller: false, isNew: false },
  { id: 29, name: "Velvet Iris", category: "Women", priceGHS: 1550, priceUSD: 129, description: "Powdery, elegant iris root with a touch of violet.", rating: 4.9, image: "images/products/29.jpg", isBestSeller: false, isNew: false },
  { id: 30, name: "Spicy Freesia", category: "Women", priceGHS: 1050, priceUSD: 87, description: "Vibrant freesia invigorated by pink peppercorn.", rating: 4.5, image: "images/products/30.jpg", isBestSeller: false, isNew: true },
  { id: 31, name: "Amber Goddess", category: "Women", priceGHS: 1150, priceUSD: 96, description: "Warm, glowing amber resins and sweet benzoin.", rating: 4.6, image: "images/products/31.jpg", isBestSeller: false, isNew: false },
  { id: 32, name: "Lotus Dream", category: "Women", priceGHS: 990, priceUSD: 82, description: "Aquatic lotus flower, bamboo, and clear water.", rating: 4.1, image: "images/products/32.jpg", isBestSeller: false, isNew: false },
  { id: 33, name: "Peach Nectar", category: "Women", priceGHS: 800, priceUSD: 66, description: "Juicy white peach, osmanthus, and light musk.", rating: 4.3, image: "images/products/33.jpg", isBestSeller: false, isNew: true },
  { id: 34, name: "Gilded Muguet", category: "Women", priceGHS: 1200, priceUSD: 100, description: "Golden interpretations of classic lily of the valley.", rating: 4.5, image: "images/products/34.jpg", isBestSeller: false, isNew: false },

  // UNISEX (16)
  { id: 35, name: "Santal 33 Tribute", category: "Unisex", priceGHS: 1650, priceUSD: 137, description: "Iconic cardamom, iris, violet, and Australian sandalwood.", rating: 5, image: "images/products/35.jpg", isBestSeller: true, isNew: false },
  { id: 36, name: "Fig & Woods", category: "Unisex", priceGHS: 1100, priceUSD: 91, description: "Green fig leaf, creamy fig sap, and white cedar.", rating: 4.7, image: "images/products/36.jpg", isBestSeller: false, isNew: true },
  { id: 37, name: "Bergamot Breeze", category: "Unisex", priceGHS: 850, priceUSD: 70, description: "Sunny Calabrian bergamot and sheer musk.", rating: 4.4, image: "images/products/37.jpg", isBestSeller: false, isNew: false },
  { id: 38, name: "Oud & Rose", category: "Unisex", priceGHS: 1750, priceUSD: 145, description: "The classic Middle Eastern pairing of dark oud and sweet rose.", rating: 4.8, image: "images/products/38.jpg", isBestSeller: false, isNew: false },
  { id: 39, name: "Leather & Vanilla", category: "Unisex", priceGHS: 1250, priceUSD: 104, description: "Contrasting soft vanilla with rugged, distressed leather.", rating: 4.6, image: "images/products/39.jpg", isBestSeller: false, isNew: true },
  { id: 40, name: "Smoked Tea", category: "Unisex", priceGHS: 980, priceUSD: 81, description: "Lapsang souchong tea leaves, guaiac wood, and ash.", rating: 4.2, image: "images/products/40.jpg", isBestSeller: false, isNew: false },
  { id: 41, name: "Salted Caramel & Woods", category: "Unisex", priceGHS: 1350, priceUSD: 112, description: "Gourmand caramel balanced by dry, salty driftwood.", rating: 4.5, image: "images/products/41.jpg", isBestSeller: false, isNew: false },
  { id: 42, name: "Matcha Zen", category: "Unisex", priceGHS: 1050, priceUSD: 87, description: "Earthy matcha tea, jasmine petals, and white chocolate.", rating: 4.3, image: "images/products/42.jpg", isBestSeller: false, isNew: true },
  { id: 43, name: "Cashmere Cloud", category: "Unisex", priceGHS: 1150, priceUSD: 95, description: "Fluffy white musks and soft, skin-like ambrette.", rating: 4.7, image: "images/products/43.jpg", isBestSeller: false, isNew: false },
  { id: 44, name: "Spiced Citrus", category: "Unisex", priceGHS: 880, priceUSD: 73, description: "Grapefruit and mandarin zested with ginger and clove.", rating: 4.1, image: "images/products/44.jpg", isBestSeller: false, isNew: false },
  { id: 45, name: "Saffron Spice", category: "Unisex", priceGHS: 1550, priceUSD: 129, description: "Red gold saffron, warm spices, and a hint of sweet resin.", rating: 4.9, image: "images/products/45.jpg", isBestSeller: false, isNew: true },
  { id: 46, name: "Wild Juniper", category: "Unisex", priceGHS: 920, priceUSD: 76, description: "Crisp juniper berries, gin accord, and tonic effervescence.", rating: 4.2, image: "images/products/46.jpg", isBestSeller: false, isNew: false },
  { id: 47, name: "Cardamom Coffee", category: "Unisex", priceGHS: 1200, priceUSD: 100, description: "Rich roasted coffee beans infused with crushed cardamom.", rating: 4.6, image: "images/products/47.jpg", isBestSeller: false, isNew: false },
  { id: 48, name: "Palo Santo Ritual", category: "Unisex", priceGHS: 1400, priceUSD: 116, description: "Cleansing palo santo wood, frankincense, and black pepper.", rating: 4.8, image: "images/products/48.jpg", isBestSeller: false, isNew: true },
  { id: 49, name: "Rain Mousse", category: "Unisex", priceGHS: 890, priceUSD: 74, description: "Petrichor, wet stones, and fresh green moss.", rating: 4.5, image: "images/products/49.jpg", isBestSeller: false, isNew: false },
  { id: 50, name: "Golden Ambergris", category: "Unisex", priceGHS: 1950, priceUSD: 162, description: "The rarest synthetic ambergris, shimmering and oceanic.", rating: 5, image: "images/products/50.jpg", isBestSeller: false, isNew: false }
];

// Helper to expose to window
if (typeof window !== 'undefined') {
  window.products = products;
}
