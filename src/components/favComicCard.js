import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    FavComicCardImgWrapper,
    FavComicCardWrapper,
    LikeButtonFavComic
} from '../styled/lib';
import {useDispatch} from "react-redux";
import {comicActions} from "../features/marvel/comicSlice";
import {AiOutlineHeart} from 'react-icons/ai'
const FavComicCard = ({
  title, thumbnail, id, object
}) => {
  const thumbnailSplit = thumbnail.path.split('//');
  thumbnailSplit[0] = 'https://';
    const [liked, setLiked] = useState(true);
    const dispatch = useDispatch();

    const handleLikeClick = () => {
        setLiked(!liked);
        dispatch(comicActions.removeFavouriteComic(object));
    };
  return (
    <FavComicCardWrapper >
        <div>
            <FavComicCardImgWrapper backgroundImage={`${thumbnailSplit.join('')}.${thumbnail.extension}`}/>
            <h2>{title}</h2>
        </div>

        <LikeButtonFavComic onClick={handleLikeClick} liked={liked}>
            {liked ? '❤️' : < AiOutlineHeart color={`black`}/>}
        </LikeButtonFavComic>


    </FavComicCardWrapper>
  );
};

FavComicCard.propTypes = {
  thumbnail: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FavComicCard;
