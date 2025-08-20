'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  href: string;
  servicesList: string[];
  images: string[];
}

const servicesData: Service[] = [
{
  title: "For Brands",
  href: 'https://dusted.com/brand',
  servicesList: [
  'Brand research',
  'Brand strategy',
  'Brand naming',
  'Brand identity',
  'Design systems'],

  images: [
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/09602b317bb6b1d1becdebab3253939983e222a3-4167x4167-7.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/56f64aad474b564d8091952720b804f99e037f72-4167x4167-8.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/ad7dc91575118bdd87af0d801c5ceca17062691c-4167x4167-9.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/75e9a9f51dda4a9bf85592c49dbd3a3b4819d9a1-4167x4167-10.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/16ca01ae8a0a1c422fb915e025dad2712ed5b7e2-4167x4167-11.jpg']

},
{
  title: "For Affiliates",
  href: 'https://dusted.com/activation',
  servicesList: [
  'Integrated campaigns',
  'Marcomms',
  'Video & motion',
  'Brand experience',
  'Corporate comms'],

  images: [
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/2e13d890b6b85bee920266f93495a4d5fce6f36f-4167x4167-12.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/c5558dc5cfb595a7269247e240dbbe881389891f-4167x4167-13.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/f0b498ca6073c421d0be5a930b93dbd0eccddb2b-4167x4167-14.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/7ae91988b29d3b3a41112f32bf47d85a9e001e44-4167x4167-15.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/d65b135c2920ef208eb09b111cf0f82d46d4184a-4167x4167-16.jpg']

},
{
  title: "For Media Buyers",
  href: 'https://dusted.com/digital',
  servicesList: [
  'Digital strategy',
  'Digital experience',
  'Web development',
  'Web analytics',
  'Digital marketing',
  'Managed services'],

  images: [
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/4d96dc68c36c77c0d3283ada3ad9070e9cc06281-4167x4167-17.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/787c260ab95b0222dfa3a348338897fa6256801b-4167x4167-18.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/b152baa6f6a028954895142181eb8614f95dc7ef-4167x4167-19.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/936c7bce28dfeebf21669722c6345e74041f01ed-4167x4167-20.jpg',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/4d674726bad5e450ba5d71935ea6d1c71a84401e-4167x4167-21.jpg']

}];


const imagePositions = [
"absolute top-0 left-[20%] w-28 h-28 object-cover rounded-full",
"absolute top-[20%] right-0 w-28 h-28 object-cover rounded-full",
"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 object-cover rounded-full",
"absolute bottom-[20%] left-0 w-28 h-28 object-cover rounded-full",
"absolute bottom-0 right-[20%] w-28 h-28 object-cover rounded-full"];


const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white text-black py-20 lg:py-32 px-4 sm:px-8 xl:px-16">
            {/* Desktop view */}
            <div className="hidden lg:block max-w-screen-2xl mx-auto">
                <p className="text-sm font-medium tracking-[0.2em] mb-16 !whitespace-pre-line">[WHAT YOU GET WITH REFYLO]</p>
                <div onMouseLeave={() => setHoveredIndex(null)}>
                    {servicesData.map((service, index) =>
          <Link href={service.href} key={service.title} className="block group border-t border-neutral-300 cursor-pointer">
                            <div className="flex justify-between items-start py-8 transition-all duration-300">
                                <div className="flex items-start flex-grow">
                                    <div className="bg-black p-3 mr-12 mt-4 shrink-0">
                                        <ArrowRight size={24} className="text-white" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <h2 className="font-black leading-tight transition-transform duration-300 group-hover:-translate-y-1 !whitespace-pre-line !text-[44px] !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !w-full !h-[110px] !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{service.title}</h2>
                                        <div className={`transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'max-h-96 opacity-100 pt-8' : 'max-h-0 opacity-0'}`}>
                                            <ul className="text-xl space-y-2">
                                                {service.servicesList.map((item) => <li key={item} className="transition-transform duration-300 group-hover:translate-x-1">{item}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`relative w-[340px] h-[280px] shrink-0 transition-opacity duration-500 mr-8 pointer-events-none ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                                    {service.images.map((src, i) =>
                <Image
                  key={src}
                  src={src}
                  alt={`${service.title} image ${i + 1}`}
                  width={112}
                  height={112}
                  className={imagePositions[i]} />

                )}
                                </div>
                            </div>
                        </Link>
          )}
                    <div className="border-t border-neutral-300"></div>
                </div>
            </div>

            {/* Mobile view */}
            <div className="lg:hidden bg-black text-white -mx-4 sm:-mx-8 -my-20 py-20 px-4 sm:px-8">
                 <p className="text-sm font-medium tracking-[0.2em] mb-12">[OUR SERVICES]</p>
                 <div className="border-t border-neutral-700">
                    {servicesData.map((service) =>
          <Link href={service.href} key={service.title} className="block border-b border-neutral-700">
                            <div className="flex items-center py-8">
                                <div className="bg-white p-2 mr-6 shrink-0">
                                    <ArrowRight size={24} className="text-black" />
                                </div>
                                <h2 className="text-4xl sm:text-5xl font-black leading-none">{service.title}</h2>
                            </div>
                        </Link>
          )}
                 </div>
            </div>
        </section>);

};

export default Services;