// app/components/Navbar.js

'use client'

import Link from 'next/link'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
// Import icons
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MdEmail, MdHome } from 'react-icons/md'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const Links = ['About']

const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={"/"+children.toLowerCase()}>
      {children}
    </Box>
  )
}

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link href={process.env.ROOT_URL} title="Home">
                <MdHome size={'1.75rem'} />
              </Link>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                <NavLink href='https://dankennedy.me/about'>About</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                aria-label='Avatar button'
                minW={0}>
                <Avatar
                  size={'sm'}
                  name={'Click for contact'}
                  src={
                    '/img/dan-simpsons_100x100.jpg'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem as={'a'} href={process.env.EMAIL}>
                    <MdEmail style={{marginRight:'1rem', display:'inline'}} />  Email
                </MenuItem> 
                <MenuItem as={'a'} href={process.env.LINKEDIN}>
                    <BiLogoLinkedin style={{marginRight:'1rem', display:'inline'}} /> LinkedIn
                </MenuItem>
                <MenuItem as={'a'} href={process.env.GITHUB}>
                    <BiLogoGithub style={{marginRight:'1rem', display:'inline'}} /> GitHub
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink id={link} key={link} as={'a'} href={"/"+link.toLowerCase()}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}