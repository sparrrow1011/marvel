import styled from 'styled-components';

// #6e6e72
// #f86465 color not correct
export const Header = styled.nav`
  z-index: 1;
  position: sticky;
  top: 0;
  height: 120px;
  background-color: #c12729;
  padding: 20px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
  input {
    display: block;
    border: none;
    background-color: white;
    color: black;
    font-size: 12px;
    font-style: italic;
    padding: 10px 40px;
    width: 300px;
    border-radius: 9999px;
    outline: none;
  }
  
  img{
    display: block;
    padding: 10px;
    width: 120px;
  }
  
  likebutton{
    display: flex;
    align-items: center;
    gap: 4px;
    position: absolute;
    color: white;
    font-weight: bold;
    right: 0;
    top: 0;
    padding: 20px 40px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;
export const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1d1d1f;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 7.5em 1fr;
  }
`;


export const CharacterListWrapper = styled.div`
margin: auto;
  grid-area: comicList;

  @media screen and (min-width: 640px){
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    div {
      border-radius: 0em;
      margin: 0.4em;
    }
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    div {
      border-radius: 0em;
      margin: 0.4em;
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 1300px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1280px){
    max-width: 1300px;
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: 1536px){}
`;


export const FavComicCardWrapper = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between !important;
  position: relative;
  margin-top: 1em;
  padding: 0.8em;
  padding-bottom: 2rem;
  width: 10rem;
  height: 7rem;
  border-bottom: black 2px  solid;

  div{
    display: flex;
    flex-direction: row;
    justify-content: start;
    height: 100%;
  }
  h2 {
    font-size: 0.7em;
    color: black;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.2em 0.5em;
    margin-bottom: 0.3em;
  }
`;

export const FavComicCardImgWrapper = styled.div`
  position: relative;
  padding: 0.8em;
  width: 5rem !important;
  min-height: 100%;
  background-color: blue;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center center;
`;



export const ComicCardWrapper = styled.div`
  position: relative;
  margin-top: 1em;
  padding: 0.8em;
  width: 10rem;
  height: 17rem;
  background-color: var(--gray-color);
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  box-shadow: 10px 10px 29px -19px rgba(0,0,0,0.75);

  h2 {
    min-width: 100%;
    font-size: 0.7em;
    color: black;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: white;
    padding: 0.2em 0.5em;
    margin-bottom: 0.3em;
  }

  a {
    font-size: 1.1em;
    font-weight: bold;
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    border-radius: 0.3em;
    cursor: pointer;
  }

  &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
  }

  &:hover div {
    display: block;
  }

  div {
    display: none;
    position: absolute;
    top: 48%;
    left: 47%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
  }
  position: relative;
`;



export const DivComic = styled.div`{
  display: flex;
  position: absolute;
  top: 48%;
  left: 47%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}`

export const EyeComic = styled.button`{
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: normal;
  color: white;
  cursor: pointer;
}`
export const Content = styled.div`{
  display: flex !important;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}`
export const LikeButtonComic = styled.button`{
  display: flex;
  flex-direction: row;
  justify-content: right;
  border: none;
  background-color: transparent;
  padding: 10px;
  margin: 0;
  font-size: 1.5rem;
  font-weight: normal;
  color: white;
  cursor: pointer;
}`

export const LikeButtonFavComic = styled.button`{
  display: flex;
  flex-direction: row;
  justify-content: right;
  border: none;
  background-color: transparent;
  padding: 10px;
  margin: 0;
  font-size: 1.5rem;
  font-weight: normal;
  color: white;
  cursor: pointer;
}`


export const LikeButton = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

export const PaginationButtonWrapper = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  

  @media screen and (min-width: 1024px) {
    max-width: 1300px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1280px){
    max-width: 1300px;
    grid-template-columns: repeat(6, 1fr);
  }
  each{
    color: black;
    background-color: white;
    border-radius: 999px;
    padding: 10px 20px;
    cursor: pointer;
  }
`;


export const SidebarWrapper = styled.div`
 
  .sidebar {
    top: 0;
    right: 0;
    background-color: white;
    box-shadow: 10px 10px 29px -19px rgba(0,0,0,0.75);
    padding: 1rem;
    width: 100%;
    max-width: 20rem;
    height: 100vh;
    position: fixed;
    z-index: 999;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    

    div{
      width: 100%;
    }
   
    &.show {
      transform: translateX(0%);
    }
    a{
      color: black;
      text-decoration: none;
    }
    h3 {
      color: white;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    likebutton{
      display: flex;
      align-items: end;
      gap: 4px;
      position: absolute;
      color: white;
      font-weight: bold;
      right: 0;
      top: 0;
      padding: 20px 40px;
    }
  }
`;

export const TopDiv = styled.div`{
    display: flex !important;
    flex-direction: row !important;
    width: 100% !important;
    justify-content: space-between !important;
  border-bottom: black 2px solid;
}`
export const TopText = styled.h1`{
  color: #c12729;
  font-weight: bold;
  font-size: 1rem !important;
}`
export const TopSubText = styled.p`{
  display: flex;
  font-size: .9rem !important;
  cursor: pointer;
}`

//
// export const ComicCardWrapper = styled.div`
//   position: relative;
//   width: 200px;
//   height: 300px;
//   margin: 10px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
//   cursor: pointer;
// `;
//
// export const Thumbnail = styled.img`
//   width: 100%;
//   height: 100%;
// `;

export const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-height: 80%;
  background-color: white;
  padding: 10px;
  overflow-y: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
