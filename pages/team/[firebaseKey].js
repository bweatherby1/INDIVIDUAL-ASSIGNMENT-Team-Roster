import React, { useState, useEffect} from "react";
import { useRouter } from "next/router";
import { viewTeamDetails } from "../../api/1mergedData";

export default function ViewTeam() {
  const [teamDetails, setTeamDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewTeamDetails(firebaseKey).then(setTeamDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={teamDetails.image} alt={teamDetails.name} style={{ width: '300px' }} />
      </div>
        <div>{teamDetails.name}</div> 
        <hr />
        <p>{teamDetails.private && <span>&#10084;<br /></span> }</p>
      </div>
    </div>
  );
}
