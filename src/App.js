import React, {useState} from 'react';
import './App.css';
import { FaGithub } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

function App() {
  const [username, setUsername] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!username) return;
  }  
  return (
    <div className='app'>
      <header className='header'>
        <FaGithub size={48}/>
        <h1>
          Perfil <strong>GitHub</strong>
        </h1>
      </header>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Digite um usuário do Github'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button>
          <FaSearch size={18}/>
        </button>

      </form>
    </div>
  );
}

export default App;

