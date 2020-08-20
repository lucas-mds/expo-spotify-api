import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  width: ${({width}) => width || '80%'};
  height: 44px;
  margin: 20px;
  background-color: ${({ color }) => color};
  justify-content: center;
`;

export const ButtonText = styled.Text`
  align-self: center;
  color: white;
`;