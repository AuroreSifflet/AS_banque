import { StyleSheet, Text, View, Button, TextInput, ScrollView, } from 'react-native'
import React, { useState } from "react"

import { Formik } from 'formik';
import { Picker } from "@react-native-picker/picker"

import * as yup from 'yup';
import moment from 'moment';
import DatePicker from '../component/DateTimePicker';

//yup validation Schema
const RevenuValidationSchema = yup.object().shape({
  nom: yup.string().max(20, 'doit être en 30 caractère ou moins').required('Veuillez indiquer un nom'),
  prenom: yup.string().required('Veuillez indiquer un prénom'),
  montant: yup.number().required('Veuillez indiquer un montant'),
 /*  date: yup.date().toLocaleDateString().default(function () {
    return new Date();
  }), */
  date:  yup.string().required('Veuillez indiquer une date'),
 /*  date:yup.date()
  .nullable()
  .transform((curr, orig) => orig === '' ? null : curr)
  .required('Veuillez indiquer une date valide'), */
  //Indique que null est une valeur valide pour le schéma. Sans nullable(), null est traité comme un type différent et échouera aux vérifications isType().
  
  categorie: yup.string().required('Veuillez indiquer une catégorie'),
  commentaire: yup.string(),

});
//type RevenuScreen = InferType<typeof RevenuValidationSchema>;

const RevenuScreen = () => {



  return (
    <Formik
    initialValues={{ nom: '', prenom: '', montant: '', date: '', categorie: '', commentaire: '', }}
    validateOnMount={true}
    validationSchema={RevenuValidationSchema}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
     <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <Text style={styles.textLabel}>Bénéficiaire</Text>
        <TextInput
          onChangeText={handleChange('nom')}
          onBlur={handleBlur('nom')}
          value={values.nom}
          placeholder={'Nom'}
        />
          {errors.nom && touched.nom  && 
          <Text style={styles.textErrors}>{errors.nom}</Text>}
      
        <TextInput
          onChangeText={handleChange('prenom')}
          onBlur={handleBlur('prenom')}
          value={values.prenom}
          placeholder={'Prenom'}
        />
          {errors.prenom && touched.prenom  && 
          <Text style={styles.textErrors}>{errors.prenom}</Text>}

        <Text style={styles.textLabel}>Montant</Text>
        <TextInput
          onChangeText={handleChange('montant')}
          onBlur={handleBlur('montant')}
          value={values.montant}
          placeholder={'Montant'}
          keyboardType="numeric"
        />
        {errors.montant && touched.montant  && 
          <Text style={styles.textErrors}>{errors.montant}</Text>}

        <Text style={styles.textLabel}>Date</Text>
         <DatePicker date={values.date} onChangeDate={handleChange('date')} />
         {errors.date && touched.date  && 
          <Text style={styles.textErrors}>{errors.date}</Text>}
         {/*MIKA  <DatePicker date={birthDate} onChangeDate={setBirthDate} error={errors.birthDate} /> */}

        <Text style={styles.textLabel}>Catégorie</Text>
          <Picker
                selectedValue={values.categorie}
                onValueChange={handleChange('categorie')}>

                <Picker.Item label="Catégorie" value="" enabled={false} />
                <Picker.Item label="Alimentaire" value="alimentaire" />
                <Picker.Item label="Factures" value="factures" />
                <Picker.Item label="Transport" value="transport" />
                <Picker.Item label="Logement" value="logement" />
                <Picker.Item label="Santé" value="sante" />
                <Picker.Item label="Divertissement" value="divertissement" />
                <Picker.Item label="Vacances" value="vacances" />
                <Picker.Item label="Shopping" value="shopping" />
                <Picker.Item label="Autres" value="autres" />
               
            </Picker>
            {errors.categorie && touched.categorie  && 
          <Text style={styles.textErrors}>{errors.categorie}</Text>}

        <Text style={styles.textLabel}>Commentaire</Text>
        <TextInput
          onChangeText={handleChange('commentaire')}
          onBlur={handleBlur('commentaire')}
          value={values.commentaire}
          placeholder={'Commentaire'}
        />
         {errors.commentaire && touched.commentaire  && 
          <Text style={styles.textErrors}>{errors.commentaire}</Text>}
        <Button /* disabled={!isValid} */ onPress={() => handleSubmit()} title="Enregistrer" />
      </ScrollView>
      </View> 
    )}
  </Formik>
  )
}

export default RevenuScreen

const styles = StyleSheet.create({
  scroll:{
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flex: 1,
    backgroundColor: "red",
    
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height:30,
  },
  textLabel:{
 fontWeight: "bold",
  },
  textErrors: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
  }

});