import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {comicActions, fetchAllComics, fetchComics} from "../features/marvel/marvelSlice";
import {CharacterListWrapper, ComicCardWrapper, LikeButton, PaginationButtonWrapper} from "./styled/lib";
import ComicCard from "./ComicCard";

function ComicList(props) {
    const {comics, loading, error} = useSelector(state => state.comics);
    const favourites = useSelector((state) => state.comics.favourites);
    const dispatch = useDispatch();
    const comicsPerPage = useSelector((state) => state.comics.comicsPerPage);
    const currentPage = useSelector((state) => state.comics.currentPage);

    useEffect(() => {
        if (error) {
            console.log(error)
        }
        dispatch(fetchAllComics());
        dispatch(fetchComics());

    }, [dispatch])
    const totalPages = Math.ceil(comics.length / 12);


    const navigatePrev = () => {
        if (currentPage !== 1) {
            dispatch(comicActions.onNavigatePrev());
        }
    };

    const navigateNext = () => {
        if (currentPage !== totalPages) {
            dispatch(comicActions.onNavigateNext());
        }
    };

    if (loading) {
        return <div>loading..</div>
    }



    const displayComics = () => {
        const visibleComics = comics.slice((currentPage - 1) * 12, currentPage * 12);
        return visibleComics.map(comic => (
            <ComicCard
                title={comic.title}
                thumbnail={comic.thumbnail}
                format={comic.format}
                key={comic.id}
                creators={comic.creators}
                id={comic.id}
            />
        ));
    };


    const favouritesFromLocalStorage = JSON.parse(localStorage.getItem('favourites'));


    return (
        <>
            <CharacterListWrapper>
                {displayComics()}
            </CharacterListWrapper>
            <PaginationButtonWrapper>
                <each onClick={navigatePrev}>
                    PREVIOUS PAGE
                </each>
                <each onClick={navigateNext}>
                    NEXT PAGE
                </each>
            </PaginationButtonWrapper>
        </>


    );
}

export default ComicList;