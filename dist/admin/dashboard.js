import React, { useState } from 'react';
function Dashboard() {
    const [teste, setTeste] = useState(1);
    return (React.createElement(React.Fragment, null,
        "aaaaa",
        React.createElement("div", null, teste),
        React.createElement("button", { onClick: () => setTeste(value => value + 1) })));
}
export default Dashboard;
