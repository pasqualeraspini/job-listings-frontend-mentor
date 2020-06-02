import React from 'react';
import styled from 'styled-components';

import { device } from '../breakpoints';

const Job = styled.div`
    width: 100%;
    min-height: 15rem;
    background-color: white;
    border-radius: .8rem;
    box-shadow: 1rem 1rem 4rem hsla(180, 29%, 50%, .2);
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    transition: box-shadow .3s ease-in ;
    cursor: pointer;

    @media ${device.mobileS} {
        padding: 3rem 2rem;
    }

    &.active {
        cursor: auto;
        box-shadow: 1rem 1rem 5rem hsla(180, 29%, 50%, .4);

        .job-requirements {
            display: block;
        }

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: .5rem;
            border-radius: 1rem 0 0 1rem;
            background-color: hsl(180, 29%, 50%);
            display: block;
        }
    }

    &:not(:last-child) {
        margin-bottom: 2.4rem;

        @media ${device.mobileS} {
            margin-bottom: 4.2rem;
        }
    }

    &::before {
        display: none;
    }

    &:hover {
        box-shadow: 1rem 1rem 5rem hsla(180, 29%, 50%, .4);

        .position {
            color: hsl(180, 8%, 52%);
        }

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: .5rem;
            border-radius: 1rem 0 0 1rem;
            background-color: hsl(180, 29%, 50%);
            display: block;
        }
    }

    .main-content {
        display: flex;
        align-items: center;
        align-self: start;
        pointer-events: none;

        @media ${device.mobileS} {
            padding-bottom: 2rem;
            border-bottom: .1rem solid hsla(180, 29%, 50%, .5);
        }

        .img-box {
            img {
                object-fit: cover;
            }

            @media ${device.mobileS} {
                position: absolute;
                width: 5rem;
                height: 5rem;
                left: 2rem;
                top: -2.3rem;

                img {
                    width: 5rem;
                    height: 5rem;
                }
            }
        }

        .info {
            margin-left: 1.6rem;

            @media ${device.mobileS} {
                margin-left: 0;
                padding-top: 1.2rem;
            }
        
            .badges {
                margin-bottom: 1.6rem;
                font-weight: 700;

                * {
                    &:first-child {
                        display: block;
                        font-size: 1.2rem;
                        margin-bottom: .8rem;
                        color: hsl(180, 29%, 50%);
                    }

                    &:not(:last-child) {
                        margin-right: .8rem;
                    }
                }

                .badge {
                    color: white;
                    padding: .4rem .8rem;
                    border-radius: 10rem;                   
                }

                .badge-new {
                    background-color: hsl(180, 8%, 52%);
                }

                .badge-featured {
                    background-color: hsl(180, 14%, 20%);
                }
            }

            .position {
                font-size: 1.8rem;
                margin-bottom: 1.2rem;
                font-weight: 700;

                @media ${device.mobileS} {
                    font-size: 1.6rem;
                }
            }

            .secondary-info {
                font-weight: 500;
                font-size: 1.4rem;
                color: hsl(180, 29%, 60%);

                @media ${device.mobileS} {
                    font-size: 1.2rem;
                }
            }
        }
    }

    .filters {
        align-self: baseline;
        margin-top: 3.8rem;

        @media ${device.tablet} {
            width: 100%;
            margin-top: 2.6rem;
        }

        ul {
            display: flex;
            align-items: center;

            @media ${device.tablet} {
                flex-wrap: wrap;
            }

            li {
                cursor: pointer;
                padding: .8rem .6rem;
                font-size: 1.2rem;
                color:  hsl(180, 29%, 50%);
                border-radius: .4rem;
                transition: all .3s ease;
                background-color: hsl(180, 52%, 96%);

                &:not(:last-child) {
                    margin-right: .8rem;
                }

                &:hover {
                    background-color: hsl(180, 29%, 50%);
                    color: hsl(180, 52%, 96%);
                }
            }
        }
    }

    .job-requirements {
        flex-basis: 100%;
        display: none;
        width: 100%;
        margin: 4.8rem 0 1.6rem 10.5rem;

        @media ${device.tablet} {
            margin: 2.4rem 0 2.4rem 0;
        }

        .content {
            display: flex;

            @media ${device.tablet} {
                display: flex;
                flex-direction: column-reverse;
            }

            .description {
                width: auto;
                color: hsl(180, 29%, 45%);
                font-weight: 500;
                font-size: 1.3rem;
                line-height: 1.95rem;

                p {
                    &:not(:last-child) {
                        margin-bottom: 1.2rem;
                    }
                }
            }  
            
            .job-features {
                min-width: 35rem;
                padding-left: 2.4rem;

                @media ${device.tablet} {
                    min-width: 0;
                    border-top: .1rem solid hsla(180, 29%, 50%, .5);
                }

                @media ${device.tablet} {
                    padding: 2rem 0 0 0;
                    margin-bottom: 2rem;
                }

                h2 {
                    color: hsl(180, 14%, 20%);
                    font-size: 1.6rem;
                }

                .features {
                    @media ${device.mobileS} {
                        display: flex;
                        flex-direction: column;
                    }

                    @media ${device.tablet} {
                        display: flex;
                        flex-wrap: wrap;
                        border-bottom: .1rem solid hsla(180, 29%, 45%, .3);
                    }

                    div {
                        font-size: 1.3rem;
                        padding: 2rem 0 2rem 0;
                        color: hsl(180, 29%, 45%);
                        border-bottom: .1rem solid hsla(180, 29%, 45%, .3);

                        @media ${device.mobileS} {
                            padding: 1.4rem 0 1.4rem 0;
                        }

                        @media ${device.tablet} {
                            border-bottom: none;

                            &:not(:last-child) {
                                margin-right: 1.5rem;
                            }
                        }
    
                        span {
                            color: hsl(180, 14%, 20%);
                        }
                    }
                }
            }
        }

        .apply-job {
            margin-top: 4rem;
            border-radius: .4rem;
            border: none;
            color: white;
            background-color:hsl(180, 29%, 50%);
            transition: background-color .3s ease-in;
            padding: 1.2rem 2.4rem;
            cursor: pointer;

            &:hover {
                background-color: hsl(180, 29%, 60%);
            }

            &:focus {
                outline: none;
            }
        }

        .close-job {
            cursor: pointer;
            position: absolute;
            border: none;
            right: 3rem;
            bottom: 4.5rem;
            padding: .8rem;
            border-radius: .4rem;
            background-color: transparent;
            transition: background-color .3s ease-in;

            @media ${device.tablet} {
                bottom: 4.5rem;
            }

            i {
                pointer-events: none;
                color: hsl(180, 29%, 45%);
                transition: color .3s ease-in;
            }

            &:hover {
                background-color: hsl(180, 29%, 50%);

                i {
                    color: white;
                }
            }

            &:focus {
                outline: none;
            }
        }
    }
`;

export default class JobItem extends React.Component {
    renderBadges = () => {
        const { company } = this.props.jobInfo;

        if (this.props.isNew && this.props.isFeatured) {
            return (
                <div className="badges"> 
                    <span>{company}</span>
                    <span className="badge badge-new">NEW!</span>
                    <span className="badge badge-featured">FEATURED</span>
                </div>
            )
        } else if (this.props.isNew) {
            return (
                <div className="badges"> 
                    <span>{company}</span>
                    <span className="badge badge-new">NEW!</span>
                </div>
            )
        } else if (this.props.isFeatured) {
            return (
                <div className="badges"> 
                    <span>{company}</span>
                    <span className="badge badge-featured">FEATURED</span>
                </div>
            )
        }
    }

    splitDescriptionIntoParagraph = () => {
        const { description } = this.props.jobInfo;

        const paragraphes = description.match(/[^\s.!?]+[^.!?\r\n]+[.!?]*/g)

        const firstParagraph = paragraphes.slice(0, 20).join(' ');
        const secondParagraph = paragraphes.slice(20, 30).join(' ');
        const thirdParagraph = paragraphes.slice(30, paragraphes.length).join(' ');
        
        return (
            <>
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
                <p>{thirdParagraph}</p>
            </>
        )
    }

    onCloseJobClick = e => e.target.parentElement.parentElement.classList.remove('active')

    render() {
        const { logo, position, postedAt, contract, location, role, level, languages, tools } = this.props.jobInfo;

        return (
            <Job onClick={e => e.target.classList.add('active')} 
                 data-role={role} 
                 data-level={level} 
                 data-languages={languages} 
                 data-tools={tools}
            > 
                <div className="main-content"> 
                    <div className="img-box"> <img src={logo} alt="agency" /> </div>
                    <div className="info"> 
                        {this.renderBadges()}
                        <h1 className="position">{position}</h1>
                        <div className="secondary-info"> 
                            {postedAt} &bull; {contract} &bull; {location}
                        </div>
                    </div>
                </div>
                <div className="filters"> 
                    <ul className="filters-list"> 
                        <li className="filters-item" onClick={e => this.props.onFilterClick(e)}>{role}</li>
                        <li className="filters-item" onClick={e => this.props.onFilterClick(e)}>{level}</li>
                        {languages.map(language => <li key={language} className="filters-item" onClick={e => this.props.onFilterClick(e)}>{language}</li>)}
                        {tools.map(tool => <li key={tool}  className="filters-item" onClick={e => this.props.onFilterClick(e)}>{tool}</li>)}
                    </ul>
                </div>
                <div className="job-requirements"> 
                    <div className="content"> 
                        <div className="description">
                            {this.splitDescriptionIntoParagraph()}
                        </div>
                        <div className="job-features">
                            <h2>Job Features</h2>
                            <div className="features">
                                <div>Role: <span>{role}</span></div>
                                <div>Level: <span>{level}</span></div>
                                <div>Location: <span>{location}</span></div>
                                <div>Experience: <span>1 year</span></div>
                                <div>Contract: <span>{contract}</span></div>
                            </div>
                        </div>
                    </div>
                    <button title="apply job" className="apply-job">Apply Job</button>
                    <button title="arrow up" className="close-job" onClick={this.onCloseJobClick}><i className="gg-arrow-up"></i></button>
                </div>
            </Job>
        )
    }
}