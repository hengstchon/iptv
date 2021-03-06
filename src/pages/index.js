import { Container, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import data from '../../data/data.json'
import Card from '../components/Card'

export default function Home() {
  // console.log('data:', data)
  return (
    <div>
      <Head>
        <title>IPTV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Container maxW="xl" centerContent p={6}>
          <VStack spacing="24px">
            {data.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </VStack>
        </Container>
      </div>
    </div>
  )
}
