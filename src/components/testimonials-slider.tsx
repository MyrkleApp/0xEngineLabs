"use client";

import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import TestimonialCard from "./testimonial-card";
import blackMale from "@/assets/images/black-male.svg";
import gay from "@/assets/images/gay.svg";
import hispanic from "@/assets/images/hispanic.svg";
import lesbian from "@/assets/images/lesbian.svg";

const TESTIMONIALS = [
  {
    quote: "Every product from 0xEngine Labs shows strong reliable and long term thinking that consistently turn complex blockchain ideas into actually usable products.",
    author: "Derah",
    role: "Visual Designer",
    image: blackMale
  },
  {
    quote: "Working with 0xEngine Labs feels like working with engineers who understand both users and infrastructure; They don't just build protocols, they build systems that people can actually use.",
    author: "Chibuzor",
    role: "CEO - Monieka.app",
    image: lesbian
  },
  {
    quote: "0xEngine Labs is led by founders who have shipped, failed, learned, and now build with clarity and conviction.",
    author: "Camzy",
    role: "Music Producer",
    image: hispanic
  },
  {
    quote: "0xEngine Labs delivers production-ready blockchain infrastructure with a clear focus on scale, security, and compliance.",
    author: "Princewill",
    role: "CTO, egcgllc.com",
    image: gay
  }
];

function TestimonialsSlider() {
  // const [slideIndex, setSlideIndex] = useState(0);

  // const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear"
    // slidesToScroll: 1,
    // beforeChange: (_: any, next: number) => setSlideIndex(next),
    // nextArrow: (
    //   <IconButton
    //     bg="#000000"
    //     size="2xl"
    //     h="60px"
    //     borderRadius="50%"
    //     _hover={{ bg: "#000000" }}
    //     _active={{ bg: "#000000" }}
    //   />
    // ),
  };

  return (
    <Box css={{
      ".slick-slider": {
        height: "1900px",
      },
      ".slick-slide": {
        height: "100%",
      },
      ".slick-slide > div": {
        height: "100%",
      }
    }}>
      {/* <style>{`
        .slick-slider {
          height: 700px;
        }
        .slick-slide {
          height: 100%;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style> */}
      <Slider
        // ref={(slider) => {
        //   sliderRef.current = slider;
        // }}
        {...settings}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            image={testimonial.image}
          />
        ))}
      </Slider>
    </Box>
  );
}

export default TestimonialsSlider;
