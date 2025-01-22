import SignUpForm from '../../components/Form/SignUpForm.tsx';
import { SignPage } from './styles.ts';
import Intro from './components/Intro.tsx';

function SignUpPage() {
    return (
        <SignPage className="screen color-white text-center">
            <Intro />
            <SignUpForm />
        </SignPage>

    )
}

export default SignUpPage;

// TODO: Add proper Mail and Lock icons in Sign screen