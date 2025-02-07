import useCrypto from "@/hooks/useCrypto";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";

export default function Index() {
  const { encrypt } = useCrypto();
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const handleEncryption = () => {
    const encrypted = encrypt(text, key);
    Alert.alert("Encrypted Text", encrypted, [
      {
        text: "Copy",
        onPress: async () => await Clipboard.setStringAsync(encrypted),
      },
      { text: "OK" },
    ]);
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
          placeholder="Enter text"
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
