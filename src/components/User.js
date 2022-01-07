import React from "react";
import { Box, Image, Badge, } from "@chakra-ui/react"
const User = ({cell, email, gender, location, login, name, phone, picture, registered, dob}) => {       
    return (
        <div>
            <Box h='100%' maxW='container.xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image
                h='15em'
                w='100%'
                src={picture.large} />
                <Box
                textAlign='center'
                p='2'
                fontWeight='light'
                as='h4'
                lineHeight='tight'
                isTruncated
                >
                    <strong>{name.title}</strong> {name.last}, {name.first} <Badge variant='solid' >{dob.age}</Badge>
                </Box>
                <hr />
                <Box display='flex' textAlign='start' p="2" as='span' color='gray.600' fontSize='sm'>
                    {email}
                    <br />
                    {location.street.name} {location.street.number} - {location.state}
                    <br />
                    {location.country}
                    <br />
                    {phone.country}
                    <br />
                </Box>
            </Box>
        </div>
    )
}

export default User;