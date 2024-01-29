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
    <Card style={{ width: '80%', margin: '10px' }}>
      <Card.Img variant="top" src={teamObj.image} alt={teamObj.name} style={{ height: '100%' }} />
      <Card.Body>
        <Card.Title>{teamObj.name}</Card.Title>
        <p>{teamObj.private && <span>&#9989;<br /></span> }</p>
        <Link href={`/members`} passHref>
          <Button variant="primary" className="m-2">VIEW PLAYERS</Button>
        </Link>
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
