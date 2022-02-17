import { RepositoryItem } from './RepositoryItem';
import { useState, useEffect } from 'react';

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

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
          return <RepositoryItem key={repository.name} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
