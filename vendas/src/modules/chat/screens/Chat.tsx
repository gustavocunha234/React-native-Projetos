import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { CreateChatContainer, MessageContainer, MessageText } from "../styles/ChatStyle"

const data = [
  {
    id: 1,
    from: 2,
    message: "Olá tudo bem com voce",
    createdAt: "2023-10-22 20:51:00"
  },
  {
    id: 2,
    from: 1,
    message: "Olá tudo bem sim, e você? Estive pensando e vou poder ficar com o cachorro sim, poderia me passar mais informações?",
    createdAt: "2023-10-22 20:51:00"
  },
  {
    id: 3,
    from: 2,
    message: "Ah certo! Ele tem um pouco mais de 5 meses, foi resgatado no parque municipal e está com a saude em dia.",
    createdAt: "2023-10-22 20:51:00"
  },
  {
    id: 4,
    from: 2,
    message: "Se realmente tiver interesse a gente pode marcar para você visita-lo.",
    createdAt: "2023-10-22 20:51:00"
  },
  {
    id: 5,
    from: 1,
    message: "Qualquer coisa estou disponivel!",
    createdAt: "2023-10-22 20:51:00"
  }

]



const Chat = () => {


  return (
    <CreateChatContainer>
      {data.map(item => (
        <MessageContainer me={item.from === 1}>
          <MessageText>{item.message}</MessageText>
        </MessageContainer>
      ))}

      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Digite sua mensagem..."
          value={"a"}
          onChangeText={() => { }}
        />
        <TouchableOpacity onPress={() => console.log("a")}>
          <View style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </CreateChatContainer>
  )
}

const styles = StyleSheet.create({
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,

  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: 'white',

  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  sendButtonText: {
    color: 'white',
  },
})

export default Chat