import React, { useState, useEffect }from "react";
import { useRouter } from "next/router";
import { viewMemberDetails } from "../../api/1mergedData";

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewMemberDetails(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={memberDetails.image} alt={memberDetails.name} style={{ width: '300px' }} /><hr />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {memberDetails.name} <hr />
          {memberDetails.teamObject?.name}<hr />
          {memberDetails.position}
        </h5>
        
      </div>
    </div>
  );
}
