import {StyleSheet} from 'react-native';

const mascara = StyleSheet.create({
  container: {
    width: 300,
    height: 100,
    backgroundColor: '#1177aa',
    flex: 1,
    alignSelf: 'center',
    paddingHorizontal:20,
  },
  image:{
    marginTop: 13,
    width: '94%',
    height: 80,
    backgroundColor: '#1177aa',
  },
  cxprincipal:{
       width:300,
       height:130,
       position:'relative',
  },
  cx1:{
    position:'relative',
  },
  titles:{
    margin: 10,
    alignSelf: 'center',
    fontSize: '1.5rem',
    color: '#003377',
  },
  input1:{
    width: '94%',
    height: 30,
    marginTop: '5px',
    textAlign: 'center',
    fontSize: 12,
    border: '1px solid #333',
    borderRadius: 4,
    color: '#fff',
  },
  input2:{
    width: '45%',
    height: 30,
    marginTop:10,
    marginLeft:5,
    textAlign: 'center',
    fontSize: '1rem',
    border: '1px solid #333',
    borderRadius: 4,
    color: '#fff',
    position:'absolute',
    
  },
  input3:{
    width: '45%',
    height: 30,
    marginTop:10,
    marginLeft:150,
    textAlign: 'center',
    fontSize: '1rem',
    border: '1px solid #333',
    borderRadius: 4,
    color: '#fff',
    position:'absolute',
  },
  input4:{
    width: '45%',
    height: 30,
    marginTop:50,
    marginLeft:5,
    textAlign: 'center',
    fontSize: '1rem',
    border: '1px solid #333',
    borderRadius: 4,
    color: '#fff',
    position:'absolute',
  },
  input5:{
    width: '45%',
    height: 30,
    marginTop:50,
    marginLeft:150,
    textAlign: 'center',
    fontSize: '1rem',
    border: '1px solid #333',
    borderRadius: 4,
    color: '#fff',
    position:'absolute',
  },




  results:{
    color: '#fff',
  },
  buttons:{
    width: 80,
    marginTop: 0,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#1177aa',
    padding: 7,
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 4,
  },
});

export default mascara;