import { useEffect, useState } from "react";
import { _axios } from "../helper/_axios";

interface FetchProps {
    url: string;
    watchedValue?: any;
}

export const useFetch = (props: FetchProps) => {
    const { url, watchedValue } = props;

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const { data } = await _axios.get(url);
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [watchedValue]);

    return {
        data,
        loading,
        error,
    };
};
