import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function DirectorContainer() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then((res) => res.json())
      .then(setDirectors);
  }, []);

  function addDirector(newDirector) {
    setDirectors([...directors, newDirector]);
  }

  function updateDirector(updatedDirector) {
    const updated = directors.map((d) =>
      d.id === updatedDirector.id ? updatedDirector : d
    );
    setDirectors(updated);
  }

  return (
    <div>
      <h1>Directors</h1>
      <Outlet context={{ directors, addDirector, updateDirector }} />
    </div>
  );
}

export default DirectorContainer;
