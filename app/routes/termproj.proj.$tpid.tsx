import Index from "./_index";
import {MyTeamProject} from "./data/termproject";
import { Link, useParams } from "@remix-run/react";

export default function ProjView(){
    const { tpid } = useParams();

    const tpTmp = MyTeamProject.filter((item)=> {
    return item.tpID === Number(tpid)
    }).map((tp0bj,Index)=>
    <>
    <p>รหัสโปรเจค : {tp0bj.tpID}</p>
    <p>รายชิวา : {tp0bj.tpSubject}</p>
    <p>รายละเอียด : {tp0bj.tpDesc}</p>
    <Link to={`/termproj/projlist`}>Back</Link>
    </> 
    );

    if(tpTmp.length === 0){
        return "***ไม่พบข้อมูลโปรเจค***"
    }
    
    return(
        <>
        คุณเลือกข้อมูลโปรเจ็ครายวิชา : { tpid }
        {tpTmp}
        </>
    );
}