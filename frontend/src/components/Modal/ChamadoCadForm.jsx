import { AddIcon } from '@chakra-ui/icons'

const {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  IconButton
} = require('@chakra-ui/react')

function ChamadoCadForm() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        ml={'.5rem'}
        onClick={onOpen}
        colorScheme="teal"
        aria-label="Call Fred"
        size="lg"
        icon={<AddIcon />}
      />
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ChamadoCadForm
