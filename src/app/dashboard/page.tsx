import { Card, CardBody, SimpleGrid, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { TemplateDashboard } from "./template/dashboard_template";

const Dasboard = () => (
  <TemplateDashboard>
    <SimpleGrid columns={3} spacingX="16px" spacingY="20px">
      <NextLink href="/dashboard/projects" passHref>
        <Card
          bgColor={"#f0fcf0"}
          _hover={{
            bgColor: "#e6f5fa",
          }}
        >
          <CardBody>
            <Text fontSize="5xl">12</Text>
            <Text color={"gray.500"}>Total projects</Text>
          </CardBody>
        </Card>
      </NextLink>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  </TemplateDashboard>
);

export default Dasboard;
