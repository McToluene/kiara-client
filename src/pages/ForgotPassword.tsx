import Background from '../Images/login-placeholder.png';
import ForgotPasswordForm from '../organism/ForgotPasswordForm';

export default function ForgotPassword() {
  return (
    <>
      <div className='flex place-content-evenly justify-center mt-28 gap-32'>
        <div>
          <img src={Background} alt="forgot-password" />
        </div>

        <div>
          <ForgotPasswordForm />
        </div>
      </div>
    </>
  );
}
