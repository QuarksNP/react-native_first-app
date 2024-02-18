import { View } from 'react-native'
import { Picture } from './picture';
import { SocialNetwork } from './social-network';

interface ProfileProps {}

export const Profile = ({ children }: React.PropsWithChildren<ProfileProps>) => {
  return (
    <View style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 20, width: "100%"}}>
      {children}
    </View>
  );
}

Profile.Picture = Picture
Profile.SocialNetwork = SocialNetwork
