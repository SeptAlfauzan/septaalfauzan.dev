import CardProject from "@/widgets/card_project";
import DragDropImg from "@/widgets/drag_drop_img";
import Navigations from "@/widgets/navigations";
import SimpleSidebar from "@/widgets/sidebar";
import {
  Box,
  Card,
  CardBody,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Image,
  Button,
} from "@chakra-ui/react";
import { TemplateDashboard } from "../../template/dashboard_template";

const DasboardProjects = () => (
  <TemplateDashboard>
    <Stack spacing={3}>
      <Input
        variant="unstyled"
        placeholder="Title Project Here.."
        fontSize={"2xl"}
      />
      <DragDropImg />
      <Textarea variant="unstyled" placeholder="Project Desc Here.." />
      <DragDropImg />
    </Stack>
  </TemplateDashboard>
);

export default DasboardProjects;
