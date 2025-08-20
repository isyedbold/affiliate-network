import Image from "next/image";
import { Button } from "@/components/ui/button";

const collageImages = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/next-047467-e455e1cfd2b510a4552fdec01a869a36fb481aed-4167x4167.jpg?",
    alt: "Abstract green crosshair design",
    className:
      "absolute top-0 left-[5%] w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px]",
    style: { zIndex: 10 },
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/next-129551-d85c647511945162568fd66cb393f873125ce557-4167x4167.jpg?",
    alt: "Abstract design with a blue horizon line",
    className:
      "absolute top-[5%] right-[5%] w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] lg:w-[230px] lg:h-[230px]",
    style: { zIndex: 5 },
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/ad7dc91575118bdd87af0d801c5ceca17062691c-4167x4167-9.jpg?",
    alt: "Product packaging design for life on the move",
    className:
      "absolute top-[40%] left-0 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[230px] lg:h-[230px]",
    style: { zIndex: 20 },
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/next-503433-dcaadc70145486a5f5ce4a37e98ed899dae9332b-4000x2250.jpg?",
    alt: "Side view of a futuristic red car",
    className:
      "absolute bottom-0 left-[15%] w-[250px] sm:w-[300px] lg:w-[350px] h-auto",
    style: { zIndex: 15 },
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/e80322947dde694c3375c69936ffe49ad3fb6b55-4167x4167-26.jpg?",
    alt: "Abstract AI design",
    className:
      "absolute top-[60%] right-[10%] w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[210px] lg:h-[210px]",
    style: { zIndex: 8 },
  },
];

const ContactSection = () => {
  return (
    <section className="bg-white text-black py-20 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
            <div className="w-full h-full max-w-md lg:max-w-none">
              {collageImages.map((image, index) => (
                <div
                  key={index}
                  className={image.className}
                  style={image.style}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium tracking-widest uppercase mb-4">
              [Contact us]
            </p>
            <h2 className="font-extrabold text-5xl sm:text-6xl !leading-none tracking-tighter">
              Let's build
              <br />
              your brand
              <br />
              edge.
            </h2>
            <p className="mt-8 text-lg max-w-md">
              Schedule a discovery call with our award-winning team to see how
              we can transform your brand vision into reality.
            </p>
            <Button
              variant="default"
              className="mt-8 bg-accent-yellow text-primary-black font-bold text-base px-8 py-7 rounded-none hover:bg-accent-yellow hover:scale-105 transition-transform duration-300 ease-in-out w-fit"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;