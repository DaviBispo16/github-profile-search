import React, {useState} from 'react';
import './App.css';
import { FaGithub } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!username) return;
    try {
      const {data} = await axios.get(`https://api.github.com/users/${username}`);
      setUser(data);
      setError('');
    } catch {
      setUser(null)
      setError(`Nenhum perfil foi encontrado com esse nome de usuário.\nTente novamente`)
    }
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
        <div className='main'>
        <input
          type='text'
          placeholder='Digite um usuário do Github'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button>
          <FaSearch size={24}/>
        </button>
        </div>

        {error && ( 
          <div className='container-error'>
            <p className='error'>{error}</p>
          </div>
          )}

        {user && (
          <div className='profile-container'>
            <div className='profile-card'>
              <img className='profile-avatar' src={user.avatar_url} alt={`${user.name || user.login}'s Avatar`}/>
            </div>
            <div className='profile-details'>
              <h2 className='profile-name'>{user.name || user.login}</h2>
              <p className='profile-bio'>
                {user.bio || 'Este usuário não possui uma biografia'} 
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;

