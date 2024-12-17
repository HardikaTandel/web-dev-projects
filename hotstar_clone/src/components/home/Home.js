import styles from './Home.css';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trendings from './Trendings';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase';
import { setMovies } from '../../features/movie/movieSlice';
import { selectUserName } from '../../features/user/userSlice';

const Home = (props) => {
   const dispatch = useDispatch();
   const userName = useSelector(selectUserName);
   let recommends = [];
   let newDisneys = [];
   let originals = [];
   let trending = []; 

   useEffect(() => {
       const moviesCollection = collection(db, 'movies');
       const unsubscribe = onSnapshot(moviesCollection, (snapshot) => {
           snapshot.docs.forEach((doc) => {
               switch(doc.data().type) {
                   case 'recommend':
                       recommends = [...recommends, { id: doc.id, ...doc.data() }];
                       break;
                   case 'new':
                       newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                       break;
                   case 'originals':
                       originals = [...originals, { id: doc.id, ...doc.data() }];
                       break;
                   case 'trending':
                       trending = [...trending, { id: doc.id, ...doc.data() }];
                       break;
               }
           });

           dispatch(setMovies({
               recommend: recommends,
               newDisney: newDisneys,
               original: originals,
               trending: trending,
           }));
       });

       return () => unsubscribe(); // Cleanup on unmount
   }, [userName, dispatch]);

   return (
       <Container>
           <ImgSlider />
           <Viewers />
           <Recommends />
           <NewDisney />
           <Trendings />
       </Container>
   );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background-image: url("/images/home-background.png");
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;
