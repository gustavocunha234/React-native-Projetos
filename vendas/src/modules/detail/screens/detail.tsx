import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Alert, Image, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "../../../shared/components/text/Text";
import { AnimalType } from "../../../shared/types/AnimalType";

export type AnimalNavigationProp = NativeStackNavigationProp<Record<string, DetailParams>>;

export interface DetailParams {

    animal: AnimalType;

}

const Detail = () => {

    const { params } = useRoute<RouteProp<Record<string, DetailParams>>>();
    const { animal } = params;
    const modifiedImageUrl = animal.image && animal.image.replace("localhost", "10.0.2.2");
    
    const clickEventListener = () => {
        Alert.alert('Sucesso', 'animall lindão')
      }

    const handleCallPress = () => {
        const phoneUrl = `tel:${"31975139269"}`;
        Linking.openURL(phoneUrl)
            .catch(err => console.error('Erro ao tentar fazer a ligação', err));
    };

    return (
        <View style={styles.container}>
            {/* <Text>{JSON.stringify(animal)}</Text> */}
            {animal.image && modifiedImageUrl.startsWith('http') ? (
                <Image style={styles.productImg} source={{ uri: modifiedImageUrl }} />
            ) : (
                <Image style={styles.productImg} source={require("../../../assets/images/Pug.png")} width={150} height={50} />
            )}
             <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
          <Text style={styles.name}>{animal.name}</Text>
          <Text style={styles.price}>{animal.species}</Text>
          <Image style={{maxHeight: 20, maxWidth: 20}} source={animal.gender === 'macho' ? require("../../../assets/images/macho.png") : require("../../../assets/images/femea.png") }/>
          <Text>Encontrado no endereço • {animal.address}</Text>
          <Text>Motivo • {animal.reason}</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec
          </Text>
        </View>
        <View style={styles.contentSize}>
          <TouchableOpacity style={styles.btnSize}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>XL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={() => clickEventListener()}>
            <Text style={styles.shareButtonText}>Entrar em contato</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    image: {
        width: "100%",
        height: 180,
        objectFit: "fill"
    },
    name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
    },
    productImg:{
        width: 200,
        height: 200,
        marginLeft: 100,
        marginTop: 15,
        borderRadius: 100,
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: 'green',
        fontWeight: 'bold',
      },
      description: {
        textAlign: 'center',
        marginTop: 10,
        color: '#696969',
      },
      star: {
        width: 40,
        height: 40,
      },
      btnColor: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginHorizontal: 3,
      },
      btnSize: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: '#778899',
        borderWidth: 1,
        marginHorizontal: 3,
        backgroundColor: 'white',
    
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      starContainer: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20,
      },
      contentColors: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20,
      },
      contentSize: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20,
      },
      separator: {
        height: 2,
        backgroundColor: '#eeeeee',
        marginTop: 20,
        marginHorizontal: 30,
      },
      shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#00BFFF',
      },
      shareButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
      },
      addToCarContainer: {
        marginHorizontal: 30,
      },

    animalName: {
        fontSize: 38,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center"
    },
    animalSpecies: {},
    contactButton: {
        width: "100%",
        height: 50,
        borderRadius: 3,
        backgroundColor: "#7159c1",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
        marginTop: 24
    },
    buttonText: {
        color: "#FFF",
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})

export default Detail;