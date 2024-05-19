"use client";
import Image from 'next/image';
import boardPic from '../../public/notebook with pencil, highlighter pen and papers.svg';
import text from '../../public/Text.svg';
import { loginController } from './controller';

const Login = () => {
  const { username, onChangeUsername, onClickSignIn } = loginController()
  return (
    <div className="sm:flex flex-row-reverse bg-primary-500 justify-between h-full">
      <div className='sm:h-full h-[22rem] bg-primary-300 flex justify-center items-center sm:w-[634px] w-full rounded-tl-lg rounded-bl-lg'>
        <div className=''>
          <div>
            <Image
              src={boardPic}
              alt='boardPic'
              className="sm:h-full"
            />
          </div>
          <div className='flex justify-center'>
            <Image
              src={text}
              alt='text'
              height={24}
              width={96}
            />
          </div>
        </div>
      </div>
      <div className='sm:m-auto sm:w-96 w-full px-2'>
        <h1 className='text-white text-xl font-semibold mb-2'>Sign in</h1>
        <div className='grid'>
          <input
            placeholder='username'
            value={username}
            onChange={onChangeUsername}
            className='text-primary-light my-2 p-2 rounded-lg'
          />
          <button onClick={onClickSignIn} className='bg-success text-white p-2 rounded-lg'>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
