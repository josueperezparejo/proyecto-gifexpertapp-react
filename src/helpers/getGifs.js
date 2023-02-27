
export const getGifs = async (category) => {
    const apiKey = 'l5KTclQqLDFydh4T440o6eFfnJeGVRtA';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map((image) => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }));

    return gifs;
}