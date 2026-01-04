import React, { useEffect, useState } from 'react';
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Terminal from './components/Terminal';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import RepoInfoBox from './components/RepoInfoBox';

const Home = () => {
  const [navBarTop, setNavBarTop] = useState('2vh');
  const [showRepoBoxes, setShowRepoBoxes] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the NavigationBar top position based on scroll position
      if (scrollY > window.innerHeight * 0.05) {
        setNavBarTop('122vh');
      } else {
        setNavBarTop('2vh');
      }

      // Detect when the section with the repo boxes is in the viewport
      const repoSection = document.getElementById('repo-section');
      if (repoSection) {
        const rect = repoSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setShowRepoBoxes(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const bgParallaxEffect = () => {
      const maxParallaxStrength = 100;
      const smoothness = 0.08;
      const body = document.querySelector('body');
      const bg = document.getElementById('space');

      body.addEventListener('mousemove', (event) => {
        const parallaxX = (event.clientX / window.innerWidth - 0.5) * maxParallaxStrength;
        const parallaxY = (event.clientY / window.innerHeight - 0.5) * maxParallaxStrength;
        bg.style.backgroundPosition = `${(50 + parallaxX) * smoothness}% ${(50 + parallaxY) * smoothness}%`;
      });
    };

    bgParallaxEffect();
  }, []);

  return (
    <Box>
      <LeftBar top={navBarTop} />
      <RightBar top={navBarTop} />
      <Box
        paddingTop={{ base: '10vh', md: '0'}}
        // paddingX={{ base: '40px', md: '30'}}
        id="space"
        bgImage="url('./space-kurz.png')"
        bgSize="115%"
        bgAttachment="fixed"
        height="100vh"
        zIndex="-1"
        width="100%"
        display="flex"
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        rowGap="10px"
        columnGap="25vh"
        paddingBottom="10vh"
      >
        <Terminal />
        <Image
          src="./formal.jpg"
          bgSize="120%"
          display={{ base: 'none', md: 'block' }}
          width={{ base: '40vw', md: '35vh' }}
          height={{ base: '40vw', md: '35vh' }}
          border="1px solid white"
          borderRadius="15px"
          objectFit="cover"
        />
      </Box>
      <Image position="absolute" top={{ base: '90vh', md: '70vh' }} src="./clouds.png" width="100%" zIndex="3" />
      <Box
        position="absolute"
        top="100vh"
        width="100%"
        minHeight={{ base: 'auto', md: '120vh' }}
        bgGradient="linear(to-b, #483C6C, #5b6078)"
        color="white"
        display="flex"
        flexDir={{ base: 'column', md: 'row' }}
        columnGap="100px"
        justifyContent="center"
        id="repo-section"
        paddingX={{ base: '5%', md: '0' }}
        paddingY={{ base: '15vh', md: '40vh' }}
        alignItems={{ base: 'center', md: 'start' }}
        rowGap={{ base: '30px', md: '25px' }}
        paddingBottom={{ base: '10vh', md: '40vh' }}
      >
        <Box maxWidth={{ base: '90%', md: '40%' }} fontFamily="Source Code Pro" display="flex" flexDir="column" textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" color="#f28fad" mb="4">
            OPEN-SOURCE
          </Text>
          <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="#d9e0ee" mb="4">
            my open-source projects
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8" color="#cdd6f4">
            i love open-source work; they are the foundation of many high-level projects. here's some i've worked on.
          </Text>
          <Box position="relative" display={{ base: 'none', md: 'flex' }}>
            <Image position="absolute" src="./blob3.png" width="25vh" top="3vh" borderRadius="10px" />
            <Image position="absolute" src="./blob4.png" width="25vh" left="25%" top="15vh" borderRadius="10px" />
            <Image position="absolute" src="./blob2.png" width="25vh" left="50%" top="-2vh" borderRadius="10px" />
          </Box>
        </Box>
        {showRepoBoxes && (
          <SimpleGrid
            columns={{ base: 1, md: 1 }}
            spacing={{ base: '4', md: '6' }}
            px={{ base: '0', md: '8' }}
            fontFamily="system-ui"
          >
            <RepoInfoBox repoName="nendaiki" username="ethanloh8" />
            <RepoInfoBox repoName="Planify" username="ethanloh8" animationDelay="0.25" />
            <RepoInfoBox repoName="ncmpcpp-icat" username="ethanloh8" animationDelay="0.5" />
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default Home;
