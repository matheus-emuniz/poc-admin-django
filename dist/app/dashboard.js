import React, { useState } from 'react';
function Dashboard() {
    const [teste, setTeste] = useState(1);
    return (React.createElement("div", null,
        "P\u00E1gina Teste",
        React.createElement("div", null, teste),
        React.createElement("button", { onClick: () => setTeste(value => value + 1) }, "Incrementa")));
}
export default Dashboard;
