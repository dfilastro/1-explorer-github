import { RepositoryItem } from './RepositoryItem';
import { useState, useEffect } from 'react';

import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  // Um array vazio na "dependência" do useEffet, faz com que a função seja executada uma única vez
  // Se utilizar o useEffet sem o segundo parâmetro, ele vai executar a função infinitamente

  useEffect(() => {
    fetch('https://api.github.com/users/dfilastro/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, [repositories]);

  return (
    <section className='repository-list'>
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem repository={repository} />;
        })}
      </ul>
    </section>
  );
}
