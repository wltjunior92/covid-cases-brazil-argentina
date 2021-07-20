import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

interface CovidCases {
  month: Date;
  cases: number;
}

interface DataTableProps {
  selectedCountry: string;
  covidCasesList: CovidCases[]
}

export function DataTable({ selectedCountry, covidCasesList }: DataTableProps) {
  return (
    <Table variant="simple" colorScheme="blue" size="md">
      <TableCaption
        color="gray.200"
        placement="top"
      >
        Total de casos de COVID {`${selectedCountry === 'Brasil' ? 'no' : 'na'} ${selectedCountry}`}, agrupados por mês:
      </TableCaption>
      <Thead>
        <Tr>
          <Th color="white">
            Mês
          </Th>
          <Th isNumeric color="white">
            Total de casos
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {covidCasesList?.map((item, index) => (
          <Tr key={index}>
            <Td>
              {new Date(item.month).toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
              })}
            </Td>
            <Td isNumeric>
              {item.cases}
            </Td>
          </Tr>
        ))
        }
      </Tbody>
    </Table>
  );
}