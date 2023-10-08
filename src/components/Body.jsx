import React from "react"
import { arrow, group, edit, location, info, exit, thumb, groupOne, groupTwo, groupThree, groupFour, articleOne, articleTwo, articleThree, calendar, job, personOne, personTwo, personThree, personFour} from '../assets'
import ArticleCard from "./ArticleCard";

export default function Body(props){

    const [followStates, setFollowStates] = React.useState([
        false,
        false, 
        false,
        false, 
    ]);

    function toggleState(index) {
        const newFollowStates = [...followStates];
        newFollowStates[index] = !newFollowStates[index];
        setFollowStates(newFollowStates);
    }

    return (
        <div className="mega-body">
            <div className="top-bar d-none d-sm-flex flex-column">
                <div className="top-bar-child d-flex justify-content-between">
                    <ul className="left-content d-flex flex-row list-unstyled">
                            <li className="focused">All Posts(32)</li>
                            <li><button>Article</button></li>
                            <li><button>Event</button></li>
                            <li><button>Education</button></li>
                            <li><button>Jobs</button></li>
                    </ul>
                    <div className="right-content d-flex flex-row">
                        <button className="write-post mr-16">
                            Write Post
                            <img src={arrow} className="ml-10"></img>
                        </button>
                        {props.logState?<div>
                            <button className="leave-group">
                            <img src={exit} className="mr-6"></img>
                            Leave Group
                        </button>
                        </div>
                        :<button className="join-group">
                            <img src={group} className="mr-6"></img>
                            Join Group
                        </button>}
                    </div>
                </div>
                <div className="progress d-none d-sm-block"></div>
            </div>
            <div className="d-flex d-sm-none small-top-bar">
                <div className="small-top-bar-text">Posts(368)</div>
                <button>
                    Filter: All
                    <img src={arrow}></img>
                </button>
            </div>
            <div className="body-content">
                <div className="body-cards">
                    <ArticleCard
                        articleRef={articleOne} personRef={personOne}
                        articleCategory="✍️ Article" articleTitle="What if famous brands had regular fonts? Meet RegulaBrands!" authorDesc="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" personName="Sarthak Kamra"
                    />
                    <ArticleCard
                        articleRef={articleTwo} personRef={personTwo}
                        articleCategory="🔬️ Education" articleTitle="Tax Benefits for Investment under National Pension Scheme launched by Government" authorDesc="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" personName="Sarah West"
                    />
                    <ArticleCard
                        articleRef={articleThree} personRef={personThree}
                        articleCategory="🗓️ Meetup" articleTitle="Finance & Investment Elite Social Mixer @Lujiazui" authorDesc="" personName="Ronal Jones"
                        articleDetailOne="Fri, 12 Oct, 2018" articleLocation="Ahmedabad, India" articleDetailIcon = {calendar} buttonContent="Visit Website"
                    />
                    <ArticleCard
                        articleRef="" personRef={personFour}
                        articleCategory="💼️ Job" articleTitle="Software Developer" authorDesc="" personName="Joseph Gray"
                        articleDetailOne="Innovaccer Analytics Private Ltd." articleLocation="Noida, India" articleDetailIcon={job} buttonContent="Apply on Timesjobs"
                    />
                </div>
                <div className="group=details">
                    <div className="body-location d-none d-sm-flex">
                        <div className="location-detail">
                            <div className="location-detail-left">
                                <img src={location}></img>
                                <input type="text" placeholder="Enter your location"></input>
                            </div>
                            <img src={edit}></img>
                        </div>
                        <div className="location-seperator"></div>
                        <div className="location-info">
                            <img src={info}></img>
                            <div>Your location will help us serve better and extend a personalised experience.</div>
                        </div>
                    </div>
                    {props.logState && <div className="group-parent d-none d-sm-block">
                        <div className="group-header">
                            <img src={thumb}></img>
                            <div>Recommended Groups</div>
                        </div>
                        <div className="group-items">
                            <div className="group-items-left">
                                <img src={groupOne}></img>
                                <div>Leisure</div>
                            </div>
                            <button className={`${followStates[0] ? "following" : "not-following"}`}
                            onClick={() => toggleState(0)}>{`${followStates[0]?"Following":"Follow"}`}</button>
                        </div>
                        <div className="group-items">
                            <div className="group-items-left">
                                <img src={groupTwo}></img>
                                <div>Activism</div>
                            </div>
                            <button className={`${followStates[1] ? "following" : "not-following"}`}
                            onClick={() => toggleState(1)}>{`${followStates[1]?"Following":"Follow"}`}</button>
                        </div>
                        <div className="group-items">
                            <div className="group-items-left">
                                <img src={groupThree}></img>
                                <div>MBA</div>
                            </div>
                            <button className={`${followStates[2] ? "following" : "not-following"}`}
                            onClick={() => toggleState(2)}>{`${followStates[2]?"Following":"Follow"}`}</button>
                        </div>
                        <div className="group-items">
                            <div className="group-items-left">
                                <img src={groupFour}></img>
                                <div>Philosophy</div>
                            </div>
                            <button className={`${followStates[3] ? "following" : "not-following"}`}
                            onClick={() => toggleState(3)}>{`${followStates[3]?"Following":"Follow"}`}</button>
                        </div>
                        <div className="group-footer">See More...</div>
                    </div>}
                </div>
            </div>
        </div>
    )
}
