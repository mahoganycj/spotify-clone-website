import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import useRefreshToken from '../hooks/useRefreshToken';

const Login = () => {
  const router = useRouter();
  const { code } = useParams();
  useRefreshToken(code as string);

  return (
    <div>
      
    </div>
  )
}

export default Login;