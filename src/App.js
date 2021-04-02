
import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question, setQuestion] = useState(data)

  return (
    <main>
      <SingleQuestion question={question} />
    </main>
  )
}

export default App;