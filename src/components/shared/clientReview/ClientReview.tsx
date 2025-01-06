
import * as React from "react";
import { ReviewCard } from "./ReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviewsData = [
  {
    name: "Robert Fox",
    role: "Customer",
    avatarSrc: "/assets/img/revDp.png",
    rating: 2,
    title: "\"Good Experience\"",
    review: "\"Pacific Rim Fusion is an outstanding platform for the B2B surplus cannabis market, offering a seamless auction experience that enhances both buying and selling processes.\""
  },
  {
    name: "Robert Fox",
    role: "Customer",
    avatarSrc: "/assets/img/revDp.png",
    rating: 4,
    title: "\"Good Experience\"",
    review: "\"Pacific Rim Fusion is an outstanding platform for the B2B surplus cannabis market, offering a seamless auction experience that enhances both buying and selling processes.\""
  },
  {
    name: "Robert Fox",
    role: "Customer",
    avatarSrc: "/assets/img/revDp.png",
    rating: 2,
    title: "\"Good Experience\"",
    review: "\"Pacific Rim Fusion is an outstanding platform for the B2B surplus cannabis market, offering a seamless auction experience that enhances both buying and selling processes.\""
  },
  {
    name: "Robert Fox",
    role: "Customer",
    avatarSrc: "/assets/img/revDp.png",
    rating: 2,
    title: "\"Good Experience\"",
    review: "\"Pacific Rim Fusion is an outstanding platform for the B2B surplus cannabis market, offering a seamless auction experience that enhances both buying and selling processes.\""
  },
];

export const ClientReviews: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-12">
      {/* Header Section */}
      <div className="flex flex-col max-w-full w-[625px] mb-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-green-800 mb-2">
            Our Client Review
          </h2>
          <p className="text-xl font-medium">Clients says.</p>
          <div className="flex gap-1 justify-center mt-2">
            <div className="w-3 h-1 bg-stone-600/30" />
            <div className="w-10 h-1 bg-green-800" />
            <div className="w-3 h-1 bg-stone-600/30" />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl relative mb-10">
        <CarouselContent>
          {reviewsData.map((review, index) => (
            <CarouselItem key={index} className="w-full flex justify-center md:basis-1/2 lg:basis-1/3">
              <ReviewCard {...review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute flex justify-between space-x-5 -bottom-10 left-[calc(50%-20px)] w-[40px]">
          <CarouselPrevious className="px-4 py-2 h-[40px] w-[140] bg-primary-green !text-white rounded-full hover:bg-primary-green-hover" />
          <CarouselNext className="px-4 py-2 h-[40px] w-[140] bg-primary-green !text-white rounded-full hover:bg-primary-green-hover" />
        </div>
      </Carousel>
    </section>
  );
};
