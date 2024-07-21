import React from "react";

export default function UserProfile(props) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Age:</strong> {props.age}
      </p>
      <p>
        <strong>Email:</strong> {props.email}
      </p>
    </div>
  );
}
