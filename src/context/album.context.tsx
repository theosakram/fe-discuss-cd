import { FC } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useFetch } from "../utils/hooks/useFetch";

interface Album {
    userId: number;
    title: string;
    id: number;
}

interface AlbumContextInterface {
    albums: Album[];
    loading: boolean;
    error: null | string;
}

export const AlbumContext = createContext<AlbumContextInterface | undefined>(undefined);

export const AlbumProvider: FC = ({ children }) => {
    const { data, loading, error } = useFetch({
        url: "/albums",
        watchedValue: "",
    });

    return (
        <AlbumContext.Provider value={{ albums: data, loading, error }}>
            {children}
        </AlbumContext.Provider>
    );
};

export const useAlbums = () => {
    const context = useContext(AlbumContext);

    if (context === undefined) {
        throw new Error("useAlbums harus dipakai didalam AlbumProvider");
    }

    return context;
};
