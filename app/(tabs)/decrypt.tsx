import useCrypto from "@/hooks/useCrypto";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Decrypt() {
  const { decrypt } = useCrypto();
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const handleEncryption = () => {
    const encrypted = decrypt(text, key);
    Alert.alert("Decrypted Text", encrypted, [{ text: "OK" }]);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
            padding: 10,
          }}
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder="Enter Code"
        />
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
            padding: 10,
          }}
          value={key}
          onChangeText={(key) => setKey(key)}
          placeholder="Enter key"
        />
        <Button
          title="Submit"
          onPress={() => {
            handleEncryption();
          }}
        />
      </View>
    </View>
  );
}
