import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose, MdPlayCircle } from 'react-icons/md';

const Background = styled.div`
  right: 50%;
  top: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  position: absolute;
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: row;
  z-index: 99999 !important;
  border-radius: 20px!important;
`;

const ModalImg = styled.img`
  padding: 20px;
  max-width: 70%;
  
`;

const ModalContent = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-content: start;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1.5rem;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 10px 24px;
    background: #c12729;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    border: none;
    border-radius: 999px;
    gap: 1em;
  }
`;
const ModalContentRow = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  //align-items: center;
  line-height: 1;
  color: #141414;
  h2{
    width: 70%;
    font-size: 1.9rem !important;
  }
  p {
    margin-bottom: 1.5rem;
  }
  button {
    padding: 10px 24px;
    background: #c12729;
    color: #fff;
    border: none;
    border-radius: 999px;
  }
`;
const ModalDescRow = styled.div`
  display: flex;
  flex-direction: row !important;
  //align-items: center;
  line-height: 1.8;
  color: #1d1d1f;
  h2{
    color: #6e6e73;
    font-size: 1.8rem !important;
  }
  p {
    margin-bottom: 1rem;
    color: #1d1d1f;
  }
`;
const Each = styled.div`
  display: flex;
  flex-direction: column !important;
  //align-items: center;
  line-height: .1!important;
  color: #141414;
  h2{
    color: #6e6e73;
    font-size: 1rem !important;
  }
  p {
    margin-bottom: 1rem;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: white;
  background-color: black;
  border-radius: 999px;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal, comic }) => {
    const thumbnailSplit = comic.thumbnail.path.split('//');
    thumbnailSplit[0] = 'https://';
    const modalRef = useRef();



    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg src={`${thumbnailSplit.join('')}.${comic.thumbnail.extension}`} alt='thumb' />
                        <ModalContent>
                            <ModalContentRow>
                                <h2>{comic.title}</h2>
                            </ModalContentRow>
                            <ModalDescRow>
                                <Each>
                                    <h2>Genre</h2>
                                    <p>{comic.format}</p>
                                </Each>
                                <Each>
                                    <h2>Price</h2>
                                    <p>${comic.prices[0].price}</p>
                                </Each>
                                <Each>
                                    <h2>Length</h2>
                                    <p>120mins</p>
                                </Each>
                            </ModalDescRow>
                            <Each>
                                <h2>Public</h2>
                                <p>4.5</p>
                            </Each>
                            {comic.textObjects === 0? "":<p>{comic.textObjects[0].text}</p> }
                            <button>Join Now <MdPlayCircle/></button>
                        </ModalContent>
                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowModal(prev => !prev)}
                        />
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
};