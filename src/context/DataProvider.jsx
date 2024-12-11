import React, { useEffect, useState } from 'react';
import { DataContext } from './DataContext';

const DataProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [locations, setLocations] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const urls = [
                    'https://rickandmortyapi.com/api/character',
                    'https://rickandmortyapi.com/api/location',
                    'https://rickandmortyapi.com/api/episode'
                ];
                const responses = await Promise.all(urls.map(url => fetch(url)));
                const [charactersData, locationsData, episodesData] = await Promise.all(responses.map(response => response.json()));
                
                setCharacters(charactersData.results);
                setLocations(locationsData.results);
                setEpisodes(episodesData.results);
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAll();
    }, []);

    return (
        <DataContext value={{ characters, locations, episodes, loading }}>
            {children}
        </DataContext>
    );
};

export default DataProvider;