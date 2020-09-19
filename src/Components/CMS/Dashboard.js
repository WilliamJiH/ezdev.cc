import React from 'react';

const Dashboard = ({ handleLogout }) => {

  return (
    <section className="Dashboard">
      <h2>Welcome, you have signed in!</h2>
      <button onClick={handleLogout}>Sign Out</button>
    </section>
  );
}

export default Dashboard;