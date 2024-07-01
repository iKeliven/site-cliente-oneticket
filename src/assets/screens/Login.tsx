import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';

export default function Login() {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login === 'admin' && password === 'oneticket2024') {
      navigate('/oneticket');
    } else {
      setError('Invalid login or password');
    }
  };

  return (
    <main className="flex p-0 m-0 w-[100vw] h-[100vh] justify-between">
      <div className="flex flex-col gap-5 p-10 justify-center w-[50vw] items-center">
        <img src='./logo-black.png' className='w-[200px]'/>
        <Heading size='medium'>Login</Heading>
        <Text size='medium'>Digite login e senha para entrar na página de administrador</Text>
        <TextField
            className="w-[80%]"
          label="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          
        />
        <TextField
          className="w-[80%]"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        {error && <div className="text-red-500">{error}</div>}
        <Button variant="contained" onClick={handleLogin}
        sx={{
            boxShadow: 'none',
            backgroundColor: '#FF9800',
            color: '#fff',
            width: '200px',
            padding: '5px',
            border: 'none',
            '&:hover': {
            fontWeight: 'bold', // Deixa o texto em negrito no hover
            backgroundColor: '#FF9800', // Mantém a cor de fundo no hover
            },}}
        >
          Login
        </Button>
      </div>
      <div className="flex w-[50vw] p-0 m-0 h-[100%]">
        <img
          className="w-[100%] object-cover"
          
          src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Show"
        />
      </div>
    </main>
  );
}
