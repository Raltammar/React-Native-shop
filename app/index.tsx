import BoatItem from "@/components/boatitem";
import boats from "@/data/boats";
import { Image, Text, View } from "react-native";

export default function Index() {
  let boat1 = boats[0];
  let boat2 = boats[1];
  let boat3 = boats[2];
  let boat4 = boats[3];
  let boat5 = boats[5];
  return (
    <View
      style={{
        flex: 1,
        display: "flex",

        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          color: "blue",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        {" "}
        Company Name{" "}
      </Text>
      <Text style={{ color: "grey", fontSize: 20, marginBottom: 5 }}>
        {" "}
        your trustable boat agent
      </Text>
      <Image
        style={{ height: 150, width: 150 }}
        source={require("/Users/rashed/Desktop/development/phase3/day2/reactNativeShop/assets/images/shop logo.jpeg")}
      />

      {/* /* ********************************* the power of componants******************** */}
      <BoatItem
        name={boat1.name}
        factory={boat1.factory}
        price={boat1.price}
        image={boat1.image}
      />

      <BoatItem
        name={boat2.name}
        factory={boat2.factory}
        price={boat2.price}
        image={boat2.image}
      />
      <BoatItem
        name={boat3.name}
        factory={boat3.factory}
        price={boat3.price}
        image={boat3.image}
      />
      <BoatItem
        name={boat4.name}
        factory={boat4.factory}
        price={boat4.price}
        image={boat4.image}
      />

      {/* ***************************************** the power of componants******************** */}
    </View>
  );
}
