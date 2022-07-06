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
  IconButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea
} = require('@chakra-ui/react')

function ModalButton({ children, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        ml={'.5rem'}
        onClick={onOpen}
        colorScheme="blue"
        aria-label="Call Fred"
        size="lg"
        icon={<AddIcon />}
      />

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="red" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="green">Cadastrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalButton
