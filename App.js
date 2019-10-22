import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

const Page = styled.View`
  align-items: center;
  flex: 1;
`;

const HeaderText = styled.Text`
  color: #646464;
  font-size: 25px;
  margin-top: 40px;
`;

const Input = styled.TextInput`
  background-color: #eee;
  border-radius: 10px;
  font-size: 18px;
  height: 50px;
  margin: 20px 0;
  padding: 10px;
  width: 80%;
`;

const Title = styled.Text`
  color: #646464;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PctArea = styled.View`
  flex-direction: row;
`;

const PctButton = styled.Text`
  background-color: #646464;
  border-radius: 10px;
  height: 40px;
  line-height: 50px;
  margin: 10px 10px 50px 10px;
  text-align: center;
  width: 40px;
`;

const PctTextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
`;

const ResultArea = styled.View`
  align-items: center;
  background-color: #eee;
  border-radius: 10px;
  justify-content: center;
  padding: 20px;
  width: 80%;
`;

const ResultItem = styled.View`
  flex-direction: row;
  padding: 5px;
`;

const ResultItemTitle = styled.Text`
  color: #646464;
  font-size: 18px;
  font-weight: bold;
`;

const ResultSubTitle = styled.Text`
  color: #808080;
  font-size: 18px;
  padding-left: 10px;
`;



export default () => {

  const [bill, setBill] = useState('');
  const [pct, setPct] = useState('');
  const [tip, setTip] = useState('');

  const calc = () => {
    let nBill = parseFloat(bill);

    if (nBill) {
      setTip((pct / 100) * nBill);
    }
  }

  const error = () => {
    if (bill == '' || bill == 0) {
      alert('bla');
    }
  }

  useEffect(() => {
    calc();
  }, [pct, bill]);

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu sua conta?"
        placeholderTextColor="#646464"
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />
      <Title>Porcentagem da Gorjeta</Title>
      <PctArea>
        <PctButton onPress={() => setPct(5)}><PctTextButton>5%</PctTextButton></PctButton>
        <PctButton onPress={() => setPct(10)}><PctTextButton>10%</PctTextButton></PctButton>
        <PctButton onPress={() => setPct(15)}><PctTextButton>15%</PctTextButton></PctButton>
        <PctButton onPress={() => setPct(20)}><PctTextButton>20%</PctTextButton></PctButton>
      </PctArea>
      {tip > 0 && bill != '' &&
        <ResultArea>
          <ResultItem>
            <ResultItemTitle>Valor da Conta:</ResultItemTitle>
            <ResultSubTitle>R$ {parseFloat(bill).toFixed(2)}</ResultSubTitle>
          </ResultItem>
          <ResultItem>
            <ResultItemTitle>Valor da Gorjeta:</ResultItemTitle>
            <ResultSubTitle>R$ {tip.toFixed(2)} ({`${pct}%`})</ResultSubTitle>
          </ResultItem>
          <ResultItem>
            <ResultItemTitle>Valor Total:</ResultItemTitle>
            <ResultSubTitle>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultSubTitle>
          </ResultItem>
        </ResultArea>
      }
    </Page>
  );
}
