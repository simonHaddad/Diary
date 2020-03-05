import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import Icon from 'react-native-vector-icons/Feather';

const IndexScreen = ({ navigation }) => {

    useEffect(() => {
        getBlogPost();
        const listener = navigation.addListener('didFocus', () => {
            getBlogPost();
            return () => {
                listener.remove();
            };
        });
    }, []);

    const { state, getBlogPost, deleteBlogPost } = useContext(Context);
    return (
        <View >
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Icon style={styles.icon} name='trash-2' />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}


            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('create')}>
            <Icon name='plus' size={25} style={styles.rightHeaderIcon} />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 15,
        borderWidth: 1,
        margin: 5,
        borderRadius: 3
    }, title: {
        fontSize: 18,
        margin: 5,
        paddingHorizontal: 10
    }, icon: {
        fontSize: 24,
        margin: 5,
        paddingHorizontal: 10
    }, rightHeaderIcon: {
        marginRight: 20
    }
});

export default IndexScreen;
