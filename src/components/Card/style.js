import { StyleSheet } from 'react-native';

/* Estilização do componente Card */

const styles = StyleSheet.create({
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF'
  },
  card_content: {
    marginTop: 20,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default styles;