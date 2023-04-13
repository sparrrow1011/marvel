import React, {useEffect, useRef, useState} from 'react';
import {fetchComics,} from "../features/marvel/marvelSlice";
import {useDispatch, useSelector} from "react-redux";
import {Header, SidebarWrapper} from "./styled/lib";
import { GrFavorite } from 'react-icons/gr'
import {AiOutlineHeart, AiFillCloseCircle} from "react-icons/ai";
import {Link} from "react-router-dom";

function Nav({ setter }) {
    let input = useRef("");
    const dispatch = useDispatch();
    const { comics, loading, error, message } = useSelector(
        (state) => state.comics
    )
    const [showSidebar, setShowSidebar] = useState(false);
    useEffect(() => {
        if (error) {
            console.log(message)
        }

    }, [comics, loading, error, message, dispatch])

    if (loading) {
        return <div>loading..</div>
    }

    const onChange = (e) => {
        setter((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const handleClick = async (e) => {
        e.preventDefault();
        let value = input.current.value;
        console.log(value)
        if (value === "") return;
        try {
            dispatch(fetchComics(value));
        } catch (err) {
            return console.log(err);
        }
    }

    const getFavoriteComicsFromStorage = () => {
        const favoriteComics = localStorage.getItem('favourites');
        if (favoriteComics) {
            console.log(favoriteComics)
            return JSON.parse(favoriteComics);
        } else {
            return [];
        }
    }

    const favoriteComics = getFavoriteComicsFromStorage();

    return (

        <Header>

            <div>
                <SidebarWrapper>
                    {showSidebar ? (
                        <likebutton onClick={() => setShowSidebar(!showSidebar)}> Favourites < AiOutlineHeart /> </likebutton>

                    ) : (
                        <likebutton onClick={() => setShowSidebar(!showSidebar)}>Favourites < AiOutlineHeart /> </likebutton>
                    )}


                    <div
                        className={`sidebar ${showSidebar ? "show" : ""}`}
                    >
                        <div>
                            <topdiv>
                                <toptext color={`#c12729`}>My Favourite</toptext>
                                <div>
                                    <Link>Clear all</Link>
                                    <likebutton onClick={() => setShowSidebar(!showSidebar)}> < AiFillCloseCircle color={`black`}/> </likebutton>
                                </div>
                            </topdiv>




                        </div>
                    </div>
                </SidebarWrapper>
                    <img src="/marvel_logo.png" alt=""/>
                <form onSubmit={handleClick}>
                    <input type="text" ref={input} onChange={onChange} />
                </form>
            </div>
        </Header>

    );
}

export default Nav;