import {
  Card,
  CardBody,
  CardHeader,
  Text,
  Image,
  CardFooter,
  Button,
  Box,
} from "@chakra-ui/react";
import { BiAddToQueue, BiLink, BiPlusCircle } from "react-icons/bi";
import NextLink from "next/link";

const CardProject = ({ createNew = false }: { createNew?: Boolean }) => {
  return (
    <Card
      maxW="md"
      overflow="hidden"
      bgColor={createNew ? "gray.300" : "white"}
    >
      {createNew ? (
        <CardBody
          alignSelf={"center"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Text mb={4} fontSize={"xl"}>
            Click button below to navigate create new project page
          </Text>
          <NextLink href="/dashboard/projects/create" passHref>
            <Button flex="1" rightIcon={<BiPlusCircle />}>
              Create New
            </Button>
          </NextLink>
        </CardBody>
      ) : (
        <Box>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
          <CardBody>
            <Text noOfLines={3} color={"gray.600"}>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>
          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button flex="1" variant="ghost" rightIcon={<BiLink />}>
              See more
            </Button>
          </CardFooter>
        </Box>
      )}
    </Card>
  );
};

export default CardProject;
