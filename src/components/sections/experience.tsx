import { ArrowRight } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="bg-pure-white text-primary-black py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-square w-full">
            <iframe
              src="https://player.vimeo.com/video/1084971138?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Automotive detail video background"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-black text-[2.5rem] leading-[1.1] lg:text-[2.75rem] lg:leading-[1.1]">
              London to Mumbai. <br />
              Fintech to automotive. <br />
              Start-ups to listed.
            </h2>
            <p className="text-lg mt-8 mb-12 max-w-xl tracking-wide leading-[1.6]">
              We draw on years of experience and deep expertise to shape our
              strategy, creative work, digital solutions and integrated
              activation campaigns. The result? Measurable success across
              industries, cultures, and global markets.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12 text-lg font-medium">
              <button
                className="group flex items-center space-x-2 transition-colors hover:text-medium-gray"
              >
                <span>Brand</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                className="group flex items-center space-x-2 transition-colors hover:text-medium-gray"
              >
                <span>Activation</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                className="group flex items-center space-x-2 transition-colors hover:text-medium-gray"
              >
                <span>Digital</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;