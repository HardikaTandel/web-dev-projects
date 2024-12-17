import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../features/movie/movieSlice";

const Recommends = (props) =>{
 const movies = useSelector(selectRecommend);

    return(
        <Container>
            <h4>Recommanded for you </h4>
            <Content>
           {
            movies &&
            movies.map((movie, key) => (
               <Wrap key={key}>
                  {movie.id}
                  <Link to={"/detail/" + movie.id}>
                  <img src ={movie.cardImg} alt={movie.title} />
                  </Link>
               </Wrap>
            )) }
            </Content>
          
        </Container>
    )
};

const Container = styled.div`
     padding: 0 0 26px;
`;

const Content = styled.div`
     display:grid;
     grip-gap: 25px;
     gap:25px;
     grid-template-columns: repeat(4, minmax(0, 1fr));

     @media(max-width: 768px){
     grid-template-columns: repeat(2, minmax(0, 1fr));
     }
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0/ 73%) 6px 16px 10px -10px;
  cursor: popinter;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img{
  inset: 0px;
  display: block;
  height:100%;
  object-fit:cover;
  opacity: 1;
  position: absolute;
  width:100%;
  transition: opacity 500ms ease-in-out 0s;
  z-index:1;
  top:0;
  }

  &:hover{
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   transform: scale(1.05);
   border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Recommends;