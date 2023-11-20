import fetch from 'cross-fetch';

export const SEARCH_API_URL = 'https://api.ydc-index.io/search';

export interface SearchResponse {
    hits: SearchHit[];
    latency: number;
}

export interface SearchHit {
    description: string;
    snippets: string[];
    title: string;
    url: string;
}

export async function search(query: string, key: string): Promise<SearchResponse> {
    const resp = await fetch(SEARCH_API_URL + '?query=' + encodeURIComponent(query), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': key
        },
    });

    if (!resp.ok) {
        try {
            const err = await resp.json();
            throw new Error('Failed to search: ' + err.message);
        } catch (_) {
            throw new Error('Failed to search: ' + resp.statusText);
        }
    }

    const json = await resp.json();

    if (!json) {
        throw new Error('Failed to search: ' + resp.statusText);
    }

    if (json.error) { // FOR SOME REASON, THE API RETURNS 200 OK WITH AN ERROR
        throw new Error('Failed to search: ' + json.error);
    }

    return json;
}