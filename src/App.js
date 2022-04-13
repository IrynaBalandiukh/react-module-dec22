import {useState} from "react";

import {SelectedUser, Users} from "./components";

const App = () => {
    const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
        {selectedUser && <SelectedUser user={selectedUser}/>}
        <Users getUser={setSelectedUser}/>
    </div>
  );
}

export default App;
