import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Home';


const App = () => {
  // const system = createSystem(defaultConfig, {
  //   theme: {
  //     tokens: {
  //       fonts: {
  //         heading: 'Source Code Pro, system-ui, sans-serif',
  //         body: 'Source Code Pro, system-ui, sans-serif',
  //       },
  //       colors: {
  //         brand: {
  //           light: '#F4DBD6',
  //           dark: '#363A4F',
  //           accent: '#A6DA95',
  //         },
  //       },
  //     }
  //   }
  // });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ])

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
};

export default App;
