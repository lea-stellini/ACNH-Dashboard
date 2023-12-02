import axios from 'axios'; 

type Data = {
    name: string,
    imgUrl: string,
}

export async function getArts() {
    try{
        const response = await axios.get('https://api.nookipedia.com/nh/art', {
            headers: {
                'X-API-KEY': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch(error) {
        console.error('Erreur lors de la requête:', error);
        return error
    }
}

export async function postInMuseum(data : Data) {

    const art = {
        name: data.name,
        imgUrl: data.imgUrl,
    }

    try { 
        return await axios({
            method:'post',
            url: 'http://localhost:4000/api/arts',
            data: art,
        });
    } catch (err) {
        console.log(err);
        return { error: true, message: err.message };
    }
}

export async function getMuseum(){
    try{
        const response = await axios.get('http://localhost:4000/api/arts', {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch(error) {
        console.error('Erreur lors de la requête:', error);
        return error
    }
}