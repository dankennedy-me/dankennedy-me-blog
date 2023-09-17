'use client'

import { Badge, Box,Container, SimpleGrid, Text } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { MdOpenInNew } from "react-icons/md";

export default function PictureGrid({...props}){
    return(
        <Prose>
        <Container mt={'4rem'}>
            <Text as={'h2'} size={'2xl'}>Gallery</Text>
            <Badge variant={'outline'} colorScheme={'green'}>{props.count} images</Badge>
            <SimpleGrid minChildWidth='200px' spacing={10} alignItems={'center'}>
                {props.pics.map((pic) => (
                  <Box position={'relative'} as={'div'} height='200px' borderRadius={'15px'} backgroundImage={'https://cms.dankennedy.me/assets/'+pic.id} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                      <figure>
                       <figcaption style={{textAlign:'center', backgroundColor:'rgba(0,0,0,0.8)', color:'white', position:'absolute', bottom:'0'}}>
                          <a target='_blank' href={'https://cms.dankennedy.me/assets/'+pic.id}>{pic.title} <MdOpenInNew style={{display:'inline'}} /></a>
                       </figcaption>
                       </figure>
                  </Box>
                ))}
            </SimpleGrid>
        </Container>
        </Prose>
    )
}