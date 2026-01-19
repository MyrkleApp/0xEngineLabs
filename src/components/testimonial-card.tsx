import { Box, Flex, Text, Em } from "@chakra-ui/react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image: StaticImageData;
}

function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <Box
      pt={[0, null, null, "110px"]}
      h="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        pos="relative"
        w={["100%", null, null, "450px"]}
        h="100%"
        bg="#282828"
        p={[8, null, null, 16]}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex
          justify="center"
          align="center"
          w={["80px", null, null, "220px"]}
          aspectRatio={1}
          bg="#535353"
          pos="absolute"
          top={["30px", null, null, "-110px"]}
          left={["30px", null, null, "-110px"]}
          borderRadius="25px"
          boxShadow="10px 10px 10px rgba(41, 39, 39, 0.81)"
        >
          <Box w={["50%"]} aspectRatio={0.7} pos="relative">
            <Image src={image} alt={author} fill />
          </Box>
        </Flex>
        <Box flex="1" display="flex" flexDirection="column" justifyContent="space-between">
          <Box>
            <Text textAlign="right" fontSize={["6xl", null, null, "8xl"]} mb={4}>
              <Em>&quot;</Em>
            </Text>
            <Text mb={6} lineHeight="1.6" fontSize={["sm", null, null, "md"]}>
              {quote}
            </Text>
          </Box>
          <Text textAlign="right" fontSize="xs" color="#999" mt="auto">
            {author}
            {role && (
              <>
                <br />
                {role}
              </>
            )}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default TestimonialCard;
