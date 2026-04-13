const CARD_IMAGES = {
  weehawken: "/listings/cards/weehawken.jpg",
  soho: "/listings/cards/soho-nyc.jpg",
  northBergen: "/listings/cards/8516-3rd-Ave.jpg",
  grand: "/listings/cards/bergeline-avenue.png",
  orchard: "/listings/cards/27-orchard.png",
  greaterNewYork: "/listings/cards/greater-new-york.jpg",
};

const GRAND_GALLERY = "/listings/561-grand";

const projectGalleryImages = [
  { src: CARD_IMAGES.weehawken, alt: "Weehawken residence exterior" },
  { src: CARD_IMAGES.soho, alt: "SoHo neighborhood exterior" },
  { src: CARD_IMAGES.northBergen, alt: "North Bergen residence exterior" },
  { src: CARD_IMAGES.grand, alt: "561 Grand Avenue exterior" },
  { src: CARD_IMAGES.orchard, alt: "27 Orchard exterior" },
  { src: CARD_IMAGES.greaterNewYork, alt: "Greater New York skyline" },
];

export interface Listing {
  slug: string;
  address: string;
  city: string;
  state: string;
  price: number;
  beds: number;
  baths: number;
  type: string;
  floors: string;
  garage: string;
  parking: string;
  outdoor: string;
  schoolDistrict: string;
  heroImage: string;
  galleryImages: { src: string; alt: string }[];
  description: string;
  mapEmbedUrl: string;
  coords: string;
}

export const listings: Listing[] = [
  {
    slug: "grand-avenue-leonia",
    address: "561 Grand Avenue",
    city: "Leonia",
    state: "NJ",
    price: 4500,
    beds: 3,
    baths: 1,
    type: "Multi-Family",
    floors: "4",
    garage: "Included",
    parking: "2 Spots",
    outdoor: "Private Patio",
    schoolDistrict: "Blue-Ribbon",
    heroImage: `${GRAND_GALLERY}/17.png`,
    galleryImages: [
      { src: `${GRAND_GALLERY}/1.jpg`, alt: "Kitchen" },
      { src: `${GRAND_GALLERY}/2.jpg`, alt: "Kitchen" },
      { src: `${GRAND_GALLERY}/3.jpg`, alt: "Hallway" },
      { src: `${GRAND_GALLERY}/4.jpg`, alt: "Bedroom" },
      { src: `${GRAND_GALLERY}/5.jpg`, alt: "Kitchen" },
      { src: `${GRAND_GALLERY}/6.jpg`, alt: "Bathroom" },
      { src: `${GRAND_GALLERY}/10.jpg`, alt: "Den" },
      { src: `${GRAND_GALLERY}/11.jpg`, alt: "Bathroom" },
      { src: `${GRAND_GALLERY}/12.jpg`, alt: "Common stairs" },
      { src: `${GRAND_GALLERY}/13.jpg`, alt: "Bedroom" },
      { src: `${GRAND_GALLERY}/14.jpg`, alt: "Den" },
    ],
    description:
      "A luxury multi-family home designed for multi-generational living across four floors. The upper unit offers 4 bedrooms, an attic, and private spaces bathed in natural light. The first-floor and basement unit features 5 bedrooms and 2 bathrooms. A modern 2-car garage, additional uncovered parking, and a generous patio complete the property. Located in Leonia\u2019s sought-after community with access to blue-ribbon schools.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-73.9902%2C40.8696%2C-73.9832%2C40.8724&layer=mapnik&marker=40.871006%2C-73.986697",
    coords: "40.871006 N, 73.986697 W",
  },
  {
    slug: "bergen-boulevard-fairview",
    address: "245 Bergen Boulevard",
    city: "Fairview",
    state: "NJ",
    price: 3200,
    beds: 2,
    baths: 1,
    type: "Condo",
    floors: "2",
    garage: "Not Included",
    parking: "1 Spot",
    outdoor: "Shared Terrace",
    schoolDistrict: "Fairview Public",
    heroImage: CARD_IMAGES.northBergen,
    galleryImages: projectGalleryImages,
    description:
      "A refined two-bedroom condominium on Bergen Boulevard offering elegant finishes and an effortless commute to Manhattan. Hardwood floors, stainless appliances, and oversized windows define the interior. The shared terrace provides a communal outdoor retreat. Steps from local dining, parks, and express bus service to the city.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-74.0050%2C40.8160%2C-73.9980%2C40.8190&layer=mapnik&marker=40.8175%2C-74.0015",
    coords: "40.8175 N, 74.0015 W",
  },
  {
    slug: "palisade-avenue-cliffside-park",
    address: "78 Palisade Avenue",
    city: "Cliffside Park",
    state: "NJ",
    price: 4100,
    beds: 3,
    baths: 2,
    type: "Townhouse",
    floors: "3",
    garage: "Attached",
    parking: "2 Spots",
    outdoor: "Private Deck",
    schoolDistrict: "Cliffside Park",
    heroImage: CARD_IMAGES.weehawken,
    galleryImages: projectGalleryImages,
    description:
      "A three-story townhouse steps from the iconic Palisades ridge, offering sweeping views of the Hudson and Manhattan skyline from a private deck. Three spacious bedrooms, two full baths, an attached garage, and an open-plan living level make this an exceptional find in one of Bergen County\u2019s most coveted addresses.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-73.9900%2C40.8230%2C-73.9830%2C40.8260&layer=mapnik&marker=40.8245%2C-73.9865",
    coords: "40.8245 N, 73.9865 W",
  },
  {
    slug: "overlook-road-edgewater",
    address: "12 Overlook Road",
    city: "Edgewater",
    state: "NJ",
    price: 5800,
    beds: 4,
    baths: 2,
    type: "Multi-Family",
    floors: "3",
    garage: "Detached",
    parking: "3 Spots",
    outdoor: "Rooftop Terrace",
    schoolDistrict: "Edgewater",
    heroImage: CARD_IMAGES.greaterNewYork,
    galleryImages: projectGalleryImages,
    description:
      "A landmark multi-family residence perched above the Hudson waterfront in Edgewater, New Jersey. Four generous bedrooms across three floors culminate in a rare private rooftop terrace with unobstructed Manhattan views. Designed for the discerning tenant who demands space, quality, and proximity to the city without the noise.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-73.9780%2C40.8220%2C-73.9710%2C40.8250&layer=mapnik&marker=40.8235%2C-73.9745",
    coords: "40.8235 N, 73.9745 W",
  },
  {
    slug: "river-court-fort-lee",
    address: "33 River Court",
    city: "Fort Lee",
    state: "NJ",
    price: 3600,
    beds: 2,
    baths: 1,
    type: "Condo",
    floors: "1",
    garage: "Not Included",
    parking: "1 Spot",
    outdoor: "Juliet Balcony",
    schoolDistrict: "Fort Lee",
    heroImage: CARD_IMAGES.soho,
    galleryImages: projectGalleryImages,
    description:
      "An intimate two-bedroom condominium in the heart of Fort Lee, moments from the George Washington Bridge. Clean lines, contemporary finishes, and a Juliet balcony with river glimpses define this carefully curated residence. Ideal for professionals seeking style, convenience, and a streamlined connection to Manhattan.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-73.9740%2C40.8490%2C-73.9670%2C40.8520&layer=mapnik&marker=40.8505%2C-73.9705",
    coords: "40.8505 N, 73.9705 W",
  },
];
