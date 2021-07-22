import { FC } from "react";
import { AlbumProvider } from "../../../context/album.context";
import { AlbumContainers } from "../../containers/album.containers";

export const Home: FC = () => {
    return (
        <AlbumProvider>
            <AlbumContainers />
        </AlbumProvider>
    );
};
