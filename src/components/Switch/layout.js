import React from 'react';
import { Switch } from 'react-native';
import {
  Container,
  Label,
} from './styles';

export default function({
  name,
  value,
  label,
  onValueChange,
}) {
  return (
    <Container>
      <Label>{label}</Label>

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#5D4CC3" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={newValue => onValueChange(name, newValue)}
        value={value}
      />
  </Container>
  )

};