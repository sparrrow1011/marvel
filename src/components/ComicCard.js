import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {ComicCardWrapper, LikeButton} from './styled/lib';
import {useDispatch} from "react-redux";
import {comicActions} from "../features/marvel/marvelSlice";
import {AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'
import {GrFavorite} from "react-icons/gr";
const ComicCard = ({
  title, thumbnail, id,
}) => {
  const thumbnailSplit = thumbnail.path.split('//');
  thumbnailSplit[0] = 'https://';
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch();
    const favouritesFromLocalStorage = JSON.parse(localStorage.getItem('favourites'));
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    const handleLikeClick = () => {
        setLiked(!liked);
        dispatch(comicActions.addFavouriteComic(id));
        // dispatch(comicActions.addFavouriteComic(favouritesFromLocalStorage));

    };
  return (
    <ComicCardWrapper backgroundImage={`${thumbnailSplit.join('')}.${thumbnail.extension}`}>

           <div>
               <content>
                   <div>
                       <likebutton onClick={handleLikeClick} liked={liked}>
                           {liked ? '❤️' : < AiOutlineHeart />}
                       </likebutton>
                   </div>
                   <eye></eye>
                   <eye><Link to={`/comics/${id}`}> <AiOutlineEye/> </Link></eye>
                   <span><h2>{title}</h2></span>

               </content>

           </div>


    </ComicCardWrapper>
  );
};

ComicCard.propTypes = {
  thumbnail: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ComicCard;
