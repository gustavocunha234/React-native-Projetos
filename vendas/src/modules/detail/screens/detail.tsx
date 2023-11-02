import React from "react";
import Text from "../../../shared/components/text/Text";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AnimalType } from "../../../shared/types/AnimalType";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AnimalNavigationProp = NativeStackNavigationProp<Record<string, DetailParams>>;

export interface DetailParams {

    animal: AnimalType;

}

const Detail = () =>{

    const {params} = useRoute<RouteProp<Record<string,DetailParams>>>();
    const {animal} = params;

    return (<Text>{animal.name}</Text>)


}

export default Detail;