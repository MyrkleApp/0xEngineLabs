import { Flex } from "@chakra-ui/react"
import TestimonialCard from "./testimonial-card"
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

function TestimonialListMobile() {
  return (
    <Flex direction="column" gap={5}>
      {TESTIMONIALS.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          quote={testimonial.quote}
          author={testimonial.author}
          role={testimonial.role}
          image={testimonial.image}
        />
      ))}
    </Flex>
  )
}

export default TestimonialListMobile