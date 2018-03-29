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
    width: 80,
    height: 30,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1.5
  },
  back:{
    position:'absolute',
    top: 100,
    left: 24
  },
  input:{
    width: 80,
    fontSize: 20,
    borderColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1.5    
  }
})

export default style
