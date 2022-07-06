import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea
} from '@chakra-ui/react'
import React from 'react'

const ChamadoCadForm = () => {
  return (
    <>
      {' '}
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
    </>
  )
}

export default ChamadoCadForm
