import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  body:{
    marginRight:35,
    marginLeft: 35,
    marginBottom: 48
  },
  ctn:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    minWidth: 80,
    minHeight: 30,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1.5
  },
  input:{
    margin: 10,
    width: 80,
    fontSize: 20,
    borderColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1.5    
  }
})

export default style
