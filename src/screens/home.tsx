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

function HomeScreen({ navigation }: { navigation: any }) {

    const data1 = {
      title: 'Indonesia Anime Convention 2024',
      date: '30 Oktober 2024',
    };

    const data2 = {
      title: 'Comic Frontier 2024',
      date: '30 Maret 2024',
    };

    const data3 = {
      title: 'Indonesia Comic Convention 2024',
      date: '9 - 10 November 2024',
    };

    const data4 = {
      title: 'Citra Semasa Piknik 2024',
      date: '31 Mei - 02 Juni 2024',
    };

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Event', {
                      id: 1,
                      titleName: data1.title,
                      date: data1.date,
                    });
                  }}
                >
                  <View style={styles.card}>
                      <Image source={require('../assets/events/img-1.png')} style={styles.image} />
                      <Text style={styles.title}>{data1.title}</Text>
                      <Text style={styles.date}>{data1.date}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Event', {
                      id: 2,
                      titleName: data2.title,
                      date: data2.date,
                    });
                  }}
                >
                  <View style={styles.card}>
                      <Image source={require('../assets/events/img-2.png')} style={styles.image} />
                      <Text style={styles.title}>{data2.title}</Text>
                      <Text style={styles.date}>{data2.date}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Event', {
                      id: 3,
                      titleName: data3.title,
                      date: data3.date,
                    });
                  }}
                >
                  <View style={styles.card}>
                      <Image source={require('../assets/events/img-3.png')} style={styles.image} />
                      <Text style={styles.title}>{data3.title}</Text>
                      <Text style={styles.date}>{data3.date}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Event', {
                      id: 4,
                      titleName: data4.title,
                      date: data4.date,
                    });
                  }}
                >
                  <View style={styles.card}>
                      <Image source={require('../assets/events/img-4.png')} style={styles.image} />
                      <Text style={styles.title}>{data4.title}</Text>
                      <Text style={styles.date}>{data4.date}</Text>
                  </View>
                </TouchableOpacity>
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
