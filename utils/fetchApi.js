import axios from "axios";


export const baseUrl = "https://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
    const { data } = await axios.get((url),
        {
            headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': '30e2ea9404msh03f3f08c27c1ff8p164d31jsn22aaab60a3ab'
            }
        }
    )

    return data;
}