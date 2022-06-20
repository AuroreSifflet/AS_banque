import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import dataCard from "../js/data.json";

type UserPickerProps = {
    selectedValue: string;
    onValueChange: (setNewUser: string) => void,
    nameUser: string[];
   };

const UserPicker = ({ selectedValue, onValueChange, nameUser}: UserPickerProps) => {

return (
    <View>
        {/* Ce Picker un select avec les noms d'user avec affichage de leurs données avec flatlist */}
        <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)} >

            {
                nameUser.map((element, index) => {
                return(<Picker.Item label={nameUser[index]} value={dataCard[index].user} key={index} />);
                })
            }
              
            {/* Au lieu de noter en dur :
                <Picker.Item label={nameUser[0]} value={dataCard[0].user} />
                <Picker.Item label={nameUser[1]} value={dataCard[1].user}  />
                <Picker.Item label={nameUser[2]} value={dataCard[2].user}  />
                <Picker.Item label={nameUser[3]} value={dataCard[3].user} />
                <Picker.Item label={nameUser[4]} value={dataCard[4].user} />
                <Picker.Item label={nameUser[5]} value={dataCard[5].user} />
                <Picker.Item label={nameUser[6]} value={dataCard[6].user} />
                <Picker.Item label={nameUser[7]} value={dataCard[7].user} />
                <Picker.Item label={nameUser[8]} value={dataCard[8].user} />
                <Picker.Item label={nameUser[9]} value={dataCard[9].user} /> */}
            
        </Picker>
    </View>

    )
}

export default UserPicker

const styles = StyleSheet.create({})

