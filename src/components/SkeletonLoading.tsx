import { Flex, Skeleton, VStack } from "@chakra-ui/react";

export function SkeletonLoading() {
  return (
    <VStack>
      <Skeleton h="20px" w="70%" alignSelf="center" />
      <Flex w="100%" justifyContent="space-between" paddingX="6" >
        <Skeleton h="30px" w="130px" />
        <Skeleton h="30px" w="80px" />
      </Flex>
      <Skeleton h="2px" w="100%" />
      <Flex w="100%" justifyContent="space-between" paddingX="6" >
        <Skeleton h="30px" w="120px" />
        <Skeleton h="30px" w="80px" />
      </Flex>
      <Skeleton h="2px" w="100%" />
      <Flex w="100%" justifyContent="space-between" paddingX="6" >
        <Skeleton h="30px" w="130px" />
        <Skeleton h="30px" w="80px" />
      </Flex>
      <Skeleton h="2px" w="100%" />
      <Flex w="100%" justifyContent="space-between" paddingX="6" >
        <Skeleton h="30px" w="120px" />
        <Skeleton h="30px" w="80px" />
      </Flex>
      <Skeleton h="2px" w="100%" />
      <Flex w="100%" justifyContent="space-between" paddingX="6" >
        <Skeleton h="30px" w="120px" />
        <Skeleton h="30px" w="80px" />
      </Flex>
    </VStack>
  );
}