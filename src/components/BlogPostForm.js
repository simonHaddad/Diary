import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValue }) => {
    const [title, setTitle] = useState(initialValue.title);
    const [content, setContent] = useState(initialValue.content);
    return (
        <View >
            <Text style={styles.label}>
                Enter Title:
            </Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input}
                placeholder='Please enter your title'
            />
            <Text style={styles.label}>
                Enter Content:
            </Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.input}
                placeholder='Please enter your content'
            />

            <Button
                title='Save Blog Post'
                onPress={() => { onSubmit(title, content) }}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValue: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        marginHorizontal: 15,
        borderRadius: 5
    }, label: {
        fontSize: 20,
        marginHorizontal: 15,
        marginVertical: 10
    }
});


export default BlogPostForm;