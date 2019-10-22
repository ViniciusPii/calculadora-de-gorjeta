import React, { useState } from 'react';
import styled from 'styled-components/native';

const Page = styled.View`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 30px;
  margin-top: 50px;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  font-size: 20px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const CalcButton = styled.Text`
  width: 80%;
  height: 50px;
  border-radius: 10px;
  background-color: #009;
  margin-top: 30px;
  text-align: center;
  line-height: 50px;
`;

const TextButton = styled.Text`
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
`;

const ResultArea = styled.View`
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 10px;
`;

const ResultItemTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 20px;
  padding: 15px;
`;

export default () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);

  const calc = () => {
    let nBill = parseFloat(bill);

    if (nBill) {
      setTip(nBill * 0.1);
    } else {
      alert("Digite o valor da conta!!!");
    }
  }

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu sua conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />
      <CalcButton onPress={calc}>
        <TextButton>Calcular</TextButton>
      </CalcButton>
      {tip > 0 &&
        <ResultArea>
          <ResultItemTitle>Valor da conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>
          <ResultItemTitle>Valor da gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)} (10%)</ResultItem>
          <ResultItemTitle>Valor total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }
    </Page>
  );
}
