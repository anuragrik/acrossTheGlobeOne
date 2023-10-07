import React from "react"
import { view, share, options, location} from '../assets'

export default function ArticleCard(){
    const [optionsTab, setOptionsTab] = React.useState(false)
    function toggleOptionsTab(){
        setOptionsTab(!optionsTab)
    }
    const articles = [
        {
          articleRef: '/src/assets/article-one.png',
          personRef: "/src/assets/person-one.png",
          articleCategory: "✍️ Article",
          articleTitle: "What if famous brands had regular fonts? Meet RegulaBrands!",
          authorDesc:
            "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
          personName: "Sarthak Kamra",
        },
        {
          articleRef: "/src/assets/article-two.png",
          personRef: "/src/assets/person-two.png",
          articleCategory: "🔬️ Education",
          articleTitle:
            "Tax Benefits for Investment under National Pension Scheme launched by Government",
          authorDesc:
            "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
          personName: "Sarah West",
        },
        {
          articleRef: "/src/assets/article-three.png",
          personRef: "/src/assets/person-three.png",
          articleCategory: "🗓️ Meetup",
          articleTitle: "Finance & Investment Elite Social Mixer @Lujiazui",
          authorDesc: "",
          personName: "Ronal Jones",
          articleDetailOne: "Fri, 12 Oct, 2018",
          articleLocation: "Ahmedabad, India",
          articleDetailIcon: "/src/assets/calendar.svg",
          buttonContent: "Visit Website",
        },
        {
          articleRef: "",
          personRef: "/src/assets/person-four.png",
          articleCategory: "💼️ Job",
          articleTitle: "Software Developer",
          authorDesc: "",
          personName: "Joseph Gray",
          articleDetailOne: "Innovaccer Analytics Private Ltd.",
          articleLocation: "Noida, India",
          articleDetailIcon: "/src/assets/job.svg",
          buttonContent: "Apply on Timesjobs",
        },
      ];
    return (
        <>
            <div className="container">
                {articles.map((article, index)=>(
                    <div key={index}>
                        {article.articleRef && <div className="row">
                        <img src='../assets/article-one.png' className="article-img"></img>
                                        </div>}
                                        <div className="row article-category">
                        <div>{article.articleCategory}</div>
                                        </div>
                                        <div className="row">
                        <div className="article-header">
                            <div className="article-title">{article.articleTitle}</div>
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
                                        {article.authorDesc?<div className="row author-description">{article.authorDesc}</div>:
                                        <><div className="alt-description">
                        <div className="alt-desc-left">
                            <img src={article.articleDetailIcon}></img>
                            <div>{article.articleDetailOne}</div>
                        </div>
                        <div className="alt-desc-right">
                            <img src={location}></img>
                            <div>{article.articleLocation}</div>
                        </div>
                                        </div>
                                        <div className={`href-button ${article.articleDetailIcon}`}>
                        <button>
                            {article.buttonContent}
                        </button>
                                        </div>
                                        </>
                                        }
                                        <div className="row">
                        <div className="footer">
                            <div className="author d-flex flex-row align-items-center">
                                <img src={article.personRef} className="person-icon" />
                                <div className="author-name">{article.personName}</div>
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
                ))}
            </div>
        </>
    )
}