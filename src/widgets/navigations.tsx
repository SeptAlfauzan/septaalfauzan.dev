"use client";

import { usePathname } from "next/navigation";
import { Box, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function Navigations() {
  const pathname = usePathname();
  const pathUrls = pathname.split("/").filter((e) => e != "");

  return (
    <Box my={2}>
      <Flex align={"center"}>
        <BiChevronRight />
        {pathUrls.map((url, i) => (
          <NextLink
            key={i}
            href={`/${pathUrls.slice(0, i + 1).join("/")}`}
            passHref
          >
            <Text
              color={"cyan.600"}
              _hover={{
                color: "blue",
              }}
            >
              /{url}
            </Text>
          </NextLink>
        ))}
      </Flex>
    </Box>
  );
}
