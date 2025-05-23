import { Container, Heading, Text } from "@chakra-ui/react"

import DeleteConfirmation from "./DeleteConfirmation"

const DeleteAccount = () => {
  return (
    <Container maxW="full">
      <Heading size="sm" py={4}>
        Eliminar Cuenta
      </Heading>
      <Text>
      Se eliminara su cuenta y todos los datos asociados a ella. Esta accion no puede deshacerse.
      </Text>
      <DeleteConfirmation />
    </Container>
  )
}
export default DeleteAccount
