import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Stat {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
}

const stats: Stat[] = [
{
  imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/e80322947dde694c3375c69936ffe49ad3fb6b55-4167x4167-26.jpg",
  alt: "A woman talking at a business meeting, representing London-based operations.",
  title: "100%",
  description: "Verified affiliates .."
},
{
  imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/c5558dc5cfb595a7269247e240dbbe881389891f-4167x4167-13.jpg",
  alt: "Abstract architectural image representing the agency's long establishment.",
  title: "7-Day",
  description: "Average payout cycle to keep affiliates loyal and scaling.."
},
{
  imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/63d1e2ba-a163-42e3-a028-07175faaae11-dusted-com/assets/images/160300aeae701f0f7f1c1c7e56c11e1730aeabca-4167x4167-27.jpg",
  alt: "Close-up of golden industry awards on a shelf.",
  title: "<2%",
  description: "Fraud rate thanks to strict screening and monitoring.."
}];


const StatItem = ({ stat }: {stat: Stat;}) =>
<div className="flex items-center gap-6">
    <div className="relative w-[92px] h-[92px] flex-shrink-0">
      <Image
      src={stat.imgSrc}
      alt={stat.alt}
      width={92}
      height={92}
      className="rounded-full object-cover w-full h-full" />

    </div>
    <div>
      <p className="text-4xl lg:text-[2.75rem] font-bold leading-none !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{stat.title}</p>
      <p className="text-lg text-medium-gray font-medium mt-1 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{stat.description}</p>
    </div>
  </div>;


export default function PurposeSection() {
  return (
    <section className="bg-pure-white text-primary-black font-sans">
      <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-y-16 lg:gap-x-16">
          <div className="flex flex-col justify-center">
            <p className="text-base font-bold tracking-[0.15em] mb-6">
              [OUR PURPOSE]
            </p>
            <h3 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-8 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Ambition meets execution. Scale made simple.

            </h3>
            <div className="space-y-6 text-lg lg:text-xl font-medium max-w-lg">
              <p className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Great brands need reliable traffic. Affiliates need trustworthy offers and fast payouts. We connect the two, streamlining partnerships, protecting against fraud, and making sure everyone gets paid on time.

              </p>
              <p className="!whitespace-pre-line">

              </p>
            </div>
            <button
              className="group mt-12 inline-flex items-center gap-4 bg-primary-black text-pure-white px-8 py-4 text-base lg:text-lg font-medium self-start transition-colors hover:bg-dark-gray">

              <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
              <span>Work With Refylo</span>
            </button>
          </div>
          <div className="flex flex-col justify-center gap-10 lg:pl-8">
            {stats.map((stat) =>
            <StatItem key={stat.title} stat={stat} />
            )}
          </div>
        </div>
      </div>
    </section>);

}