import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import Icon from 'react-native-vector-icons/Feather';

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View >
            <Text style={styles.title}>
                {blogPost.title}
            </Text>
            <Text style={styles.body}>
                {blogPost.content}
            </Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => <TouchableOpacity 
        style={{marginRight:20}}onPress={()=>navigation.navigate('edit',{ id: navigation.getParam('id') })}>
            <Icon name='edit' size={25} style={styles.rightHeaderIcon}/>
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,

    },
    body: {
        fontStyle: 'italic',
        fontSize: 18,
        padding: 15
    }
});

export default ShowScreen;
