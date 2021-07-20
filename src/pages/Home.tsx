import { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Select,
  Text
} from "@chakra-ui/react";

import { api } from "../services/api";
import { parseResponseData } from "../utils/parseResponseData";
import { SkeletonLoading } from "../components/SkeletonLoading";
import { TableBox } from "../components/TableBox";
import { DataTable } from "../components/DataTable";

interface CovidCases {
  month: Date;
  cases: number;
}

export function Home() {
  const [isLoading, setIsloading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [covidCasesList, setCovidCasesList] = useState<CovidCases[]>([]);

  async function handleSelectCountry(value: string) {
    if (!value) {
      return
    }
    setIsloading(true);
    setSelectedCountry(value === 'brazil' ? 'Brasil' : 'Argentina')
    const { data } = await api.get(`${value}/status/confirmed`)
    const list = parseResponseData(data)

    setCovidCasesList(list)
    setIsloading(false);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <VStack spacing="6" w={500} bg="gray.700" padding="6" borderRadius="8px">
        <Select
          bg="gray.300"
          color="gray.700"
          placeholder="Selecione um país"
          size="sm"
          onChange={event => handleSelectCountry(event.target.value)}
        >
          <option value="brazil" style={{ color: '#2D3748' }}>Brasil</option>
          <option value="argentina" style={{ color: '#2D3748' }}>Argentina</option>
        </Select>

        <TableBox>
          {!isLoading && covidCasesList?.length === 0 ?
            <Box>
              <Text as="h3">Nenhum país selecionado</Text>
            </Box>
            :
            isLoading ?
              <SkeletonLoading />
              :
              <DataTable covidCasesList={covidCasesList} selectedCountry={selectedCountry} />
          }
        </TableBox>
      </VStack>
    </Flex>
  );
}