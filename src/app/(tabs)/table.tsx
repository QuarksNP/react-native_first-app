import { useTable } from '@/hooks/useTable';
import { View, Text, TextInput, Button } from 'react-native';

export default function MultiplicateTable() {
  const { table, onChange, onPress } = useTable()

  return (
    <View style={{ flex: 1, backgroundColor: "black", alignItems: "center", justifyContent: "center", gap: 10 }}>
      <Text style={{ color: "white", fontSize: 45, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>Our modern multiplicate table😌</Text>

      <TextInput style={{ backgroundColor: "gray", padding: 5 }} placeholder='Enter the number' onChangeText={text => onChange(Number(text))} />

      <Button title='Result' onPress={onPress} />

      <View>
        <Text style={{ color: "white" }}>{table}</Text>
      </View>
    </View>
  );
}
