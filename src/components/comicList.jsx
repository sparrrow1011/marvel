import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {comicActions, fetchAllComics, fetchComics} from "../features/marvel/comicSlice";
import {CharacterListWrapper, ComicCardWrapper, LikeButton, PaginationButtonWrapper} from "../styled/lib";
import ComicCard from "./comicCard";

function ComicList(props) {
    const {comics, loading, error, filteredComics} = useSelector(state => state.comics);
    const dispatch = useDispatch();
    const comicsPerPage = useSelector((state) => state.comics.comicsPerPage);
    const currentPage = useSelector((state) => state.comics.currentPage);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchAllComics())
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
    }, [dispatch]);
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
        const allComics = comics.slice((currentPage - 1) * comicsPerPage, currentPage * comicsPerPage);
        const filtered = filteredComics.slice((currentPage - 1) * comicsPerPage, currentPage * comicsPerPage);
        const visibleComics = filtered.length === 0 ? allComics : filtered;
        return visibleComics.length > 0 ? visibleComics.map(comic => (
            <ComicCard
                object={comic}
                title={comic.title}
                thumbnail={comic.thumbnail}
                key={comic.id}
                id={comic.id}
            />
        )): <div>
            <p color={`white`}>
                No content to show
            </p>
        </div>;
    };

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