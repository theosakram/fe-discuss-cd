import { FC } from "react";
import { useAlbums } from "../../context/album.context";

export const AlbumContainers: FC = () => {
    const { albums, loading, error } = useAlbums();

    if (loading) {
        return <h1>Loading</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return <h1>{JSON.stringify(albums)}</h1>;
};
