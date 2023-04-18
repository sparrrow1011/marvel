import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ComicCardWrapper, Content, EyeComic, LikeButtonComic} from '../styled/lib';
import {useDispatch} from "react-redux";
import {comicActions} from "../features/marvel/comicSlice";
import {AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'
import {Modal} from "./modal";

const ComicCard = ({
  title, thumbnail, id, object
}) => {
  const thumbnailSplit = thumbnail.path.split('//');
  thumbnailSplit[0] = 'https://';
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    };
    const handleLikeClick = () => {
        setLiked(!liked);
        dispatch(comicActions.addFavouriteComic(object));
    };


  return (
      <>
          <ComicCardWrapper backgroundImage={`${thumbnailSplit.join('')}.${thumbnail.extension}`}>
              <div>
                  <Content>
                      <LikeButtonComic onClick={handleLikeClick} liked={liked}>
                          {liked ? '❤️' : < AiOutlineHeart />}
                      </LikeButtonComic>
                      <EyeComic onClick={openModal}>
                          <AiOutlineEye/>
                      </EyeComic>
                      <h2>{title}</h2>
                  </Content>
              </div>
          </ComicCardWrapper>
          <Modal showModal={showModal} setShowModal={setShowModal} comic={object} />
      </>
  );
};

ComicCard.propTypes = {
  thumbnail: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ComicCard;
