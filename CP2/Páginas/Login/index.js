import { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        MEU APP
      </Text>
      <View style={{ width: '70%'}}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="password"
        />
      </View>
      <View style={styles.btnGroup}>
        <Button
          title="Login"
          onPress={login}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    backgroundColor: '#fdb',
    alignItems: 'center',
    flex: 1,
  },
  btnGroup: {
    gap: '20px',
    marginBottom: '30px',
    width: '50%'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#eee'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default HomeScreen;