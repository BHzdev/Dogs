import React from 'react';
import { PASSWORD_RESET } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';

const LoginPasswordReset = () => {
  const { login, setLogin } = React.useState('');
  const { key, setKey } = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const login = params.get('login');
    const key = params.get('key');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit() {
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      passoword: password.value,
    });
    await request(url, options);
  }
  return (
    <div>
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default LoginPasswordReset;
