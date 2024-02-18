import { View, Text, TextInput, Button, Pressable } from 'react-native';

import { useAddition } from '@/hooks/useAddition';

export default function Calculator() {

    const { addition, onChange, onAddition } = useAddition()

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10, gap: 10, backgroundColor: "black" }}>
            <Text style={{ color: "white", fontSize: 40, fontWeight: "bold", textAlign: "center", marginBottom: 20}}>A simple Calculator where you only can addition🫠</Text>
            <View style={{ display: "flex", alignItems: "center" }}>
                <Text style={{ color: "white" }}>Enter the first number</Text>
                <TextInput
                    keyboardType="number-pad"
                    placeholder='0'
                    onChangeText={(text) => onChange("firstNumber", text)}
                    style={{ width: 100, backgroundColor: "gray", borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}
                />
            </View>

            <View style={{ display: "flex", alignItems: "center" }}>
                <Text style={{ color: "white" }}>Enter the second number</Text>
                <TextInput
                    keyboardType="number-pad"
                    placeholder='0'
                    onChangeText={(tex) => onChange("secondNumber", tex)}
                    style={{ width: 100, backgroundColor: "gray", borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }}
                />
            </View>

            <Pressable onPress={onAddition}>
                <Text
                    style={{ width: 100, borderRadius: 5, backgroundColor: "#007AFF", padding: 5, textAlign: "center", color: "white" }}

                >SUM</Text>
            </Pressable>

            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Result: {addition}</Text>

        </View>
    );
}
