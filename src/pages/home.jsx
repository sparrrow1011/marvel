import React from 'react';
import Nav from "../components/nav";
import ComicList from "../components/comicList";
import {MainWrapper} from "../styled/lib";
import {comicActions} from "../features/marvel/comicSlice";
import {useDispatch} from "react-redux";

function Home(props) {
    const dispatch = useDispatch();
    const handleSearch = (query) => {
        console.log(`Search for: ${query}`);
        // do something with the search query
        dispatch(comicActions.filterComic(query));
    };

    return (
        <MainWrapper>
            <Nav setter={handleSearch} />
            <ComicList/>
        </MainWrapper>
    );
}

export default Home;
