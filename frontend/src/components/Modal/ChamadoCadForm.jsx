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

function ChamadoCadForm() {
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
          <ModalHeader>Cadastro de chamado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="area" isRequired>
              <FormLabel>Área</FormLabel>
              <Select placeholder="Selecione a área">
                <option>Manutenção</option>
                <option>Redes</option>
                <option>Suporte</option>
                <option>Secretaria</option>
                <option>Coordenação</option>
              </Select>
            </FormControl>
            <FormControl id="destinatario" isRequired>
              <FormLabel>Destinatário</FormLabel>
              <Select placeholder="Selecione o destinatário">
                <option>UINFOR-JQ</option>
              </Select>
            </FormControl>
            <FormControl id="tombo" isRequired>
              <FormLabel>Tombo</FormLabel>
              <Input placeholder="Informe o tombo do item" />
            </FormControl>
            <FormControl id="tombo" isRequired>
              <FormLabel>Descrição</FormLabel>
              <Textarea placeholder="Informe uma descrição do problema" />
            </FormControl>
          </ModalBody>

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

export default ChamadoCadForm
