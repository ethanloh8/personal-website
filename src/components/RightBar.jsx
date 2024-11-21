import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const slideLeft = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const RightBar = ({ top }) => {
  return (
    <Box
      position="absolute"
      key={top}
      right="0"
      top={top}
      display="flex"
      direction="column"
      height="auto"
      bgGradient="linear(to-r, rgba(180, 190, 254, 1), rgba(205, 214, 244, 1), rgba(186, 194, 222, 1))"
      borderTopLeftRadius="15px"
      borderBottomLeftRadius="15px"
      paddingX="15px"
      animation={`${slideLeft} 0.3s ease-in forwards`}
      transformOrigin="right center"
      fontFamily="system-ui"
      zIndex="4"
    >
      <Link
        href="https://www.linkedin.com/in/ethanloh8/"
        opacity={0}
        animation={`${fadeIn} 0.5s ease-in 0.25s forwards`}
        color="#363a4f"
        fontWeight="bold"
        _hover={{ color: "#0A66C2" }}
        isExternal
      >
        <Box display="flex" justifyContent="center" alignItems="center" padding="14px">
          <FaLinkedin size={24} />
        </Box>
      </Link>

      <Link
        href="https://github.com/ethanloh8"
        opacity={0}
        animation={`${fadeIn} 0.5s ease-in 0.25s forwards`}
        color="#363a4f"
        fontWeight="bold"
        _hover={{ color: "#0A66C2" }}
        isExternal
      >
        <Box display="flex" justifyContent="center" alignItems="center" padding="14px">
          <FaGithub size={24} />
        </Box>
      </Link>
    </Box>
  );
};

export default RightBar;
