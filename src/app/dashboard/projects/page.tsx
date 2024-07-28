import CardProject from "@/widgets/card_project";
import Navigations from "@/widgets/navigations";
import SimpleSidebar from "@/widgets/sidebar";
import { Box, Card, CardBody, SimpleGrid, Text } from "@chakra-ui/react";
import { TemplateDashboard } from "../template/dashboard_template";

const DasboardProjects = () => (
  <TemplateDashboard>
    <SimpleGrid columns={4} spacingX="16px" spacingY="20px">
      <CardProject createNew={true} />
      <CardProject />
      <CardProject />
      <CardProject />
    </SimpleGrid>
  </TemplateDashboard>
);

export default DasboardProjects;
