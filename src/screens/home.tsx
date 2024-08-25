import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Indonesia Anime Convention 2024',
    date: '30 Oktober 2024',
    src: require('../assets/events/img-1.png'),
  },
  {
    id: 2,
    title: 'Comic Frontier 2024',
    date: '30 Maret 2024',
    src: require('../assets/events/img-2.png'),
  },
  {
    id: 3,
    title: 'Indonesia Comic Convention 2024',
    date: '9 - 10 November 2024',
    src: require('../assets/events/img-3.png'),
  },
  {
    id: 4,
    title: 'Citra Semasa Piknik 2024',
    date: '31 Mei - 02 Juni 2024',
    src: require('../assets/events/img-4.png'),
  },
];

function HomeScreen({ navigation }: { navigation: any }) {

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
              <View style={styles.container}>
                {DATA.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      navigation.navigate('Event', {
                        id: item.id,
                        titleName: item.title,
                        date: item.date,
                      });
                    }}
                  >
                    <View style={styles.card}>
                        <Image source={item.src} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    container: {
      flex: 1,
      height: '100%',
      padding: 20,
    },
    card: {
      height: 230,
      width: '100%',
      marginBottom: 50,
    },
    title: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
      marginBottom: 4,
    },
    date: {
      fontSize: 14,
      fontWeight: 'medium',
    },
    image: {
      maxHeight: 200,
      maxWidth: '100%',
      borderRadius: 5,
    },
});

export default HomeScreen;
