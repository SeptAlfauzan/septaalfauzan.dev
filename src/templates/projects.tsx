import Scene from "@/widgets/threejs/scene";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Projects() {
  return (
    <Box
      display={"flex"}
      position={"relative"}
      flexDir={"row"}
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text
        fontSize={"8xl"}
        fontWeight={800}
        position={"absolute"}
        // width={"100%"}
        // textAlign={"center"}
        zIndex={-1}
      >
        PROJECTS
      </Text>
      <Box
        alignSelf={"center"}
        display={"flex"}
        flexDir={"column"}
        width={"80%"}
        height={"100vh"}
        justifyContent={"center"}
        // alignContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Box
          flex={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
          width={{ base: "100vw", md: "auto" }}
          padding={{ base: 0, md: 24 }}
          position={"relative"}
          //   background={"black"}
        >
          <Text
            fontSize={"4xl"}
            fontWeight={800}
            position={"absolute"}
            zIndex={2}
            top={20}
            left={0}
            // width={"100%"}
            // textAlign={"center"}
          >
            App Name
          </Text>
          <Box
            fontSize={"l"}
            fontWeight={400}
            position={"absolute"}
            zIndex={2}
            bottom={20}
            right={-38}
            width={264}
            textAlign={"right"}
          >
            <Text color={"darkgray"}>short description</Text>
            <Text>
              lorem ipsum dolor emet blabblabbla lorem ipsum dolor emet
              blabblabbla
            </Text>
          </Box>
          <IconButton icon={<MdChevronLeft />} aria-label={""} isRound={true} />
          <Scene />
          <IconButton
            icon={<MdChevronRight />}
            aria-label={""}
            isRound={true}
          />
        </Box>
        {/* <Box flex={1} backgroundColor={"grey"}>
          asdasd
        </Box> */}
      </Box>
    </Box>
  );
}
