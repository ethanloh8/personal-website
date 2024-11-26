import React, { useEffect, useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const caretBlink = keyframes`
  0% {
    border-right: 10px solid transparent;
  }
  50% {
    border-right: 10px solid #F4DBD6;
  }
  100% {
    border-right: 10px solid transparent;
  }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Terminal = () => {
  const typingRef = useRef(null);
  const outputs = [
    "linux enthusiast",
    "classical pianist",
    "frontend/backend engineer",
    "machine learning hobbyist",
    "living in vim",
    "decent chef",
    "minimalism is elegance",
  ];
  let outputIndex = 0;
  let charIndex = 0;
  let typingDirection = "typing";

  const typeNextCharacter = () => {
    const typing = typingRef.current;
    const speed = 88;
    const hang = 1000;
    if (typingDirection === "typing") {
      if (charIndex < outputs[outputIndex].length) {
        typing.textContent += outputs[outputIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeNextCharacter, speed);
      } else {
        typingDirection = "backspacing";
        setTimeout(typeNextCharacter, hang);
      }
    } else if (typingDirection === "backspacing") {
      if (typing.textContent.length > 0) {
        typing.textContent = typing.textContent.slice(0, -1);
        setTimeout(typeNextCharacter, speed);
      } else {
        typingDirection = "typing";
        charIndex = 0;

        if (outputIndex === outputs.length - 1) {
          outputIndex = 0;
        } else {
          outputIndex++;
        }

        setTimeout(typeNextCharacter, speed);
      }
    }
  };

  useEffect(() => {
    setTimeout(typeNextCharacter, 1200)
  }, []);

  return (
    <Box
      width="85vh"
      height="60vh"
      borderRadius="15px"
      border="1px solid white"
      bgImage="url('./macchiato_term.jpg')"
      bgSize="cover"
      fontFamily="Source Code Pro"
      display="flex"
      flexDir="column"
      rowGap="30px"
      justifyContent="center"
      alignItems="center"
    >
      <Text opacity="0" fontSize="38px" textAlign="center" color="#EED49F" fontWeight="bold" animation={`${fadeIn} ease-in 1s 0.5s forwards`}>
        hi, i'm ethan
      </Text>
      <Text opacity="0" fontSize="18px" textAlign="center" color="#8AADF4" fontWeight="bold" animation={`${fadeIn} ease-in 1s 1s forwards`}>
        eecs major @ uc berkeley
      </Text>
      <Text
        ref={typingRef}
        fontSize="18px"
        color="#A6DA95"
        position="relative"
        display="inline-block"
        _before={{
          content: '">  "',
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "left",
          color: "#ee99a0",
        }}
        _after={{
          content: '""',
          right: "-15px",
          top: 0,
          height: "80%",
          width: "10px",
          borderRight: "10px solid transparent",
          animation: `${caretBlink} 1s step-end infinite`,
        }}
      />
    </Box>
  );
};

export default Terminal;
