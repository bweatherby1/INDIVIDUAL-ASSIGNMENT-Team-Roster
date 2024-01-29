import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getTeams } from '../api/teamData';
import TeamCard from '../components/TeamCard';

export default function Teams() {

  const [teams, setTeams] = useState([]);

  const { user } = useAuth();
  
  const getAllTheTeams = () => {
    getTeams(user.uid).then(setTeams);
  };
  
  useEffect(() => {
    getAllTheTeams();
   }, []);
  
  return (
<div>

  <div className="text-center d-flex flex-column justify-content-center align-content-center">
    {teams.map((team) => (
    <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getAllTheTeams} />
      ))}
  </div>
  
</div>
  );
}

// <div className="text-center my-4">
    //<Link href="/team/new" passHref>
      //  <Button>Add A Team</Button>
    // </Link>
  // </div>
