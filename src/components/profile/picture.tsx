import { Image, type ImageProps } from "react-native"

interface PictureProps {
    source: ImageProps
}

export const Picture = ({ source }: PictureProps) => {
    return <Image source={source} style={{width: 50, height: 50, borderRadius: 50, objectFit: "cover"}}/>
}