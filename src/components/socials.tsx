import { HStack } from "@chakra-ui/react";
import LinkedInIcon from "./icons/linked-in";
import FacebookIcon from "./icons/facebook";
// import YoutubeIcon from "./icons/youtube";
// import InstagramIcon from "./icons/instagram";

function Socials() {
  return (
    <HStack fontSize="2xl" gap={6}>
      <a href="https://www.facebook.com/0xenginelabs" target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://www.linkedin.com/company/0xenginelabs/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
      {/* <a href="#">
        <YoutubeIcon />
      </a>
      <a href="#">
        <InstagramIcon />
      </a> */}
    </HStack>
  );
}

export default Socials;
