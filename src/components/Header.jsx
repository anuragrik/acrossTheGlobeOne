import { logo, search, arrow, login, login2, user } from '../assets'

export default function Header(props){
    return (
        <>
            <div className="navbar d-none d-sm-flex">
                <img src={logo} alt="atg-logo" className="h-24 w-162"/>
                <div className="searchbar d-flex flex-row align-items-centre justify-content-start">
                    <img src={search}></img>
                    <input type="text" placeholder="Search for your favourite groups in ATG"></input>
                </div>
                {props.logState?<div className="logged-account">
                    <img src={user}></img>
                    <div>Siddharth Goyal</div>
                    <img src={arrow} className="nav-img h-24 w-24" onClick={props.regForm}></img>
                </div>:<div className="create-account d-flex flex-row jusitfy-content-center align-items-center">
                    <div>
                        Create Account.&nbsp;
                    </div>
                    <div className="create-account-free" onClick={props.regForm}>{`It's free!`}</div>
                    <img src={arrow} className="nav-img h-24 w-24" onClick={props.regForm}></img>
                </div>}
            </div>
            {!props.regFormStat && <div className="login-icon-group" onClick={props.regForm}>
                <img src={login} className="login-icon d-sm-none"></img>
                <img src={login2} className="login-icon-edit"></img>
            </div>}
        </>
    )
}

