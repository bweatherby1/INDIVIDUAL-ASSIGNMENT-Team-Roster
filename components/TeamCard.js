import React from "react";
import PropTypes from 'prop-types';
import Link from "next/link";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function TeamCard({ teamObj, onUpdate }) {
  
  //const deleteThisTeam = () => {
    //if (window.confirm(`Delete ${teamObj.name}?`)) {
      //deleteTeamMembers(teamObj.firebaseKey).then(() => onUpdate());
    //}
  //};

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={teamObj.image} alt={teamObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{teamObj.name}</Card.Title>
        <p>{teamObj.favorite && <span>&#10084;<br /></span> }</p>
        <Link href={`/team/${teamObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/team/edit/${teamObj.firebaseKey}`} passHref>
          <Button>EDIT</Button>
        </Link>
        <Button variant="danger" //onClick={deleteThisTeam} 
        className="m-2"
        >
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

TeamCard.propTypes = {
  teamObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    private: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
