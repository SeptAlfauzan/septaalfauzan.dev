import Navigations from "@/widgets/navigations";
import SimpleSidebar from "@/widgets/sidebar";
import { Box } from "@chakra-ui/react";

export function TemplateDashboard({ children }: { children: React.ReactNode }) {
  return (
    <Box h={"100%"}>
      <SimpleSidebar>
        <Navigations />
        {children}
      </SimpleSidebar>
    </Box>
  );
}
