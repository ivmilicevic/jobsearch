import React, { Component } from 'react'
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import { Container, Grid } from 'semantic-ui-react';
import axios from 'axios';

// Components
// import SingleItem from '../components/common/SingleItem';
import DetailView from '../components/common/DetailView';
import ItemList from '../components/layout/ItemList';
import SearchOptions from '../components/common/SearchOptions';

// Helpers functions
import removeDuplicates from '../helpers/removeDuplicates';
import isEmpty from '../helpers/isEmpty';

export default class JobSearchView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: [],
            selectedJob: "",
            selectedJobDescription: {
                __html: ""
            },
            selectedCategories: [],
            selectedLocation: "",
            selectedRadius: ""
        }

        this.jobClickHandler = this.jobClickHandler.bind(this);
        this.loadJobByLink = this.loadJobByLink.bind(this);
        this.categoryClickHandler = this.categoryClickHandler.bind(this);
        this.fetchJobListings = this.fetchJobListings.bind(this);
        this.searchButtonHandler = this.searchButtonHandler.bind(this);
        this.dropdownChangeHandler = this.dropdownChangeHandler.bind(this);
    }

    componentDidMount() {
        // Call fetchJobListings on component mount
        this.fetchJobListings();

    }

    fetchJobListings() {
        const keywordsArray = this.state.selectedCategories;
        const location = isEmpty(this.state.selectedLocation) ? "" : this.state.selectedLocation;
        const radius = isEmpty(this.state.selectedRadius) ? "" : this.state.selectedRadius;
        let jobs = [];

        if (typeof keywordsArray !== 'undefined' && keywordsArray.length > 0) {
            // the array is defined and has at least one element
            keywordsArray.forEach((keyword) => {
                axios
                    .post('https://cors-anywhere.herokuapp.com/https://ba.jooble.org/api/336d41a0-2c32-42fe-9a4f-351cda0f1187', {
                        keywords: keyword,
                        location: location,
                        radius: radius

                    })
                    .then((response) => {
                        jobs = jobs.concat(response.data.jobs);
                        // remove duplicates to prevent multiple items with same key
                        jobs = removeDuplicates(jobs);

                        this.setState({ jobs });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        }
        else {
            // array is empty, so get recent job postings
            axios.post('https://cors-anywhere.herokuapp.com/https://ba.jooble.org/api/336d41a0-2c32-42fe-9a4f-351cda0f1187', {
                keywords: " ",
                location: location,
                radius: radius
            })
                .then((response) => {
                    jobs = response.data.jobs;
                    this.setState({ jobs });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    jobClickHandler(id) {
        this.setState(prevState => {
            const job = prevState.jobs.find(job => job.id === id);
            this.loadJobByLink(job.link);

            return {
                selectedJob: job
            };
        });
    }


    loadJobByLink(link) {
        // Scrapes job posting description 
        // Link has format of "https://ba.jooble.org/desc/:ID?ckey=+&rgn=
        // Finds beggining and ending index of id and extracts substring, could be replaced with regular expression
        const firstIndex = link.search("desc/") + "desc/".length;
        const secondIndex = link.search("ckey") - 1;
        const id = link.substring(firstIndex, secondIndex);
        axios.get(`http://ivmilicevic.me/api/jobs/${id}`)
            .then((res) => {
                this.setState({
                    selectedJobDescription: { __html: res.data }
                });
            })
            .catch(err => console.log(err));
    }

    categoryClickHandler(e) {
        this.setState((prevState) => {
            const currentCategories = prevState.selectedCategories;
            if (currentCategories.indexOf(e.key) === -1) {
                // If category isn't already selected add it to end of array
                currentCategories.push(e.key);
            }

            return {
                selectedCategories: currentCategories
            };
        });
    }

    searchButtonHandler = (e) => {
        this.fetchJobListings();
    }

    dropdownChangeHandler = (e, data) => {
        // Each dropdown has className with corresponding state value
        // TODO
        this.setState({ [data.className]: data.value });
    }


    render() {
        const maxHeightStyle = { overflow: 'auto', maxHeight: "calc(100vh - 80px)" };
        return (
            <div>
                <Navbar />
                <Container fluid>
                    <Grid >
                        <Grid.Row >
                            <Grid.Column width={4} style={maxHeightStyle}>
                                <SearchOptions
                                    searchButtonHandler={this.searchButtonHandler}
                                    selectedCategories={this.state.selectedCategories}
                                    selectedLocation={this.state.selectedLocation}
                                    selectedRadius={this.state.selectedRadius}
                                    dropdownChangeHandler={this.dropdownChangeHandler}
                                />
                                <Sidebar
                                    categoryClickHandler={this.categoryClickHandler}
                                />
                            </Grid.Column>
                            <Grid.Column width={4} style={maxHeightStyle}>
                                <ItemList
                                    jobs={this.state.jobs}
                                    jobClickHandler={this.jobClickHandler} />
                            </Grid.Column>
                            <Grid.Column width={8} style={maxHeightStyle}>
                                <DetailView
                                    descriptionHTML={this.state.selectedJobDescription}
                                    job={this.state.selectedJob} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>

            </div>
        )
    }
}
