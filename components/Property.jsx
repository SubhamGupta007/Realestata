import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill, BsPhone, BsFlag, BsMap } from "react-icons/bs";
import { GoVerified } from "react-icons/go"
import millify from "millify";
import DefaultImage from "../assets/defimg.jpg"



const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID, phoneNumber, location } }) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} />
            </Box>
            <Box w='full'>
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                        <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size='sm' src={agency?.logo?.url} ></Avatar>
                    </Box>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='400px' color='blue.400'>
                    {rooms}
                    <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill /> | {location[0].name} <BsFlag />
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='200px' color='blue.400'>
                    {location[1].name} | {phoneNumber.mobile} <BsPhone />
                </Flex>
                {/* <Flex alignItems='center' p='1' justifyContent='space-between' w='400px' color='blue.400'>
                    {location[2].name} | {location[3].name}
                </Flex> */}
                <Text fontSize='lg'>
                    {title.length > 30 ? title.substring(0, 30) + '...' : title}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default Property;