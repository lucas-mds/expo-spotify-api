export default (navigation) =>
  navigation.addListener('beforeRemove', (e) => {
    e.preventDefault();
  });