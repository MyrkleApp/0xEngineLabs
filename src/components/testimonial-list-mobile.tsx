import { Flex } from "@chakra-ui/react"
import TestimonialCard from "./testimonial-card"

const TESTIMONIALS = [
  {
    quote: "Every product from 0xEngine Labs shows strong reliable and long term thinking that consistently turn complex blockchain ideas into actually usable products.",
    author: "Derah",
    role: "Visual Designer"
  },
  {
    quote: "Working with 0xEngine Labs feels like working with engineers who understand both users and infrastructure; They don't just build protocols, they build systems that people can actually use.",
    author: "Chibuzor",
    role: "CEO - Monieka.app"
  },
  {
    quote: "0xEngine Labs is led by founders who have shipped, failed, learned, and now build with clarity and conviction.",
    author: "Camzy",
    role: "Music Producer"
  },
  {
    quote: "0xEngine Labs delivers production-ready blockchain infrastructure with a clear focus on scale, security, and compliance.",
    author: "Princewill",
    role: "CTO, egcgllc.com"
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
        />
      ))}
    </Flex>
  )
}

export default TestimonialListMobile