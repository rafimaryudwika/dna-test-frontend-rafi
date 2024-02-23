import qs from 'qs'

interface Props {
    type: "everything"|"top-headlines";
    query?: Record<string, any>;
    wrappedByKey?: string|"articles";
    wrappedByList?: boolean;
  }

export default async function fetchApi<T>({
    type,
    query,
    wrappedByKey,
    wrappedByList,
  }: Props): Promise<T> {

  
        const url = new URL(`https://newsapi.org/v2/${type}`);

        if (query) {
            const queryString = qs.stringify(

                    query,
                
                {
                encodeValuesOnly: true,
                }
            )
            url.search = queryString;
        }
        const res = await fetch(url.toString());
        let data = await res.json();
  
    if (wrappedByKey) {
      data = data[wrappedByKey];
    }
  
    if (wrappedByList) {
      data = data[0];
    }
  
    return data as T;
  }