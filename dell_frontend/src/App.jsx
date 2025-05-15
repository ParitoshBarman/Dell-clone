import './App.css'
import { Badge, Box, Button, Image } from "@chakra-ui/react"
import {
  Avatar,
  Card,
  HStack,
  Stack,
  Strong,
  Text, CheckboxCard, For
} from "@chakra-ui/react"
import { LuCheck, LuX } from "react-icons/lu"



function App() {


  return (
    <>
      <h1>Dell</h1>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
      <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
        <Image
          objectFit="cover"
          maxW="200px"
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />
        <Box>
          <Card.Body>
            <Card.Title mb="2">The perfect latte</Card.Title>
            <Card.Description>
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Card.Description>
            <HStack mt="4">
              <Badge>Hot</Badge>
              <Badge>Caffeine</Badge>
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Button>Buy Latte</Button>
          </Card.Footer>
        </Box>
      </Card.Root>
      <Card.Root width="320px">
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar.Root>
              <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
              <Avatar.Fallback name="Nate Foss" />
            </Avatar.Root>
            <Stack gap="0">
              <Text fontWeight="semibold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description>
            <Strong color="fg">Nate Foss </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button variant="subtle" colorPalette="red" flex="1">
            <LuX />
            Decline
          </Button>
          <Button variant="subtle" colorPalette="blue" flex="1">
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Stack maxW="320px">
        <For each={["subtle", "surface", "outline"]}>
          {(variant) => (
            <CheckboxCard.Root
              defaultChecked
              key={variant}
              variant={variant}
              colorPalette="teal"
            >
              <CheckboxCard.HiddenInput />
              <CheckboxCard.Control>
                <CheckboxCard.Label>Checkbox {variant}</CheckboxCard.Label>
                <CheckboxCard.Indicator />
              </CheckboxCard.Control>
            </CheckboxCard.Root>
          )}
        </For>
      </Stack>
    </>
  )
}

export default App
