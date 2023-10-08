import React from "react"
import { view, share, options, location } from '../assets'


export default function ArticleCard(props){
    const [optionsTab, setOptionsTab] = React.useState(false)
    function toggleOptionsTab(){
        setOptionsTab(!optionsTab)
    }
    return (
        <>
            <div className="container">
                {props.articleRef && <div className="row">
                    <img src={props.articleRef} className="article-img"></img>
                </div>}
                <div className="row article-category">
                    <div>{props.articleCategory}</div>
                </div>
                <div className="row">
                    <div className="article-header">
                        <div className="article-title">{props.articleTitle}</div>
                        <div className="article-options-parent">
                            <button className="article-options" onClick={toggleOptionsTab}><img src={options}></img></button>
                            {optionsTab && <div className="article-options-open">
                                <div>Edit</div>
                                <div>Report</div>
                                <div>Option 3</div>
                            </div>}
                        </div>
                    </div>
                </div>
                {props.authorDesc?<div className="row author-description">{props.authorDesc}</div>:
                <><div className="alt-description">
                    <div className="alt-desc-left">
                        <img src={props.articleDetailIcon}></img>
                        <div>{props.articleDetailOne}</div>
                    </div>
                    <div className="alt-desc-right">
                        <img src={location}></img>
                        <div>{props.articleLocation}</div>
                    </div>
                </div>
                <div className={`href-button ${props.articleIcon}`}>
                    <button>
                        {props.buttonContent}
                    </button>
                </div>
                </>
                }
                <div className="row">
                    <div className="footer">
                        <div className="author d-flex flex-row align-items-center">
                            <img src={props.personRef} className="person-icon" />
                            <div className="author-name">{props.personName}</div>
                        </div>
                    
                        <div className="article-details d-flex flex-row">
                            <div className="article-views">
                                <img src={view} className="view-icon" />
                                <div className="views-stat">1.4K Views</div>
                            </div>
                            <button className="article-share">
                                <img src={share} className="share-icon"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}