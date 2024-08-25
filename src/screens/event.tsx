import React, { useRef } from 'react';
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

function EventScreen({ navigation, route }: { navigation: any, route: any }) {
  const { titleName } = route.params;
  const { date } = route.params;
  const { id } = route.params;
  const scrollViewRef = useRef<ScrollView>(null);

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView
                ref={scrollViewRef}
                contentInsetAdjustmentBehavior="automatic"
            >
              <View style={styles.container}>
                {DATA.filter(item => item.id === id).map(item => (
                  <Image key={item.id} source={item.src} style={styles.image} />
                ))}

                <View style={styles.body}>
                    <Text style={styles.title}>{titleName}</Text>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.content}>
                      Lorem ipsum dolor sit amet consectetur. Commodo at vitae ac a enim sed. Sagittis id cursus habitant pellentesque elit placerat. Viverra commodo elementum faucibus aliquet malesuada quisque non. Blandit vitae id vel mi. Et dictumst mattis elit lectus duis imperdiet.
                    </Text>
                    <Text style={styles.subtitle}>
                     Credits:
                    </Text>
                    <Text style={styles.content}>
                      Lorem ipsum dolor sit amet consectetur. Senectus odio neque augue nulla nulla scelerisque sed quam. Mattis convallis lobortis leo adipiscing congue. Felis nam magna ullamcorper magna velit dui vel tellus.
                    </Text>
                    <Text style={styles.content}>
                      Lorem ipsum dolor sit amet consectetur. Tellus netus eu nunc purus semper dolor. Et urna habitant vitae eget risus enim morbi. Mattis velit mi adipiscing purus ante libero commodo ut at. Id venenatis tellus dolor id morbi viverra eget mus ac. In proin fusce.
                    </Text>
                    <Text style={styles.content}>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque eu morbi nulla duis morbi sed in arcu enim. Dignissim id et donec neque. Morbi etiam id et.
                    </Text>
                </View>

                <View style={styles.body}>
                  <Text style={styles.title}>Other Events</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {DATA.filter(item => item.id !== id).map(item => (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() => {
                          navigation.navigate('Event', {
                            id: item.id,
                            titleName: item.title,
                            date: item.date,
                          });
                          scrollViewRef.current?.scrollTo({ y: 0, animated: true });
                        }}
                      >
                        <View key={item.id} style={styles.card}>
                            <Image source={item.src} style={styles.image2} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
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
      backgroundColor: '#F4F5F5',
    },
    body: {
      maxHeight: '100%',
      width: '100%',
      paddingTop: 10,
      paddingHorizontal: 20,
      marginBottom: 20,
      backgroundColor: 'white',
    },
    title: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 8,
      marginBottom: 4,
    },
    date: {
      fontSize: 14,
      fontWeight: 'medium',
      marginBottom: 20,
    },
    content: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 21,
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '600',
    },
    image: {
      height: 240,
      maxWidth: '100%',
      borderRadius: 5,
      resizeMode: 'cover',
    },
    card: {
      width: 300,
      marginRight: 20,
    },
    image2: {
      height: 180,
      maxWidth: '100%',
      borderRadius: 5,
      resizeMode: 'cover',
    },
});

export default EventScreen;
