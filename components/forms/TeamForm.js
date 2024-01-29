import React, { useEffect, useState} from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../utils/context/authContext";
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { updateTeam, createTeam } from "../../api/teamData";

const initialState = {
  image: '',
  name: '',
  private: false,
};

function TeamForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj && obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateTeam(formInput).then(() => router.push(`/team/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createTeam(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateTeam(patchPayload).then(() => {
          router.push('/teams');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj && obj.firebaseKey ? 'Update' : 'Create'} Team</h2>

            <FloatingLabel controlId="floatingInput1"  className="mb-3"  label="Team Name">
        <Form.Control
          type="name"
          placeholder="Team Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
          autocomplete='off'
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="Team Logo" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="private"
        name="private"
        label="Private?"
        checked={formInput.private}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            private: e.target.checked,
          }));
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj && obj.firebaseKey ? 'Update' : 'Create'} Team</Button>
    </Form>
  );
}

TeamForm.propTypes = {
  obj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    private: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

TeamForm.defaultProps = {
  obj: initialState,
};

export default TeamForm;
