import { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import style from "./style";
export default function ListHorizontalDiscoverMore({ data }) {

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
          <TouchableOpacity style={style.click}>
            <View style={style.container}>
              <View style={style.image}>{item.img}</View>
              <Text style={style.infos}>{item.info}</Text>
              <Text style={style.text}>{item.text}</Text>
              <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>{item.button}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
