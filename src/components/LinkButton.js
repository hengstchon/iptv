import { Button } from '@chakra-ui/react'

const LinkButton = ({ src, title }) => {
  return (
    <a href={src}>
      <Button colorScheme="teal" size="xs">
        {title.trim().toUpperCase()}
      </Button>
    </a>
  )
}

export default LinkButton
