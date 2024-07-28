import React, { useState, useEffect } from "react";
import "../../styles/DependencyArray.css";

export default function DependencyArray() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error:", error));
  }, [userId]);

  return (
    <div className="container">
      <h1>User Data</h1>
      <button onClick={() => setUserId(userId + 1)}>Load Next User</button>
      {userData && (
        <div className="user-data">
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Username: {userData.username}</p>
          <p>Street: {userData.address.street}</p>
          <p>Lat: {userData.address.geo.lat}</p>
        </div>
      )}
    </div>
  );
}
