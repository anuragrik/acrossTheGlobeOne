import React from "react";
import { google, fbLogo, regIllustration, visibility, cross, darkCross } from '../assets'

export default function Registration(props){
    const [signIn, setSignIn] = React.useState(true);

    function swtichSignIn(){
        setSignIn(!signIn)
    }

    return(
        <>
        <img src={cross} className="cross-button d-none d-sm-block" onClick={props.cancelForm}></img>
        <div className="template">
            <div className="template-header d-none d-sm-flex align-items-center">
                {`Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼`}
            </div>
            <div className="template-body">
                <div className="template-body-one">
                    <d className="d-flex header-form-sm">
                        <div className="form-title d-none d-sm-block">{signIn?"Create Account":"Sign In"}</div>
                        <div className="form-title d-sm-none">{signIn?"Create Account":"Welcome Back"}</div>
                        <img src={darkCross} className="cross-button-sm d-block d-sm-none" onClick={props.cancelForm}></img>
                    </d>
                    <div className="form-body">
                        {signIn && <div className="form-body-name d-flex flex-row">
                            <input type="text" placeholder="First Name"></input>
                            <input type="text" placeholder="Last Name" className="form-last-name"></input>
                        </div>}
                        <input type="text" placeholder="Email"></input>
                        <div className="visib-wp">
                            <input type="text" placeholder="Password" className={signIn?"":"need-border"}></input>
                            {signIn && <img src={visibility} className="visibility-icon"></img>}
                        </div>
                        {signIn && <input type="text" placeholder="Confirm Password" className="form-confirm-pwd"></input>}
                    </div>
                    <div className={`sm-sign-in-grp ${signIn ? "" : "create"} d-flex flex-row align-items-center`}>
                        {signIn && <button className="form-submit">Create Account</button>}
                        {!signIn && <button className="form-submit" onClick={props.onSignIn}>Sign In</button>}
                        <div className="sm-sign-in-switch d-sm-none" onClick={swtichSignIn}>{signIn?"or, Sign In":"or, Create Account"}</div>
                    </div>
                    <div className="form-login">
                        <button className="form-login-one">
                            <img src={fbLogo}></img>
                            <div>Sign {signIn?"up":"in"} with Facebook</div>
                        </button>
                        <button className="form-login-two">
                            <img src={google}></img>
                            <div>Sign {signIn?"up":"in"} with Google</div>
                        </button>
                        {!signIn && <div className="form-forgot">Forgot Password</div>}
                        {signIn && <div className="form-terms d-flex d-sm-none">By signing up, you agree to our Terms & conditions, Privacy policy</div>}
                    </div>
                </div>
                <div className="template-body-two d-none d-sm-flex">
                    {signIn?<div className="form-signin">Already have an account?<div onClick={swtichSignIn}>Sign In</div></div>:
                    <div className="form-signin">{`Don't have an account yet?`}<div onClick={swtichSignIn}>Create new for free</div></div>}
                    <img src={regIllustration}></img>
                    {signIn && <div className="form-terms">By signing up, you agree to our Terms & conditions</div>}
                </div>
            </div>
        </div>
        </>
    )
}