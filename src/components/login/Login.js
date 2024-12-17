import styles from './Login.module.css';
import styled from 'styled-components';

const Login =(props) =>{
    return (
        <div className={styles.Container}>
            <div className={styles.content}>
                <div className={styles.CTA}>
                    <img src="/images/cta-logo-one.svg" className={styles.CTALogo}></img>
                    <a type='button' className={styles.SignUp}> GET ALL THERE</a>
                    <p className={styles.description}>Your favorite shows and movies are now streaming on Disney+ Hotstar. 
                    Sign up now to watch your Hotstar favorites and so much more all in one place.</p>
                    <img src="/images/cta-logo-two.png" className={styles.CTAtwo}></img>
                </div>
                  <BgImage></BgImage>  </div>
        </div>
    );
};
 const BgImage = styled.div`
 background-image: url("/images/login-background.jpg");
 backgroud-size:cover;
 z-index: -1;
 height:100vh;
 position:absolute;
 background-position:top;
 background-repeat: no-repeat;
 top:0;
 right:0;
 left:0;`



export default Login;