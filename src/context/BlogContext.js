import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogPost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        // case 'add_blogPost':
        //     return [...state, {
        //         title: action.payload.title,
        //         content: action.payload.content,
        //         id: Math.floor(Math.random() * 99999)
        //     }]
        case 'edit_blogPost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost
            })
        case 'get_blogposts':
            return action.payload;
        default:
            return state;
    }
};

const getBlogPost = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        //response.data === [{}, {}, {}, ...]
        dispatch({ type: 'get_blogposts', payload: response.data })
    };
};


const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content });
        // dispatch({ type: 'add_blogPost', payload: { title, content } });
        if (callback()) {
            callback();
        };
    }
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`blogposts/${id}`, { title, content })
        dispatch({ type: 'edit_blogPost', payload: { id, title, content } });
        callback();
    }

}

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogPost', payload: id })
    }
};

export const { Context, Provider } = createDataContext(blogReducer,
    {
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
        getBlogPost
    }, []);