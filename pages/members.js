import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { getMembers } from "../api/memberData";
import { useAuth } from "../utils/context/authContext";
import MemberCard from "../components/MemberCard";


export default function Members() {

  const [members, setMembers] = useState([])
  const { user } = useAuth();
  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllMembers();
  }, [])

  return (
    <div className="text-center my-4">
    <h1>Your GOATS!!!</h1> <hr />
      
      <div>
        {members.map((member) => 
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
        )}
        </div>
        <Link href="/member/new" passHref>
        <Button>Add New Player</Button>
      </Link>
      </div>
  );
};
