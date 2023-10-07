import {heroBg, back} from '../assets'

export default function Hero(props){
    return(
        <>
            <div className="hero">
                <img src={heroBg} className="h-img img-fluid"></img>
                <img src={back} className="back-icon d-sm-none"></img>
                <button className="group-status d-sm-none">{`${props.logState?"Leave Group":"Join Group"}`}</button>
                <div className="hero-text hero-text-left hero-text-top fs-36 sm-fs-17 d-flex flex-column align-items-start justify-content-center">
                    <div className="font-hero">Computer Engineering</div>
                    <div className="font-hero-sub hero-text-subtitle">142, 765 Computer Engineers follow this</div>
                </div>
            </div>
        </>
    )
}