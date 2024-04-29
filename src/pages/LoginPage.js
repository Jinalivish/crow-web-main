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
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useState } from 'react'; 

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
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
              <Text fontSize="4xl" fontFamily="work sans" color="black" marginBottom="40px">Login</Text>
          <VStack spacing="5px">
              <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type='email' placeholder='Enter your email' />
                  {/* {!isError ? (
                      <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                      </FormHelperText>
                  ) : (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                  )} */}
              </FormControl>
              <FormControl isRequired>
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
              
              <Button
                  colorScheme='blue'
                  width="100%"
                  marginTop={15}
              >
                  Login
              </Button>
              <Button
                  variant="solid"
                  colorScheme='red'
                  width="100%"
                  onClick={() => {
                      setEmail("guest@example.com");
                      setPassword("123456");
                  }}
              >
                  Get Guest User Credentials
              </Button>
          </VStack>
      </Box>
      </Container>
    </div>
  )
}

export default LoginPage