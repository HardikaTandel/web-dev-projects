import styles from './Headerstyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../../features/user/userSlice';
import Login from '../login/Login';
import { useEffect } from 'react';

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

useEffect(() => {
  auth.onAuthStateChanged(async (user) =>{
    if(user){
      setUser(user)
      navigate('/home')
    }
  })
}, [username])

  const handleAuth = () => {
    if(!username){
    signInWithPopup(auth, provider)
      .then((result) => {
       setUser(result.user);  
      })
      .catch((error) => {
        alert(error.message);
      });
    }else if(username){
      auth.signOut().then(() => {
        dispatch(setSignOutState())
        navigate('/')
      }).catch((error) => alert(error.message))
    }
  };
  
   const setUser = (user) =>{
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    )
   }

  return (
    <div className='nav'>
      <img src='/images/logo.svg' className='logo' alt="logo" />
      {
        !username ?
        <div className='login' onClick={handleAuth}>Login</div>:
        <>
      
      <div className='navMenu'>
        <a href='/home'>
          <img src='/images/home-icon.svg' alt="home icon" />
          <span> HOME </span>
        </a>
        <a href='/search'>
          <img src='/images/search-icon.svg' alt="search icon" />
          <span> SEARCH </span>
        </a>
        <a href='/watchlist'>
          <img src='/images/watchlist-icon.svg' alt="watchlist icon" />
          <span> WATCHLIST </span>
        </a>
        <a href='/originals'>
          <img src='/images/original-icon.svg' alt="originals icon" />
          <span> ORIGINALS </span>
        </a>
        <a href='/MOVIES'>
          <img src='/images/movie-icon.svg' alt="movies icon" />
          <span> MOVIES </span>
        </a>
        <a href='/series'>
          <img src='/images/series-icon.svg' alt="series icon" />
          <span> SERIES </span>
        </a>
      </div>
      <div className='SignOut'>
      <img className='UserImg'src={userPhoto} //alt={username}
      ></img>
      <div className='DropDown'>
         <span onClick={handleAuth}> Sign Out</span>
      </div>
      </div>
      </>
      }
    </div>
  );
};

export default Header;
