import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "../../../shared/components/text/Text";
import { AnimalType } from "../../../shared/types/AnimalType";

export type AnimalNavigationProp = NativeStackNavigationProp<Record<string, DetailParams>>;

export interface DetailParams {

    animal: AnimalType;

}

const Detail = () => {

    const { params } = useRoute<RouteProp<Record<string, DetailParams>>>();
    const { animal } = params;
    const modifiedImageUrl = animal.image && animal.image.replace("localhost", "10.0.0.130");

    const handleCallPress = () => {
        const phoneUrl = `tel:${"31975139269"}`;
        Linking.openURL(phoneUrl)
            .catch(err => console.error('Erro ao tentar fazer a ligação', err));
    };

    return (
        <View style={styles.container}>
            {/* <Text>{JSON.stringify(animal)}</Text> */}
            {animal.image && modifiedImageUrl.startsWith('http') ? (
                <Image style={styles.image} source={{ uri: modifiedImageUrl }} />
            ) : (
                <Image style={styles.image} source={require("../../../assets/images/Pug.png")} width={150} height={50} />
            )}
            <View style={{ padding: 8 }}>
                <Text style={styles.animalName}>{animal.name}</Text>
                <Text style={styles.animalSpecies}>Especie • {animal.species}</Text>
                <Text>Raça • {animal.race}</Text>
                <Text>Encontrado no endereço • {animal.address}</Text>
                <Text>Motivo • {animal.reason}</Text>
                <TouchableOpacity style={styles.contactButton} onPress={handleCallPress}>
                    <Text style={styles.buttonText}>Entrar em contato</Text>
                </TouchableOpacity>
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