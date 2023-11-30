import axios from 'axios';

export async function getArts() {
    try{
        const response = await axios.get('https://api.nookipedia.com/nh/art', {
            headers: {
                'X-API-KEY': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json',
            },
        });

        const result = response.data;
        console.log(result)
    } catch(error) {
        console.error('Erreur lors de la requête:', error);
    }
}