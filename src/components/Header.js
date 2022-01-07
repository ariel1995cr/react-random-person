import React from "react";
import { Button, Box, Flex, Heading, Spacer } from "@chakra-ui/react"

const Header = () => {
    return(
        <Flex bg="blue.500">
            <Spacer />
            <Box p='2'>
                <Heading color={"white"} size='lg'>Random Person React</Heading>
            </Box>
            <Spacer />
        </Flex>
    )
}

export default Header;