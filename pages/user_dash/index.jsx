import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DashCreat from '../../src/components/Dashboard/DashCreat';

const PrivatePage = () => {
  const router = useRouter();
  const [value, setValue] = useState('')
 
  useEffect(() => {
    if (typeof window !== 'undefined') {
        const data = sessionStorage.getItem('GoogleAccess');
        setValue(data);
    }
  }, [])

  useEffect(() => {
    if (!value) {
      // Redirecionar o usuário para a página de login
      router.replace('/login');
    } else {
      return (
        <>
          <DashCreat/>
        </>
      )
    }
  }, [value])

  // Renderizar a página privada
  return <div>Conteúdo da página privada</div>;
};

export default PrivatePage;