import { FormControl, FormLabel, Input,
    VStack, 
    InputGroup,
    InputRightElement,
    Button,
    Icon, 
    Box,
    Container,
    Text,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import './Login.css'

const SignupPage = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pic, setPic] = useState(undefined);
    const [loading, setLoading] = useState(false);
    // const toast = useToast();
    // const history = useHistory();

  return (
    <div>
      <Container maxW='xl' centerContent >
      <Box
      bg="white"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      // width="100%"
      padding="40px"
      borderRadius="lg"
      borderWidth="1px"
      marginBottom="20px"   
    >
      <Text fontSize="4xl" fontFamily="work sans" color="black" marginBottom="40px">Sign Up</Text>
        <VStack spacing="5px">
            <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                {/* {!isError ? (
                    <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )} */}
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={show?'text':'password'} placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement >
                        <Icon 
                            h="1.75rem"
                            size="sm"
                            cursor="pointer"
                            onClick={(e)=> setShow(!show)}
                        >
                            {show?<ViewOffIcon />: <ViewIcon />}
                        </Icon>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Confirm password</FormLabel>
                <InputGroup>
                    <Input type={show?'text':'password'} placeholder='Enter confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <InputRightElement>
                        <Icon h="1.75rem" size="sm" cursor="pointer" onClick={(e)=> setShow(!show)}>
                            {show?<ViewOffIcon />: <ViewIcon />}
                        </Icon>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Upload your picture</FormLabel>
                <Input 
                    height="100%"
                    type='file'
                    p="0"
                    margin="0"
                    accept='image/*'
                    defaultValue={pic || ''}
                />
            </FormControl>
            <Button
                colorScheme='blue'
                width="100%"
                marginTop={15}
                isLoading={loading}
            >
                Sign Up
            </Button>
        </VStack>
        </Box>
        </Container>
    </div>
  )
}

export default SignupPage;