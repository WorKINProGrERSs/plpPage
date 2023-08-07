/*The task did not say anything about creating a database to store the product information 
and I made a choice to use arrays to hold all the information necessary for the products. 
If a database was expected please keep in mind that I did this because this is what 
I thought the task expected from me.*/

let bagsFilePath = "../immages/bags/";
let hatsFilePath = "../immages/hats/";
let shoesFilePath = "../immages/shoes/";

const bagsImmages = [
  bagsFilePath + "0.jpg",
  bagsFilePath + "1.jpg",
  bagsFilePath + "2.jpg",
  bagsFilePath + "3.jpg",
  bagsFilePath + "4.jpg",
];

const shoesImmages = [
  shoesFilePath + "0.jpg",
  shoesFilePath + "1.jpg",
  shoesFilePath + "2.jpg",
  shoesFilePath + "3.jpg",
  shoesFilePath + "4.jpg",
  shoesFilePath + "5.jpg",
  shoesFilePath + "6.jpg",
];

const hatsImagges = [hatsFilePath + "0.jpg", hatsFilePath + "1.jpg"];

const bagsPrise = [100, 20, 50, 70, 120];
const shoesPrise = [70, 80, 20, 25, 30, 90, 85];
const hatsPrise = [10, 15];

const bagsName = [
  "EcoTrekker Backpack",
  "Urban Explorer Tote",
  "Adventure Seeker Duffel",
  "Fashionista Crossbody Bag",
  "Weekend Wanderer Satchel",
];
const shoesNames = [
  "AirStride Performance Running Shoes",
  "CityScape Casual Sneakers",
  "TrailMaster Hiking Boots",
  "RetroGlide Vintage Loafers",
  "ElevateTech Sports Trainers",
  "UrbanChic High Heels",
  "ComfyCloud Slip-On Sandals",
];

const hatsNames = ["Urban Explorer Fedora", "Adventure Seeker Baseball Cap"];

const bagsDescription = [
  " A sustainable and versatile backpack designed for eco-conscious adventurers. Made from recycled materials and featuring ample storage compartments for all your gear.",

  " An elegant and spacious tote bag, perfect for city dwellers on the go. Its stylish design complements any outfit while offering plenty of room for your essentials.",

  " The ultimate duffel bag for thrill-seekers and outdoor enthusiasts. Built to withstand rugged adventures, this duffel offers ample space and durability for all your expeditions.",

  "A trendy and chic crossbody bag designed for the fashion-forward individual. Its compact size and stylish details make it a statement accessory for any occasion.",

  " The ideal companion for weekend getaways and leisurely trips. This satchel boasts a classic design with modern functionality to carry your essentials in style.",
];

const shoesDescription = [
  "Experience unparalleled comfort and support with AirStride running shoes. Engineered for high-performance athletes, these shoes deliver exceptional cushioning and breathability for your daily runs.",
  "Embrace urban style with CityScape sneakers. These versatile and trendy sneakers offer a perfect blend of comfort and fashion, making them ideal for exploring city streets or casual outings.",
  "Conquer every trail with TrailMaster hiking boots. Designed to provide superior traction and stability, these boots offer rugged durability to withstand challenging outdoor adventures.",
  "Step back in time with RetroGlide vintage loafers. Inspired by classic designs, these loafers exude timeless charm and sophistication, perfect for adding a touch of elegance to your wardrobe.",
  "Elevate your performance with ElevateTech sports trainers. Engineered with cutting-edge technology, these trainers offer optimal support and flexibility, helping you reach new heights in your athletic pursuits.",
  "Elevate your style with UrbanChic high heels. These sleek and glamorous heels are the epitome of urban sophistication, adding a touch of elegance to any outfit for special occasions.",
  "Experience cloud-like comfort with ComfyCloud slip-on sandals. Designed for maximum ease and relaxation, these sandals are perfect for lounging or strolling in comfort and style.",
];

const hatsDescriptions = [
  "Channel your inner explorer with the Urban Explorer Fedora. This stylish and versatile fedora is perfect for city adventures, featuring a timeless design that complements any outfit.",

  "Embrace your adventurous spirit with the Adventure Seeker Baseball Cap. Whether you're hiking, camping, or exploring new places, this comfortable and durable cap offers protection and style on your quests.",
];

const bagsMaterials = [
  "Nylon",
  "Leather",
  "Canvas",
  "Polyester",
  "Faux Leather (Vegan Leather)",
];

const shoesMaterials = [
  "Nylon",
  "Leather",
  "Textile",
  "Nylon",
  "Faux Leather (Vegan Leather)",
  "Textile",
  "Nylon",
];
const hatsMaterials = ["Textile", "Textile"];

const bagsColour = ["black", "green", "brown", "brown", "blue"];
const shoesColour = [
  "black",
  "blue",
  "black",
  "white",
  "black",
  "white",
  "gray",
];
const hatsColour = ["brown", "green"];

const bagsId = [0, 1, 2, 3, 4];
const shoesId = [0, 1, 2, 3, 4, 5, 6];
const hatsId = [0, 1];

const bagssRating = [3, 4.5, 2, 4, 3];
const shoesRating = [3.5, 4, 3, 6, 4.2, 4, 5];
const hatsRating = [4, 5];
const productBag = [
  bagsId,
  bagsImmages,
  bagsName,
  bagsPrise,
  bagsDescription,
  bagsColour,
  bagsMaterials,
  bagssRating,
];
const producShues = [
  shoesId,
  shoesImmages,
  shoesNames,
  shoesPrise,
  shoesDescription,
  shoesColour,
  shoesMaterials,
  shoesRating,
];
const productHats = [
  hatsId,
  hatsImagges,
  hatsNames,
  hatsPrise,
  hatsDescriptions,
  hatsColour,
  hatsMaterials,
  hatsRating,
];

const contentArrays = [productBag, producShues, productHats];
export default contentArrays;
