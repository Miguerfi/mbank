import { View, FlatList, Text, TouchableOpacity } from "react-native";
import style from "./style";

export default function ListHorizontalAnouncements({ data }) {
  return (
    <View>
      <FlatList
        style={style.flatlist}
        data={data}
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        horizontal
        snapToAlignment="start"
        scrollEventThrottle={60}
        decelerationRate="fast"
        overScrollMode="auto"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={style.container}>
              <Text style={style.infos}>
                <Text style={style.destaque}>{item.destaque}</Text>
                {item.info}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
