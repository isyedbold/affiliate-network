"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

const SuccessStoriesPage = () => {
  const filterTags = ["All", "Affiliate", "TikTok", "Instagram", "YouTube"];
  const stories = Array(12).fill(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="success-top"></div>
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-black mb-8 max-w-4xl">
            Community Wins
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Celebrating the incredible achievements of creators who've transformed their passion into thriving communities and successful businesses through strategic digital partnerships.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section id="success-filters" className="px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {filterTags.map((tag, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-full border border-gray-300 text-black font-medium hover:border-black transition-colors bg-white"
                aria-label={`Filter success stories by ${tag}`}
                disabled
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section id="success-grid" className="px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {stories.map((_, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
                role="group"
                aria-labelledby={`story-title-${index}`}
              >
                <div className="aspect-square bg-gray-200 w-full" />
                <div className="p-6">
                  <h2 id={`story-title-${index}`} className="text-xl font-bold text-black mb-2">
                    Success Story Title {index + 1}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This incredible creator scaled their community from 1K to 100K followers in just 6 months with strategic partnerships.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <button className="px-8 py-4 bg-[#CCFF00] text-black font-bold rounded-lg hover:bg-opacity-90 transition-colors">
            Load more
          </button>
        </div>
      </section>

      {/* CTA Band */}
      <section id="success-cta" className="px-6 md:px-12 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button
              className="px-8 py-4 bg-[#CCFF00] text-black font-bold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Share your win
            </button>
            <button
              onClick={() => document.getElementById('success-top')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-black font-medium hover:text-gray-600 transition-colors"
            >
              Back to top
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;