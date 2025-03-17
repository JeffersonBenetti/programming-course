import api from './api.js'

export async function getMovies(){
    const { data: { results } } = await api.get('/movie/popular')

    return results[0]
}

export async function getTopMovies(){
    const { data: { results } } = await api.get('/movie/top_rated')

    return results
}

export async function getSeries(){
    const { data: { results } } = await api.get('/tv/top_rated')

    return results
}

export async function getTopSeries(){
    const { data: { results } } = await api.get('/tv/popular')

    return results
}

export async function getPopularArt(){
    const { data: { results } } = await api.get('/person/popular')

    return results
}

export async function getMovieVideos(movieId){
    const { data: { results } } = await api.get(`/movie/${movieId}/vídeos`)

    return results[0]
}