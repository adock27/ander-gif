// consumir una api 
export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=wHjZMsTDnOMfzrblI02Afgs0KVQVKGkx`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            //el signo de interrogacion es por si no sale 
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}