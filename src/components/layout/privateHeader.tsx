import { Flex, Image, Link } from "@chakra-ui/react";

export default function PrivateHeader() {
  return (
    <>
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        h={"5%"}
        w={"100%"}
        bg={"#00713C"}
        borderBottom={"1px" + " solid" + " #33D388"}
      >
        <Link href="/home" >
          <Image
            boxSize="150px"
            src="/img/Logo_NOTA_NFE_02.svg"
            alt="Logo"
            objectFit="cover"
            cursor={"pointer"}
              />
        </Link>
      </Flex>
    </>     
  );
}