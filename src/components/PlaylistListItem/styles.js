import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flexDirection: row;
  alignItems: center;
  marginTop: 10px; 
  marginBottom: 10px; 
`;

export const Content = styled.View`
  flex: 1;
  flexDirection: row;
  alignItems: center;
`;

export const TextContainer = styled.View`
  padding-left: 10px;
`;

export const PrimaryText = styled.Text`
  font-weight: bold;
  font-size: 16px;

`;

export const SecondaryText = styled.Text`
  font-size: 14px;
`;

export const DetailsText = styled.Text`
  margin-left: auto;
  font-size: 16px;
`;