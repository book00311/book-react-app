import { Link } from "@remix-run/react";
import { MyTeamProject } from "./data/termproject";
export default function ter(){
    return(
        <>
    <h1>ข้อมูลโปรเจค</h1>
    <p>
      {
        MyTeamProject.map((tp0bj,index) =>
            <li key={index}>
                โปรเจควิชา {tp0bj.tpSubject} --
            <Link to={`/termproj/proj/${tp0bj.tpID}`}>View</Link>    
            </li>
    
    )
    }
    </p>
        </>
    );
}