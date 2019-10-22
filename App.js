import React, {useState} from 'react';
import styled from 'styled-components/native';

const Page = styled.View`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  margin-top: 50px;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

export default () => {

  const [bill, setBill] = useState('');

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu sua conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n=>setBill(n)}
      />
    </Page>
  );
}
