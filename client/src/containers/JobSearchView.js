import React, { Component } from 'react'
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import { Container, Grid } from 'semantic-ui-react';
import axios from 'axios';

// Components
// import SingleItem from '../components/common/SingleItem';
import DetailView from '../components/common/DetailView';
import ItemList from '../components/layout/ItemList';

// Helpers functions
import removeDuplicates from '../helpers/removeDuplicates';

export default class JobSearchView extends Component {
    constructor(props) {
        super(props);

        this.jobClickHandler = this.jobClickHandler.bind(this);
        this.loadJobByLink = this.loadJobByLink.bind(this);
        this.categoryClickHandler = this.categoryClickHandler.bind(this);
        this.removeCategoryHandler = this.removeCategoryHandler.bind(this);
        this.fetchJobListings = this.fetchJobListings.bind(this);
        this.categorySearchHandler = this.categorySearchHandler.bind(this);
    }

    state = {
        jobs: [],
        selectedJob: "",
        selectedJobDescription: {
            __html: ""
        },
        selectedCategories: []
    }

    componentDidMount() {
        // Call fetchJobListings on component mount
        this.fetchJobListings();

    }

    fetchJobListings() {
        const keywordsArray = this.state.selectedCategories;
        let jobs = [];

        if (typeof keywordsArray !== 'undefined' && keywordsArray.length > 0) {
            // the array is defined and has at least one element
            console.log("fetchJobListings - Inside multiple category search");
            keywordsArray.forEach((keyword) => {
                axios.post('https://cors-anywhere.herokuapp.com/https://ba.jooble.org/api/2347891c-4970-4bb3-b09f-a64a469ce1aa', {
                    keywords: keyword,
                    // location: 'mostar'
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
            console.log("fetchJobListings - Recent posts");
            axios.post('https://cors-anywhere.herokuapp.com/https://ba.jooble.org/api/2347891c-4970-4bb3-b09f-a64a469ce1aa', {
                keywords: " ",
                location: 'mostar'
            })
                .then((response) => {
                    // console.log("Recent jobs - response", response.data.jobs);
                    jobs = response.data.jobs;
                    // console.log("Recent jobs - Jobs", jobs);
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

    categorySearchHandler(value) {
        console.log(value);
        // categoryClickHandler expects input in format of {object}.key = value
        this.categoryClickHandler({ key: value })
    }


    loadJobByLink(link) {
        // Scrapes job posting description 
        // Link has format of "https://ba.jooble.org/desc/:ID?ckey=+&rgn=
        // Finds beggining and ending index of id and extracts substring, could be replaced with regular expression
        const firstIndex = link.search("desc/") + "desc/".length;
        const secondIndex = link.search("ckey") - 1;
        const id = link.substring(firstIndex, secondIndex);
        axios.get(`http://localhost:5000/api/jobs/${id}`)
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
        }, this.fetchJobListings);
    }

    removeCategoryHandler(category) {
        // console.log(category);
        this.setState((prevState => {
            const currentCategories = prevState.selectedCategories;
            const elementIndex = currentCategories.indexOf(category.category);
            // console.log("Element index", elementIndex, "selected Categories", this.state.selectedCategories);
            if (elementIndex > -1) {
                // If category exists delete it from array by splicing at elementIndex and deleting one
                currentCategories.splice(elementIndex, 1);
            }

            return {
                selectedCategories: currentCategories
            }
        }), this.fetchJobListings);

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
                                <Sidebar
                                    categoryClickHandler={this.categoryClickHandler}
                                    selectedCategories={this.state.selectedCategories}
                                    removeCategoryHandler={this.removeCategoryHandler}
                                    categorySearchHandler={this.categorySearchHandler}
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
