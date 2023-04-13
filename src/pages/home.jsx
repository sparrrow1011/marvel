import React from 'react';
import Nav from "../components/nav";
import ComicList from "../components/comicList";
import {MainWrapper} from "../components/styled/lib";

function Home(props) {

    const handleSetComics = (newComics) => {
        console.log(newComics)
    };

    return (
        <MainWrapper>
            <Nav setter={handleSetComics} />
            <ComicList/>
        </MainWrapper>
    );
}

export default Home;
