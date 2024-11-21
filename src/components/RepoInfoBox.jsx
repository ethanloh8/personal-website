import React, { useEffect, useState } from 'react';
import { Box, Text, Link, Spinner, Flex, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { FaStar, FaCodeBranch } from 'react-icons/fa'
import axios from 'axios';
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const RepoInfoBox = ({ repoName, username, animationDelay = 0 }) => {
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
        setRepoData(response.data);
      } catch (error) {
        console.error(`Error fetching data for ${repoName}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [repoName, username]);

  if (loading) {
    return (
      <Box
        width="340px"
        height="180px"
        bgGradient="linear(to-b, #483C6C, #5b6078)"
        borderRadius="md"
        boxShadow="lg"
        p="4"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner color="white" />
      </Box>
    );
  }

  if (!repoData) {
    return (
      <Box
        width="340px"
        height="180px"
        bgGradient="linear(to-b, #483C6C, #5b6078)"
        borderRadius="md"
        boxShadow="lg"
        p="4"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <Text>Error loading repository data.</Text>
      </Box>
    );
  }

  return (
    <Link
      width="340px"
      bg="linear-gradient(145deg, #292c35, #383c46)"
      color="#f5e0dc"
      borderRadius="10px"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.4)"
      padding="20px"
      transition="transform 0.2s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.6)',
      }}
      href={repoData.html_url}
      isExternal
      opacity="0"
      animation={`${fadeIn} ease-in 0.5s ${animationDelay}s forwards`}
    >
      <Text fontSize="lg" fontWeight="bold" isTruncated>
        {repoData.full_name}
      </Text>
      <Text mt="2" fontSize="sm" color="#a6adc8" noOfLines={2}>
        {repoData.description || 'No description provided.'}
      </Text>
      <Flex mt="4" justifyContent="space-between" alignItems="center">
        <Tag size="md" bg="#f2cdcd" color="#3c3836">
          <TagLeftIcon as={FaStar} />
          <TagLabel>{repoData.stargazers_count}</TagLabel>
        </Tag>
        <Tag size="md" bg="#d9e0ee" color="#6c7086">
          <TagLeftIcon as={FaCodeBranch} />
          <TagLabel>{repoData.forks_count}</TagLabel>
        </Tag>
        {repoData.language && (
          <Tag size="md" bg="#cba6f7" color="#302d41">
            {repoData.language}
          </Tag>
        )}
      </Flex>
    </Link>
  );
};

export default RepoInfoBox;
