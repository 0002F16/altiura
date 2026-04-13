const CARD_IMAGES = {
  weehawken: "/listings/cards/weehawken.jpg",
  soho: "/listings/cards/soho-nyc.jpg",
  northBergen: "/listings/cards/8516-3rd-Ave.jpg",
  grand: "/listings/cards/bergeline-avenue.png",
  orchard: "/listings/cards/27-orchard.png",
  greaterNewYork: "/listings/cards/greater-new-york.jpg",
};

function gallery(dir: string, files: string[], label: string) {
  return files.map((file) => ({
    src: `${dir}/${file}`,
    alt: `${label} — ${file}`,
  }));
}

const GALLERIES = {
  weehawken: gallery(
    "/listings/weehawken",
    Array.from({ length: 20 }, (_, i) => `${i + 1}.jpg`),
    "Weehawken",
  ),
  soho: gallery(
    "/listings/soho-nyc",
    Array.from({ length: 20 }, (_, i) => `${i + 1}.jpg`),
    "SoHo, NYC",
  ),
  thirdAve: gallery(
    "/listings/8516-3rd-ave",
    Array.from({ length: 16 }, (_, i) => `${i + 1}.jpg`),
    "8516 3rd Ave",
  ),
  grand: gallery(
    "/listings/561-grand-ave",
    [
      "17.png",
      ...Array.from({ length: 16 }, (_, i) => `${i + 1}.jpg`),
      "18.jpg",
      "19.jpg",
    ],
    "561 Grand Ave",
  ),
  orchard: gallery(
    "/listings/27-orchard",
    Array.from({ length: 18 }, (_, i) => `${i + 1}.jpg`),
    "27 Orchard",
  ),
  greaterNewYork: gallery(
    "/listings/greater-new-york",
    Array.from({ length: 16 }, (_, i) => `${i + 1}.jpg`),
    "Greater New York",
  ),
};

export interface Listing {
  slug: string;
  address: string;
  city: string;
  state: string;
  price?: number | null;
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
    slug: "561-grand-ave",
    address: "561 Grand Ave",
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
    heroImage: CARD_IMAGES.grand,
    galleryImages: GALLERIES.grand,
    description:
      "A classic American downtown, blue-ribbon school district, and a diverse community await you in this neighborhood. Leonia is known for its easy commute into Manhattan via the George Washington Bridge and its connections to every major highway in North Jersey. Additionally, it’s recognized as a great commuter town for building a family.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-73.9902%2C40.8696%2C-73.9832%2C40.8724&layer=mapnik&marker=40.871006%2C-73.986697",
    coords: "40.871006 N, 73.986697 W",
  },
  {
    slug: "weehawken",
    address: "Weehawken",
    city: "Weehawken",
    state: "NJ",
    price: null,
    beds: 0,
    baths: 1,
    type: "Residence",
    floors: "—",
    garage: "—",
    parking: "—",
    outdoor: "—",
    schoolDistrict: "—",
    heroImage: CARD_IMAGES.weehawken,
    galleryImages: GALLERIES.weehawken,
    description:
      "This Weehawken residence offers stunning views of New York City, blending history, culture, and convenience with a quick commute to NYC.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-74.0200%2C40.7650%2C-74.0000%2C40.7750&layer=mapnik&marker=40.7700%2C-74.0100",
    coords: "40.7700 N, 74.0100 W",
  },
  {
    slug: "soho-nyc",
    address: "SoHo, NYC",
    city: "New York",
    state: "NY",
    price: null,
    beds: 0,
    baths: 1,
    type: "Residence",
    floors: "—",
    garage: "—",
    parking: "—",
    outdoor: "—",
    schoolDistrict: "—",
    heroImage: CARD_IMAGES.soho,
    galleryImages: GALLERIES.soho,
    description:
      "Staying in SoHo offers a trendy experience with high-end boutiques, art galleries, world-class restaurants, and iconic landmarks like cast-iron buildings in a vibrant Manhattan neighborhood.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-74.0050%2C40.7220%2C-73.9950%2C40.7280&layer=mapnik&marker=40.7250%2C-74.0000",
    coords: "40.7250 N, 74.0000 W",
  },
  {
    slug: "8516-3rd-ave",
    address: "8516 3rd Ave",
    city: "Brooklyn",
    state: "NY",
    price: null,
    beds: 0,
    baths: 1,
    type: "Residence",
    floors: "—",
    garage: "—",
    parking: "—",
    outdoor: "—",
    schoolDistrict: "—",
    heroImage: CARD_IMAGES.northBergen,
    galleryImages: GALLERIES.thirdAve,
    description:
      "North Bergen Township is a family-friendly commuter town, offering proximity to NYC, the American Dream Mall, North Jersey office complexes, and great schools. A bustling primary avenue, Bergenline Avenue, cuts through North Bergen, providing over 100 restaurants within the immediate township.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-74.0400%2C40.6100%2C-73.9800%2C40.6500&layer=mapnik&marker=40.6300%2C-74.0100",
    coords: "40.6300 N, 74.0100 W",
  },
  {
    slug: "27-orchard",
    address: "27 Orchard",
    city: "New York",
    state: "NY",
    price: null,
    beds: 0,
    baths: 1,
    type: "Residence",
    floors: "—",
    garage: "—",
    parking: "—",
    outdoor: "—",
    schoolDistrict: "—",
    heroImage: CARD_IMAGES.orchard,
    galleryImages: GALLERIES.orchard,
    description:
      "27 Orchard offers a perfect blend of modern living and convenience, with easy access to shopping centers, dining, and transportation in a vibrant urban setting.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-74.0100%2C40.7150%2C-73.9950%2C40.7250&layer=mapnik&marker=40.7200%2C-74.0020",
    coords: "40.7200 N, 74.0020 W",
  },
  {
    slug: "greater-new-york",
    address: "Greater New York",
    city: "New York",
    state: "NY",
    price: null,
    beds: 0,
    baths: 1,
    type: "Residence",
    floors: "—",
    garage: "—",
    parking: "—",
    outdoor: "—",
    schoolDistrict: "—",
    heroImage: CARD_IMAGES.greaterNewYork,
    galleryImages: GALLERIES.greaterNewYork,
    description:
      "Staying in Greater New York offers a vibrant, diverse experience with world-class museums, Broadway shows, unique neighborhoods, and stunning natural beauty, always offering something new to discover.",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-74.1000%2C40.6500%2C-73.8500%2C40.8500&layer=mapnik&marker=40.7500%2C-73.9900",
    coords: "40.7500 N, 73.9900 W",
  },
];
