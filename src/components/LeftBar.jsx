import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const slideRight = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const LeftBar = ({ top }) => {
  return (
    <Box
      position="absolute"
      key={top}
      top={top}
      display="flex"
      direction="column"
      height="50px"
      bgGradient="linear(to-r, #f38ba8, #eba0ac, #fab383)"
      borderTopRightRadius="15px"
      borderBottomRightRadius="15px"
      paddingX="7px"
      animation={`${slideRight} 0.3s ease-in forwards`}
      transformOrigin="left center"
      fontFamily="system-ui"
      zIndex="4"
    >
      <Link
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
        opacity={0}
        animation={`${fadeIn} 0.5s ease-in 0.25s forwards`}
        color="#363a4f"
        fontWeight="bold"
      >
        <Box display="flex" width="fit-content" height="50px" alignItems="center" _hover={{ bgColor: 'rgba(255, 255, 255, 0.2)' }} padding="14px">
          home
        </Box>
      </Link>
      <Link
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 1.2,
            behavior: 'smooth',
          });
        }}
        opacity={0}
        animation={`${fadeIn} 0.5s ease-in 0.25s forwards`}
        color="#363a4f"
        fontWeight="bold"
      >
        <Box display="flex" width="fit-content" height="50px" alignItems="center" _hover={{ bgColor: 'rgba(255, 255, 255, 0.2)' }} padding="14px">
          projects
        </Box>
      </Link>
      <Link href="mailto:ethanloh@berkeley.edu" opacity={0} animation={`${fadeIn} 0.5s ease-in 0.25s forwards`} color="#363a4f" fontWeight="bold">
        <Box display="flex" width="fit-content" height="50px" alignItems="center" _hover={{ bgColor: 'rgba(255, 255, 255, 0.2)' }} padding="14px">
          contact me
        </Box>
      </Link>
    </Box>
  );
};

export default LeftBar;
