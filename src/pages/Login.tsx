import LoginBackground from '../Images/login-placeholder.png';
import LoginForm from '../organism/LoginForm';

export default function Login() {
  return (
    <>
      <div className='flex justify-center items-center mt-28 gap-32'>
        <div className='hidden md:block'>
          <img src={LoginBackground} alt="forgot-password" />
        </div>
        <div>
        <LoginForm />
        </div>
      </div>
    </>
  );
}
