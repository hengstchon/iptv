import { Box, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react'
import LinkButton from './LinkButton'

const Card = ({ item }) => {
  return (
    <Box w="400px" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading size="md">{item.name}</Heading>

      <ButtonGroup mt={4} variant="outline" spacing="2">
        <LinkButton title="mpv" src={`mpv://${item.source}`} />
        <LinkButton title="vlc" src={`vlc://${item.source}`} />
        <LinkButton title="Potplayer" src={`potplayer://${item.source}`} />
      </ButtonGroup>

      <ButtonGroup mt={2} variant="outline" spacing="2">
        <LinkButton title="nplayer" src={`nplayer-${item.source}`} />
        <LinkButton
          title="mx player"
          src={`intent:${item.source}#Intent;package=com.mxtech.videoplayer.pro;S.title=${item.name};end`}
        />
        <LinkButton title="copy link" src={`mpv://${item.source}`} />
      </ButtonGroup>
    </Box>
  )
}

export default Card
