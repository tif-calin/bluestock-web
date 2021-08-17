const API = 'https://floating-plains-94010.herokuapp.com/api/v1';
//const API = 'http://localhost:7890';

const signUp = async login => 
  await fetch(
    `${API}/auth/signup`, 
    { 
      method: 'POST', 
      body: JSON.stringify(login),
      headers: { 'Content-Type': 'application/json' }
    }
  ).then(res => res.json())
;

const signIn = async login => 
  await fetch(
    `${API}/auth/login`,
    { 
      method: 'POST', 
      body: JSON.stringify(login),
      headers: { 'Content-Type': 'application/json' }
    }
  ).then(res => res.json())
;

const getThings = async () => 
  await fetch(`${API}/things/`).then(res => res.json())
;

const starThing = async star => 
  await fetch(
    `${API}/stars`, 
    { 
      method: 'POST', 
      body: JSON.stringify(star),
      headers: { 'Content-Type': 'application/json' } 
    }
  ).then(res => res.json())
;

const unStarThing = async ({ thingId, userId }) => {
  console.log(thingId, userId);
  return await fetch(
    `${API}/stars/${thingId}/${userId}`,
    { 
      method: 'DELETE'
    }
  ).then(res => res.json());
};

export { signUp, signIn, getThings, starThing, unStarThing };
