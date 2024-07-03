import React, { useState } from 'react';

function Dashboard() {
  const [teste, setTeste] = useState(1);
  return (
    <>
      aaaaa
      <div>{teste}</div>
      <button onClick={() => setTeste(value => value + 1)} />
    </>
  );
}

export default Dashboard;
