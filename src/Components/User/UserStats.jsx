import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../Api';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    async function getData() {
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  return (
    <div>
      <Head title="Estatísticas" />
    </div>
  );
};

export default UserStats;
