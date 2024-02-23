export interface articles {
    source: {
        id: string,
        name: string
        },
        author: string,
        title: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string
    }

    export interface newsApi {
        status: string,
        totalResults: number,
        articles: articles[],
    }