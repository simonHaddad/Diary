import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogFormPost from '../components/BlogPostForm';


const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context);

    return <BlogFormPost 
    onSubmit={(title, content)=>{
        addBlogPost(title, content, ()=>navigation.navigate('index'))
    }}
    
    
    />;
};

const styles = StyleSheet.create({});

export default CreateScreen;
