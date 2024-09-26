import { Text, SafeAreaView, View, Image, TextInput} from 'react-native';
import {useState} from 'react';
import mascara from './components/css/estilo';

export default function App() {

  // variáveis para exibir o nome
  const [nome, setBox1] = useState('');
  const [nomeExibido, setNome] = useState('');

  // variaveis placa
  const [placa, setBox2] = useState('');
  const [placaExibida, setPlaca] = useState('');

  // variaveis carro
  const [carro, setBox3] = useState('');
  const [carroExibido, setCarro] = useState('');

  // variaveis estadia
  const [dias, setBox4] = useState('');
  const [diasExibidos, setDias] = useState('');

  // variaveis preço
  const [diaria, setBox5] = useState('');
  const [diariaExibida, setDiaria] = useState('');

  const [semdescontoExibido, setSemDesconto] = useState('');
  const [comdescontoExibido, setComDesconto] = useState('');

  function calcular() {
    /* var total = parseFloat(box3)/parseFloat(box2)*parseFloat(box2);
    alert(total); */
    setNome(nome);
    setPlaca(placa);
    setCarro(carro);
    setDias(dias);
    setDiaria(diaria);
    var total = diaria*dias;
    setSemDesconto(total);
    if (total > 150) {
      setComDesconto(total - (total*0.10));
    } else {
      setComDesconto(total);
    }
  }
  function limpar() {
    setBox1('');
    setNome('');
    setBox2('');
    setPlaca('');
    setBox3('');
    setCarro('');
    setBox4('');
    setDias('');
    setBox5('');
    setDiaria('');
    setSemDesconto('');
    setComDesconto('');
  }
  function sair() {
    alert('Obrigado, volte sempre!');
  }

  return (
    <SafeAreaView style={mascara.container}>
      <Image source={require('./img/estacionamento.jpeg')} style={mascara.image}/>
      <Text style={mascara.titles}> Dados do cliente </Text>
      <View style={mascara.cxprincipal}>
        <TextInput
          style={mascara.input1}
          placeholder="Digite o nome do cliente"
          keyboardType="numeric"
          value={nome}
          onChangeText={setBox1}
        />
        <View style={mascara.cx1}>
          <TextInput
            style={mascara.input2}
            placeholder="Placa"
            keyboardType="numeric"
            value={placa}
            onChangeText={setBox2}
          />
          <TextInput
            style={mascara.input3}
            placeholder="Carro"
            keyboardType="numeric"
            value={carro}
            onChangeText={setBox3}
          />
        </View>
        <View style={mascara.span}>
          <TextInput
            style={mascara.input4}
            placeholder="Quantos Dias"
            keyboardType="numeric"
            value={dias}
            onChangeText={setBox4}
          />
          <TextInput
            style={mascara.input5}
            placeholder="Valor da diária"
            keyboardType="numeric"
            value={diaria}
            onChangeText={setBox5}
          />
        </View>
      </View>
      <Text style={mascara.titles}> Resumo </Text>
      <View style={mascara.section}>
        <Text style={mascara.results}> Nome: {nomeExibido} </Text>
        <Text style={mascara.results}> Placa: {placaExibida} </Text>
        <Text style={mascara.results}> Carro: {carroExibido} </Text>
        <Text style={mascara.results}> Vai ficar {diasExibidos} dia(s) </Text>
        <Text style={mascara.results}> Valor sem desconto: R${semdescontoExibido} </Text>
        <Text style={mascara.results}> Valor total com desconto: R${comdescontoExibido} </Text>
      </View>
      <View >
        <Text onPress={calcular} style={mascara.buttons}> Calcular </Text>
        <Text onPress={limpar} style={mascara.buttons}> Limpar</Text>
        <Text onPress={sair} style={mascara.buttons}> Sair </Text>
      </View>
    </SafeAreaView>
  );
}