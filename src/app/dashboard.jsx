import React, { useState } from 'react';

function Dashboard() {
  const [teste, setTeste] = useState(1);
  return (
    <div>
      Página Teste
      <div>{teste}</div>
      <button onClick={() => setTeste(value => value + 1)}>Incrementa</button>
    </div>
  );
}

export default Dashboard;
