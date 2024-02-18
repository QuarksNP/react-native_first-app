import { useTranslateNumbers } from '@/hooks/useTranslateNumbers';
import { View, Text, TextInput } from 'react-native';

export default function NumberTranslate() {
  const { numberTransalted, handleTranslate } = useTranslateNumbers()

  console.log(numberTransalted)

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10, gap: 10, backgroundColor: "black" }}>
      <Text style={{ color: "white", fontSize: 40, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>Ok, this was more complicated but interesting👇</Text>

      <TextInput
        style={{ backgroundColor: "gray", borderWidth: 1, borderRadius: 5, padding: 5 }}

        placeholder='Enter a number...'
        onChangeText={text => handleTranslate(Number(text))} />

      <Text style={{color: "#007AFF", fontWeight: "bold"}}>{numberTransalted}</Text>
    </View>
  );
}
