import Image from "next/image";

const BASE = "https://altiurarentals.com/src/images/projects/BERGENLINE AVENUE";
const mapEmbedUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=-73.9902%2C40.8696%2C-73.9832%2C40.8724&layer=mapnik&marker=40.871006%2C-73.986697";

const heroImage = `${BASE}/1.jpg`;

const galleryImages = [
  { src: `${BASE}/2.jpg`, alt: "Living room" },
  { src: `${BASE}/3.jpg`, alt: "Kitchen" },
  { src: `${BASE}/4.jpg`, alt: "Bedroom" },
  { src: `${BASE}/5.jpg`, alt: "Bathroom" },
  { src: `${BASE}/6.jpg`, alt: "Master suite" },
  { src: `${BASE}/7.jpg`, alt: "Common area" },
  { src: `${BASE}/8.jpg`, alt: "Dining area" },
  { src: `${BASE}/9.jpg`, alt: "Entrance" },
];

const specs = [
  { label: "Type", value: "Multi-Family / Duplex" },
  { label: "Floors", value: "4" },
  { label: "Bedrooms", value: "3" },
  { label: "Bathroom", value: "1" },
  { label: "Garage", value: "Included" },
  { label: "Parking", value: "2 Spots" },
  { label: "Outdoor", value: "Private Patio" },
  { label: "School District", value: "Blue-Ribbon" },
];

export default function ListingPage() {
  return (
    <>
      {/* Fixed Price + CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-black/10 md:bg-transparent md:border-0 md:bottom-auto md:top-0 md:left-auto md:right-0 md:w-auto">
        <div className="flex items-center justify-between md:flex-col md:items-end gap-4 md:gap-3 px-6 py-4 md:px-10 md:py-8">
          <div className="md:text-right">
            <p className="font-heading text-2xl md:text-3xl tracking-tightest font-light">
              $4,500 / Month
            </p>
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-neutral-400 mt-0.5">
              For Rent
            </p>
          </div>
          <a
            href="mailto:support@altiura.com"
            className="font-body text-[10px] tracking-[0.25em] uppercase bg-black text-white px-6 py-3 hover:bg-neutral-800 transition-colors duration-500 whitespace-nowrap"
          >
            Inquire
          </a>
        </div>
      </div>

      {/* Logo */}
      <header className="fixed top-0 left-0 z-40 px-6 md:px-10 py-6 md:py-8">
        <a href="#" className="font-heading text-xl tracking-tightest font-light text-black">
          Altiura
        </a>
      </header>

      {/* Spacer */}
      <div className="h-20 md:h-28" />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-10 pb-32 md:pb-20">

        {/* Title Block */}
        <div className="mb-16 md:mb-24 reveal d1">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-neutral-400 mb-4">
            Leonia, New Jersey
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-tightest leading-[0.9] mb-0">
            561<br />Grand<br />Avenue
          </h1>
        </div>

        {/* Hero Image */}
        <div className="mb-20 md:mb-28 reveal d2">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={heroImage}
              alt="561 Grand Avenue exterior"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        {/* Specs */}
        <div className="mb-20 md:mb-28 reveal d3">
          {specs.map(({ label, value }) => (
            <div
              key={label}
              className="flex justify-between items-baseline py-5 border-b border-black/8"
            >
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-neutral-400">
                {label}
              </span>
              <span className="font-heading text-xl md:text-2xl tracking-tightest font-light">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mb-20 md:mb-28 max-w-lg reveal d4">
          <p className="font-body text-sm font-light leading-[1.9] text-neutral-500">
            A luxury multi-family home designed for multi-generational living across four floors.
            The upper unit offers 4 bedrooms, an attic, and private spaces bathed in natural light.
            The first-floor and basement unit features 5 bedrooms and 2 bathrooms. A modern 2-car
            garage, additional uncovered parking, and a generous patio complete the property.
            Located in Leonia&apos;s sought-after community with access to blue-ribbon schools.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 mb-20 md:mb-28 reveal d5">
          {galleryImages.map((img) => (
            <div key={img.src} className="relative w-full aspect-[4/5]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mb-20 md:mb-28 reveal d6">
          <div className="w-full aspect-[2/1] bg-neutral-50 relative overflow-hidden">
            <iframe
              title="Map of 561 Grand Ave, Leonia"
              src={mapEmbedUrl}
              className="h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-black/8 pb-5">
            <p className="font-heading text-xl tracking-tightest font-light text-black md:text-2xl">
              Leonia, New Jersey
            </p>
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-neutral-400">
              40.871006 N, 73.986697 W
            </p>
          </div>
        </div>

        {/* Agent */}
        <div className="border-t border-black/8 pt-10">
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-neutral-300 mb-6">
            Contact
          </p>
          <p className="font-heading text-2xl tracking-tightest font-light mb-1">Altiura</p>
          <a
            href="mailto:support@altiura.com"
            className="font-body text-sm font-light text-neutral-400 hover:text-black transition-colors duration-300 block"
          >
            support@altiura.com
          </a>
          <a
            href="tel:+15517511151"
            className="font-body text-sm font-light text-neutral-400 hover:text-black transition-colors duration-300 block mt-1"
          >
            +1 (551) 751-1151
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 px-6 md:px-10 py-8 mb-20 md:mb-0">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <p className="font-heading text-base tracking-tightest font-light text-neutral-300">
            Altiura
          </p>
          <p className="font-body text-[9px] tracking-[0.2em] uppercase text-neutral-200">
            &copy; 2026
          </p>
        </div>
      </footer>
    </>
  );
}
