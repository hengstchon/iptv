import Head from 'next/head'
import data from '../../data/data.json'
import Card from '../components/Card'
import { Stack, HStack, VStack } from '@chakra-ui/react'

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
        <VStack spacing="24px">
          {data.slice(0, 10).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </VStack>
      </div>
    </div>
  )
}