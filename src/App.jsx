import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import LetterForm from './components/LetterForm/LetterForm.jsx';
import { Route, Routes } from 'react-router';
import { useState } from 'react'



const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState ([]);
    const addBox = (newMailbox) => {
      const newMailboxWithId = {
        ...newMailbox,
        _id: mailboxes.length + 1,
      };  
      setMailboxes((prevMailboxes) => [...prevMailboxes, newMailbox]);
    };

    const addLetter= (setLetters) => {
      setLetters((prevLetters) => [...prevLetters, newLetter]);
    }

  return (
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>} />
      <Route path='/mailboxes' element={<Mailbox />} />
      <Route path='/new-mailbox' element={<MailboxForm />} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
    </Routes> 
  );
};

export default App;
