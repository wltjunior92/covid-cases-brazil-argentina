import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface TableBoxProps {
  children: ReactNode;
}

export function TableBox({ children }: TableBoxProps) {
  return (
    <Box
      maxH={300}
      w="100%"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#718096',
          borderRadius: '24px',
        },
      }}
    >
      {children}
    </Box>
  );
}