import React from 'react';
import {
  ThemeProvider,
  CSSReset,
  Avatar,
  Box,
  Flex,
  Button,
  Text
} from '@chakra-ui/core';
import { invite_id, name } from '../env';

const clickHandler = () => {
  window.location.href = `https://discord.gg/${invite_id}`;
};

const Index = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Flex align="center" justify="center" pt="12">
        <Box textAlign="center" p="10" borderRadius="md" boxShadow="lg">
          <Box my="20px">
            <Avatar size="xl" mb="10px" name={name} src="/static/avatar.png" />
            <Text fontSize="2xl">Join to</Text>
            <Text fontSize="3xl" fontWeight="bold">
              {name}
            </Text>
          </Box>

          {invite_id && (
            <Button
              variantColor="green"
              size="lg"
              rightIcon="arrow-forward"
              onClick={clickHandler}
            >
              Join
            </Button>
          )}
          {!invite_id && (
            <Button disabled variantColor="red" size="lg" rightIcon="warning">
              Invite closed
            </Button>
          )}
        </Box>
      </Flex>
    </ThemeProvider>
  );
};

export default Index;
