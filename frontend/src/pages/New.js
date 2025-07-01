import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

import './New.css'

export default function New() {
    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [hashtags, setHashtags] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData();
        data.append('image', image);
        data.append('author', author);
        data.append('place', place);
        data.append('description', description);
        data.append('hashtags', hashtags);
        await api.post('/posts', data);
        navigate('/');
    };

    return (
        <form id="new-post" onSubmit={handleSubmit}>
            <input type="file" onChange={e => setImage(e.target.files[0])}/>
            <input 
                type="text"
                name="author"
                placeholder="Autor do Post"
                onChange={e => setAuthor(e.target.value)}
                value={author}
            />
            <input 
                type="text"
                name="place"
                placeholder="Local do Post"
                onChange={e => setPlace(e.target.value)}
                value={place}
            />
            <input 
                type="text"
                name="description"
                placeholder="Descricao do Post"
                onChange={e => setDescription(e.target.value)}
                value={description}
            />
            <input 
                type="text"
                name="hashtags"
                placeholder="Hashtags do Post"
                onChange={e => setHashtags(e.target.value)}
                value={hashtags}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}