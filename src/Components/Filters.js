import React from 'react';
import styled from 'styled-components';

import { device } from '../breakpoints';

import deleteIcon from '../images/delete-icon-white.svg'

const FiltersContainer = styled.div`
    width: 100%;
    min-height: 6.5rem;
    border-radius: .4rem;
    display: none;
    align-items: center;
    margin-top: -8rem;
    padding: 1.6rem 3rem;
    background-color: hsl(180, 52%, 96%);
    box-shadow: 1rem 1rem 4rem hsla(180, 29%, 50%, .2);

    @media ${device.mobileS} {
        padding: 3rem;
    }

    .filter-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        li {
            display: flex;
            align-items: center;

            @media ${device.tablet} {
                margin-top: .8rem;
                margin-bottom: .8rem;
            }

            &:not(:last-child) {
                margin-right: 1.5rem;
            }
            
            .content {
                padding: .8rem .6rem;
                font-size: 1.2rem;
                font-weight: 700;
                color: hsl(180, 29%, 50%);
                border-radius: .4rem 0 0 .4rem;
                transition: all .3s ease;
                background-color: hsl(180, 31%, 95%);
            }

            .icon-box {
                background-color: hsl(180, 29%, 50%);
                border-radius: 0 .4rem .4rem 0;
                padding: .4rem .5rem;
                transition: all .3s ease;
                height: 2.8rem;
                cursor: pointer;

                &:hover {
                    background-color: hsl(180, 14%, 20%);
                }

                .icon {
                    pointer-events: none;
                    height: 1.8rem;
                }
            }

            
        }
    }

    .btn-clear {
        font-size: 1.2rem;
        font-weight: 700;
        color: hsl(180, 29%, 50%);
        background-color: transparent;
        margin-left: auto;
        border: none;
        padding: .8rem .6rem;
        cursor: pointer;

        &:focus {
            outline: none;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default class Filters extends React.Component {
    componentDidUpdate() {
        const filtersContainer = document.querySelector('.filter-list').parentElement;

        if (this.props.filters.length > 0) {
            filtersContainer.style.display = 'flex'
        } else {
            filtersContainer.style.display = 'none'
        }
    }

    render() {
        return (
            <FiltersContainer> 
                <ul className="filter-list">
                    {this.props.filters.map(filter => {
                        return (
                            <li key={filter} className="filter-item">
                                <div className="content">{filter}</div>
                                <div className="icon-box" onClick={this.props.onDeleteFilterClick}>
                                    <img className="icon" src={deleteIcon} alt="delete-icon" />
                                </div>
                            </li> 
                        )
                    })}
                </ul>  
                <button className="btn-clear" onClick={this.props.onClearFilters}> Clear </button> 
            </FiltersContainer>
        )
    }
}