import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";


import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'
const Authentication = ({changeState}) => {
  /* useEffect(() => {
    const getRedirectUser = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    getRedirectUser();
  }, []); */

  

  return (
    <div className="authentication-container">
      
     {/*  <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Riderect
      </button> */}
      <SignInForm changeState={changeState}/>
      <SignUpForm changeState={changeState}/>
    </div>
  );
};

export default Authentication;
