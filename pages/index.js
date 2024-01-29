import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import TeamCard from '../components/TeamCard';
import { getTeams } from '../api/teamData';

function Home() {
  const [teams, setTeams] = useState([])
  const { user } = useAuth();
  const getAllTeams = () => {
    getTeams(user.uid).then(setTeams);
  };
  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    > <hr />
      <h1>New England Grass Smackers</h1>
      <h3>EAT GRASS!!</h3> <hr />
      <div className="d-flex flex-wrap" id="teamCard">
        {teams.map((team) => 
          <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getAllTeams} />
        )}
      </div>
      
    </div>
  );
}

export default Home;
