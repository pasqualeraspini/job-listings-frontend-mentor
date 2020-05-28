import React from 'react';
import styled from 'styled-components';
import data from './database/data';

import { device } from './breakpoints';

import JobItem from './Components/JobItem';
import Filters from './Components/Filters';
import Error from './Components/Error';

import desktopBG from './images/bg-header-desktop.svg';

const Header = styled.div`
    width: 100%;
    height: 15rem;
    background-image: url(${desktopBG});
    background-color: hsl(180, 29%, 50%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const Container = styled.div`
    max-width: 114rem;
    margin: 5rem auto;

    @media ${device.mobileS} {
        padding: 0 2rem 0 2rem;
    }

    & > ul {
        margin-top: 3.5rem;        
    }

    .error {
        margin: 1.6rem;
        font-size: 1.2rem;
        color: red;
    }
`;



export default class App extends React.Component {
    state = { filters: [], jobs: [...data] }

    onFilterClick = e => {
        if (this.state.filters.includes(e.target.textContent)) {
            return Error('error', 'Filter is already added')
        }

        // Add to the state the filters array
        this.setState({ filters: [...this.state.filters, e.target.textContent] });

        // Filtering jobs based on filter values
        const filteredJobs = this.state.jobs.filter(job => {
            return job.role === e.target.textContent ||
                   job.level === e.target.textContent ||
                   job.languages.some(lang => lang === e.target.textContent) ||
                   job.tools.some(tool => tool === e.target.textContent)
        })

        // Update state to re-render the filtered jobs
        this.setState({ jobs: [...filteredJobs] })
    }

    onDeleteFilterClick = e => {
        if (e.target.classList.contains('icon-box')) {
            // Delete from the state array the value of the filter clicked
            const filtersOnDelete = this.state.filters.filter(filter => filter !== e.target.parentElement.children[0].textContent)

            // Update the filters array in the state
            this.setState({ filters: [...filtersOnDelete]})

            // Filtering jobs based on filtersOnDelete values
            const jobsOnDeleteFilter = data.filter(job => {
                return filtersOnDelete.every(filter => {
                    return filter === job.role ||
                           filter === job.level ||
                           job.languages.includes(filter) ||
                           job.tools.includes(filter) 
                })
            })

            if (filtersOnDelete.length === 0) {
                return this.setState({ jobs: [...data] })
            }

            // Update the filters array in the state to re-render
            this.setState({ jobs: [...jobsOnDeleteFilter]})
        }      
    }

    onClearFilters = () => {
        this.setState({ filters: [] })
        this.setState({ jobs: [...data] })
    }

    // Show jobs from the database
    showJobs = () => this.state.jobs.map(job => {
        return <JobItem 
                    key= {job.id} 
                    onFilterClick= {this.onFilterClick} 
                    jobInfo = {job} 
                    isNew = {job.new}
                    isFeatured = {job.featured}
                />
    })

    render() {
        return (
            <>
                <Header />
                <Container>
                    <Filters 
                        filters={this.state.filters} 
                        onDeleteFilterClick={this.onDeleteFilterClick} 
                        onClearFilters={this.onClearFilters}
                    />
                    <ul className="job-list">
                        {this.showJobs()}
                    </ul>
                </Container> 
            </>
        )
    }
}