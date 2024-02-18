import { View, Text } from 'react-native';

export default function Opinion() {
  return (
    <View style={{ backgroundColor: "black", flex: 1, alignItems: "center", justifyContent: 'center', gap: 10, padding: 10 }}>
      <Text style={{ color: "white", fontSize: 50, fontWeight: "bold" }}>React Native</Text>
      <Text style={{ color: "white" }}>
        Esta tarea me ha parecido novedosa, tengo grata experiencia
        con el desarrollo web (React, Nextjs, TailwindCSS). Aqui no
        tenemos tanta semantica como es con HTML lo cual me parece
        incomodo, ya que estoy aconstumbrado a la buena semantica, por
        el CEO. Pero en general, muy buena experiencia.</Text>
    </View>
  );
}
