import boats from "@/data/boats";
import { Image, Text, View } from "react-native";

interface BoatItemProps {
  name: string;
  factory: string;
  price: string;
  image: string;
}

const BoatItem = ({ name, factory, price, image }: BoatItemProps) => {
  let boat = boats[0];

  return (
    <View
      style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "darkblue",
        padding: 10,

        width: "100%",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{ height: 150, width: 150 }}
      />
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
        <Text>{factory}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
};
export default BoatItem;
