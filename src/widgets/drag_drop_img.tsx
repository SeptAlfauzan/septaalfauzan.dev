import { Box, Image, Input, Text } from "@chakra-ui/react";

export default function DragDropImg() {
  return (
    <Box pos={"relative"} borderRadius={16} overflow={"clip"}>
      <Image
        fit={"cover"}
        alt="image banner"
        height={750}
        width={1500}
        src="gibbresh.png"
        fallbackSrc="https://placehold.co/1500x750/EEE/31343C"
      />
      <Input
        type="file"
        name="banner_img"
        id=""
        height={748}
        pos="absolute"
        top={0}
        left={0}
        right={0}
        opacity={0}
      />
      <Text
        pos="absolute"
        fontSize={"2xl"}
        fontWeight={"bold"}
        top={"20%"}
        textAlign={"center"}
        w={"100%"}
      >
        Click or Drag Image to this Area
      </Text>
    </Box>
  );
}
