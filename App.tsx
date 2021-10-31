import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


//Definindo PROPs para o valor input e seu Use State
interface Valor_input {
  valor: string;
  onChangeValor: Dispatch<SetStateAction<string>>;
}

//Segmento da tela com o número binário e o circulo
function Binario({ valor, onChangeValor }: Valor_input) {

  const color_true = '#44d5cb'
  const color_false = '#ffffff'
  const [color1, setColor1] = useState(color_false);
  const [color2, setColor2] = useState(color_false);
  const [color3, setColor3] = useState(color_false);
  const [color4, setColor4] = useState(color_false);
  const [color5, setColor5] = useState(color_false);
  const [color6, setColor6] = useState(color_false);
  const [color7, setColor7] = useState(color_false);
  const [color8, setColor8] = useState(color_false);
  const [color9, setColor9] = useState(color_false);
  const [color10, setColor10] = useState(color_false);
  const [texto1, setTexto1] = useState('');
  const [texto2, setTexto2] = useState('');
  const [texto3, setTexto3] = useState('');
  const [texto4, setTexto4] = useState('');
  const [texto5, setTexto5] = useState('');
  const [texto6, setTexto6] = useState('');
  const [texto7, setTexto7] = useState('');
  const [texto8, setTexto8] = useState('');
  const [texto9, setTexto9] = useState('');
  const [texto10, setTexto10] = useState('');
  var num = 0;

  useEffect(() => {

    setTexto1('') , setColor1(color_false);
    setTexto2('') , setColor2(color_false);;
    setTexto3('') , setColor3(color_false);;
    setTexto4('') , setColor4(color_false);;
    setTexto5('') , setColor5(color_false);;
    setTexto6('') , setColor6(color_false);;
    setTexto7('') , setColor7(color_false);;
    setTexto8('') , setColor8(color_false);;
    setTexto9('') , setColor9(color_false);;
    setTexto10('') , setColor10(color_false);;
    var vetor = ['', '', '', '', '', '', '', '', '', ''];

    if (!!valor == true) { //Apenas quando tiver valor
      num = Number(valor);
      var bin = num.toString(2) //Converte para binário

      for (var i = 0; i < bin.length; i++) {
        vetor[i] = bin.substring(i, i + 1)  //Passar para o vetor
      }

      setTexto1(vetor[0]);
      setTexto2(vetor[1]);
      setTexto3(vetor[2]);
      setTexto4(vetor[3]);
      setTexto5(vetor[4]);
      setTexto6(vetor[5]);
      setTexto7(vetor[6]);
      setTexto8(vetor[7]);
      setTexto9(vetor[8]);
      setTexto10(vetor[9]);
      if (vetor[0] == '1') {
        setColor1(color_true);
      } else {
        setColor1(color_false);
      }
      if (vetor[1] == '1') {
        setColor2(color_true);
      } else {
        setColor2(color_false);
      }
      if (vetor[2] == '1') {
        setColor3(color_true);
      } else {
        setColor3(color_false);
      }
      if (vetor[3] == '1') {
        setColor4(color_true);
      } else {
        setColor4(color_false);
      }
      if (vetor[4] == '1') {
        setColor5(color_true);
      } else {
        setColor5(color_false);
      }
      if (vetor[5] == '1') {
        setColor6(color_true);
      } else {
        setColor6(color_false);
      }
      if (vetor[6] == '1') {
        setColor7(color_true);
      } else {
        setColor7(color_false);
      }
      if (vetor[7] == '1') {
        setColor8(color_true);
      } else {
        setColor8(color_false);
      }
      if (vetor[8] == '1') {
        setColor9(color_true);
      } else {
        setColor9(color_false);
      }
      if (vetor[9] == '1') {
        setColor10(color_true);
      } else {
        setColor10(color_false);
      }

    }


  }, [valor]);

  return (
    <View style={styles.container_binario}>
      <Text style={[styles.circle, { backgroundColor: color1 }]}></Text>
      <Text style={[styles.circle, { backgroundColor: color2 }]}></Text>
      <Text style={[styles.circle, { backgroundColor: color3 }]}></Text>
      <Text style={[styles.circle, { backgroundColor: color4 }]}></Text>
      <Text style={[styles.circle, { backgroundColor: color5 }]}></Text>
      <Text style={[styles.circle, { backgroundColor: color6 }]}></Text>
      <Text style={[styles.circle, { backgroundColor: color7 }]}></Text>
      <Text style={[styles.circle, { backgroundColor: color8 }]}></Text>
      <Text style={[styles.circle, { backgroundColor: color9 }]}></Text>
      <Text style={[styles.circle, { backgroundColor: color10 }]}></Text>
      <Text style={styles.number}>{texto1}</Text>
      <Text style={styles.number}>{texto2}</Text>
      <Text style={styles.number}>{texto3}</Text>
      <Text style={styles.number}>{texto4}</Text>
      <Text style={styles.number}>{texto5}</Text>
      <Text style={styles.number}>{texto6}</Text>
      <Text style={styles.number}>{texto7}</Text>
      <Text style={styles.number}>{texto8}</Text>
      <Text style={styles.number}>{texto9}</Text>
      <Text style={styles.number}>{texto10}</Text>
    </View>
  );
}

// Segmento de tela para input do valor para ser convertido
function Input({ valor, onChangeValor }: Valor_input) {

  return (
    <View style={styles.container_input}>
      <Text style={styles.texto}>Informe um valor:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeValor}
        value={valor}
        placeholder="0 - 1023"
        keyboardType="numeric"
        maxLength={4}
      />
    </View>
  );
}

// --------------------------------------------------------------------//
//                            Executar APP
// --------------------------------------------------------------------//

export default function App() {
  const [valor, onChangeValor] = React.useState<string>('')
  return (
    <View style={styles.container}>
      <Binario valor={valor} onChangeValor={onChangeValor} />
      <Input valor={valor} onChangeValor={onChangeValor} />
      <StatusBar style="auto" />
    </View>
  );
}

// --------------------------------------------------------------------//
//                            STYLES
// --------------------------------------------------------------------//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#f5f9eb',
    padding: 30,
  },
  container_binario: {
    backgroundColor: 'aliceblue',
    flexDirection: 'row',
    paddingTop: 70,
    paddingLeft: 10,
    paddingBottom: 80,
    borderWidth: 1,
    borderColor: '#20232a',
    flexWrap: "wrap",
  },
  container_input: {
    backgroundColor: '#ffffff',
    paddingTop: 50,
    paddingLeft: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: '#20232a',
    marginVertical: '1%',
  },
  circle: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 100 / 2,
    backgroundColor: '#ffffff',
    marginHorizontal: '1%',
  },
  number: {
    paddingLeft: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: '1%',
    marginRight: '3%',
    justifyContent: "space-evenly",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold"
  }
});






