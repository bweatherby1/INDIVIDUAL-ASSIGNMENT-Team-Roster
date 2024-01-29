import { deleteMember, getMembersByTeam, getSingleMember } from "./memberData";
import { deleteSingleTeam, getSingleTeam } from "./teamData";

const viewMemberDetails = (memberFirebaseKey) => new Promise((resolve, reject) => {
  getSingleMember(memberFirebaseKey)
    .then((memberObject) => {
      if (memberObject && memberObject.team_id) {
        getSingleTeam(memberObject.team_id)
          .then((teamObject) => {
            resolve({ teamObject, ...memberObject });
          })
          .catch(reject);
      }
    })
    .catch(reject);
});

const viewTeamDetails = (teamFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleTeam(teamFirebaseKey), getTeamMembers(teamFirebaseKey)])
    .then(([teamObject, teamMembersArray]) => {
      resolve({ ...teamObject, books: teamMembersArray });
    }).catch((error) => reject(error));
});

const deleteTeamMembers = (teamId) => new Promise((resolve, reject) => {
  getMembersByTeam(teamId).then((membersArray) => {
    console.warn(membersArray, 'Team Members');
    const deleteMemberPromises = membersArray.map((member) => deleteMember(member.firebaseKey));

    Promise.all(deleteMemberPromises).then(() => {
      deleteSingleTeam(teamId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewMemberDetails, viewTeamDetails, deleteTeamMembers };
