

class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?apikey=81304e7424351407db76a4ba7e29d155`);
    }
}

export default MarvelService;