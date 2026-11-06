import React from "react";
import { CardCarousel } from "@/components/ui/card-carousel";

const CardCarouselDemo = () => {
  const certifications = [
    {
      src: "/certs/aws-saa.svg",
      alt: "AWS Certified Solutions Architect – Associate (SAA-C03), 2026",
      link: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    {
      src: "/certs/aws-clf.svg",
      alt: "AWS Certified Cloud Practitioner (CLF-C02), 2026",
      link: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    {
      src: "/certs/oci-developer.svg",
      alt: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
      link: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    {
      src: "/certs/solvit-hackathon.svg",
      alt: "Solvit 2025 Hackathon Finalist – Canara Suraksha Top 100 among 4,000+ teams",
      link: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
    {
      src: "/certs/competitive-programming.svg",
      alt: "500+ Competitive Programming Problems Across Coding Platforms",
      link: "https://github.com/mishrarakesh-1902",
    },
    {
      src: "/certs/software-testing.svg",
      alt: "Software Testing Specialization – Coursera",
      link: "https://www.linkedin.com/in/rakesh-kumar-b64934284/",
    },
  ];

  // Cycled to 12 items for seamless Swiper 3D coverflow looping
  const carouselItems = [...certifications, ...certifications];

  return (
    <div className="w-full">
      <CardCarousel
        images={carouselItems}
        autoplayDelay={3500}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default CardCarouselDemo;
