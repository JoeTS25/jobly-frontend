import React, { useState, useEffect} from "react";
import JoblyApi from "../api/api";
import SearchForm from "../Forms/SearchForm";
import CompanyCard from "./CompanyCard";

function Companies() {
    // function to search for companies
    const [companies, setCompanies] = useState(null);

    useEffect(function getCompanies() {
        search();
    }, []);
    
    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    return (
        /* if the searched company exists, return all the company info
           if not, return results not found */
        <div>
            <SearchForm searchFor={search} />
            {companies.length ? (
                <div>
                    {companies.map(c => (
                        <CompanyCard
                            key={c.handle}
                            handle={c.handle}
                            name={c.name}
                            description={c.description}
                            logoUrl={c.logoUrl} />
                    ))}
                </div>
            ) : <p className="lead">No Results Found</p>}
        </div>
    )
}

export default Companies;