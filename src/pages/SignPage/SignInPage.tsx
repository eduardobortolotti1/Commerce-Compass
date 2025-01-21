import SignInForm from '../../components/Form/SignInForm.tsx';
import { SignPage } from '../styles.ts';
import Intro from './components/Intro.tsx';

function SignInPage() {
    return (
        <SignPage className="screen color-white text-center">
            <Intro />
            <SignInForm />
        </SignPage>

    )
}

export default SignInPage;

// TODO: Add proper Mail and Lock icons in Sign screen