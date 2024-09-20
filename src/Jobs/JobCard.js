import React, { useContext, useState} from "react";
import UserContext from "../auth/UserContext";
import "./JobCard.css";

function JobCard({ id, title, salary, equity, companyName}) {
    const { hasApplied, apply } = useContext(UserContext);
    const [applied, setApplied] = useState();

    React.useEffect(function updateAppStatus() {
        console.debug("JobCard useEffect updateAppliedStatus", "id=", id);

        setApplied(hasApplied(id));
    }, [id, hasApplied]);

    /* Apply for job */
    async function handleApp(evt) {
        if (hasApplied(id)) return;
        apply(id);
        setApplied(true);
    }

    return (
       <div className="JobCard card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{companyName}</p>
            {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
            {equity !== undefined && <div><small>Equity: {equity}</small></div>}
            <button className="btn btn-danger float-right"
                    onClick={handleApp}
                    disabled={applied}>
                        {applied ? "Applied": "Apply"}
                    </button>
        </div>
       </div>
    )
}

/*Make better format for the salaries */

function formatSalary(salary) {
    const digitsRev = [];
    const salaryStr = salary.toString();
  
    for (let i = salaryStr.length - 1; i >= 0; i--) {
      digitsRev.push(salaryStr[i]);
      if (i > 0 && i % 3 === 0) digitsRev.push(",");
    }
  
    return digitsRev.reverse().join("");
  }

export default JobCard;