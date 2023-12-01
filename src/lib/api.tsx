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
        return result
    } catch(error) {
        console.error('Erreur lors de la requête:', error);
        return error
    }
}

// export async function postInMuseum(data) {
//     const art = {
//         name: data.name,
//         inMuseum: data.inMuseum,
//         hasFalse: data.has_fake,
//     };

//     const bodyFormData = new FormData();
//     bodyFormData.append('art', JSON.stringify(art));

//     try { 
//         return await axios({
//             method:'post',
//             url: 'http://localhost:4000/api/arts',
//             data: bodyFormData,
//         });
//     } catch (err) {
//         console.log(err);
//         return { error: true, message: err.message };
//     }
// }