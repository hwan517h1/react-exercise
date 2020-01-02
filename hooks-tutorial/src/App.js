import React, { useCallback, useState } from 'react';
import Info from './Info';


const App = () => {
  const [ visible, setVisible ] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        { visible ? 'Unvisible' : 'Visible' }
      </button>
      <hr />
      { visible && <Info /> }
    </div>
  );
}

export default App;
