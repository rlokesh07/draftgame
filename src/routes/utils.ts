export function getTeamUrl(team:string){
    return `/logos/${team}.svg`;
}
const cache = new Map();
export async function get(fetch: typeof globalThis.fetch, team: string){
    
    const url = `https://draftgameassets.netlify.app/${team}.png`;
    const response = await fetch(url);

    if (cache.has(url)) {
        console.log('Cache hit');
        const blob = await cache.get(url).blob();
        return URL.createObjectURL(blob);

    }

    console.log('Cache miss');
    const blob = await response.blob();
    return URL.createObjectURL(blob);


}
