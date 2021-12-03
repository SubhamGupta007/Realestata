import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";

import Property from "../components/Property"


const Banner = ({ purpose, title2, title1, desc1, desc2, LinkName, ButtonText, imageUrl }) => (
  <>
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} height="300" width="500" alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
        <Button fontSize="xl">
          <Link href={LinkName}>{ButtonText}</Link>
        </Button>
      </Box>
    </Flex>


  </>
)
const Home = ({ propertiesForSale, propertiesForRent }) => {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <div>
      <Box>

        <Banner
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1="Exploring apartment,Villas,Home"
          desc2="and more"
          ButtonText="Exploring Renting"
          LinkName="/search?puchase=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"



        />
        <Flex flexWrap='wrap'>
          {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
        <Banner
          purpose="BUY A HOME"
          title1="Find , Buy & Own Your"
          title2="Everyone"
          desc1="Exploring apartment,Villas,Home"
          desc2="and more"
          ButtonText="Exploring Buying"
          LinkName="/search?puchase=for-sale"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"

        />

        <Flex flexWrap='wrap'>
          {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
      </Box>
    </div>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}



export default Home;