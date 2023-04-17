import React, {useEffect, useRef, useState} from 'react';
import {comicActions} from "../features/marvel/comicSlice";
import {useDispatch, useSelector} from "react-redux";
import {
    ClearButton,
    Header,
    InputWrapper, LikeButtonComic,
    SidebarWrapper,
    TopDiv,
    TopSubText,
    TopText,
} from "../styled/lib";
import {AiOutlineHeart, AiFillCloseCircle} from "react-icons/ai";
import FavComicCard from "./favComicCard";

function Nav({ setter }) {
    let input = useRef("");
    const dispatch = useDispatch();
    const { comics, loading, error, favourite } = useSelector(
        (state) => state.comics
    )
    const [showSidebar, setShowSidebar] = useState(false);
    useEffect(() => {
        if (error) {
            console.log(error)
        }
    }, [comics, loading, error, dispatch])
    const favourites = useSelector(state => state.comics.favourites);
    console.log(favourites)

    if (loading) {
        return <div>loading..</div>
    }

    const onChange = (e) => {
        setter(e.target.value)
    }
    const handleClick = async (e) => {
        e.preventDefault();
        let value = input.current.value;
        console.log(value)
        if (value === "") return;
        try {
            dispatch(comicActions.filterComic(value));
        } catch (err) {
            return console.log(err);
        }
    }
    const handleClearClick = () => {
        setter("");
    };


    return (

        <Header>
            <div>
                <SidebarWrapper>
                    {showSidebar ? (
                        <likebutton onClick={() => setShowSidebar(!showSidebar)}> Favourites < AiOutlineHeart /> </likebutton>
                    ) : (
                        <likebutton onClick={() => setShowSidebar(!showSidebar)}>Favourites < AiOutlineHeart /> </likebutton>
                    )}

                    <div className={`sidebar ${showSidebar ? "show" : ""}`}>
                        <div>
                            <TopDiv>
                                <TopText>My Favourite</TopText>
                                <TopSubText>
                                    <TopSubText onClick={()=>dispatch(comicActions.removeAllFavouriteComics())}>Clear all</TopSubText>
                                    <LikeButtonComic onClick={() => setShowSidebar(!showSidebar)}>
                                        < AiFillCloseCircle color={`black`}/>
                                    </LikeButtonComic>
                                </TopSubText>
                            </TopDiv>
                            {favourites.map((comic) => {
                                return (
                                    <FavComicCard
                                        title={comic.title}
                                        thumbnail={comic.thumbnail}
                                        key={comic.id}
                                        id={comic.id}
                                    />
                                    )
                            })}
                        </div>
                    </div>
                </SidebarWrapper>
                    <img src="/marvel_logo.png" alt=""/>
                <form onSubmit={handleClick}>
                    <InputWrapper>
                        <input type="text" ref={input} onChange={onChange} />
                        {setter && (
                            <ClearButton onClick={handleClearClick}>
                                <span aria-hidden="true">&times;</span>
                            </ClearButton>
                        )}
                    </InputWrapper>

                </form>
            </div>
        </Header>

    );
}

export default Nav;