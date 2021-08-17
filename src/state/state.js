import { useEffect, useState } from 'react';
import { 
  getThings, 
  signUp, 
  signIn, 
  starThing, 
  unStarThing 
} from '../services/api.js';

const removeFromStars = (data, userId, thingId) => {
  return data.map(thing => thing.id === thingId
    ? { ...thing, stars: thing.stars.filter(star => star !== userId) }
    : thing
  );
};

const addToStars = (data, userId, thingId) => {
  return data.map(thing => thing.id === thingId
    ? { ...thing, stars: [...thing.stars, userId] }
    : thing
  );
};

const useData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [user, setUser] = useState();

  // function to handle auth
  const login = login => {
    signIn(login)
      .then(res => setUser(res.id))
      .catch(() => setUser(null))
    ;
  };
  
  const signup = login => {
    signUp(login)
      .then(res => setUser(res.id))
      .catch(() => setUser(null))
    ;
  };

  // functions to handle starring
  const star = thingId => {
    setLoading(true);
    const match = data.find(thing => thing.id === thingId);

    if (match.stars.includes(user)) {
      unStarThing({ thingId, userId: user })
        .then(() => setData(removeFromStars(data, user, thingId)))
      ;
    } else {
      starThing({ thingId, userId: user })
        .then(() => setData(addToStars(data, user, thingId)))
      ;
    }
    setLoading(false);
  };

  // useEffects 
  useEffect(() => {
    getThings()
      .then(things => setData(things))
      .finally(() => setLoading(false))
    ;
  }, []);

  return { loading, data, user, login, signup, star };
};

export { useData };
