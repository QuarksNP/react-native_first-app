import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { Profile } from '@/components'
import profile_picture from "@/shared/assets/images/my-pic.png"


export default function Home() {
  return (
    <View style={{
      backgroundColor: 'black', flex: 1, justifyContent: 'center', padding: 10, gap: 30
    }}
    >
      <Text style={{ color: "white", fontSize: 50, fontWeight: "bold" }}>Hi Dev! I'm Alberto Guzman </Text>
      <Text style={{ color: "white", opacity: .5 }}>
        Web developer with essential domain
        of React.js, JavaScript, HTML, CSS, Node.js and
        TypeScript. Passionate about technology and
        interested in the daily life of the latest
        trends and news in the sector. Experience
        in the development of dynamic web
        applications,
        responsive and accessible, using the best
        clean code, testing, and security practices.
        Having a command of English
        intermediate-advanced (b2) with the possibility
        of
        be able to communicate understandably in
        language
      </Text>
      
      <Profile>
        <Profile.Picture source={profile_picture} />
        <Profile.SocialNetwork
          title='Instagram' 
          href='https://www.instagram.com/alberto_gzb/' 
          icon={<AntDesign 
          name="instagram" 
          size={24} 
          color="white" />}
        />

        <Profile.SocialNetwork
         title='Github' 
         href='https://github.com/QuarksNP' 
         icon={<AntDesign 
         name='github' 
         size={24} 
         color="white" />} 
        />
      </Profile>
    </View>
  );
}
