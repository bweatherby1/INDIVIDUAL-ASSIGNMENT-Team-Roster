/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark
    " variant="dark" className="nav">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand><img src="https://media.istockphoto.com/id/1138228321/vector/goat-illustration.jpg?s=612x612&w=0&k=20&c=KlAgXvS7NNJg5uYLohsOh_c-ppgH7DLQHxTK7zKbJZc=" alt="my image" id="logo" /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/teams">
              <Nav.Link>Team</Nav.Link>
            </Link>
            <Link passHref href="/members">
              <Nav.Link>Players</Nav.Link>
            </Link>
            <Link passHref href="/member/new">
              <Nav.Link>Add Player</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
