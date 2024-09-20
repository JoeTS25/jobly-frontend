import React, { useState, useEffect } from "react";
import SearchForm from "../Forms/SearchForm";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";


function JobList() {
    const [jobs, setJobs] = useState(null);

    useEffect(function getAllJobs() {
        SearchForm();
    }, []);

    async function search(title) {
        let job = await JoblyApi.getJobs(title);
        setJobs(job);
    }

    return (
        <div>
            <SearchForm searchFor={search} />
            {jobs.length ? <JobCardList jobs={jobs} />
                         : <p>No results found</p>}
        </div>
    );
}

export default JobList;