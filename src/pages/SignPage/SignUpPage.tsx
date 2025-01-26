import SignUpForm from '../../components/Form/SignUpForm.tsx';
import { SignPage } from './styles.ts';
import Intro from './components/Intro.tsx';

function SignUpPage() {
    return (
        <SignPage className="text-center">
            <Intro />
            <SignUpForm />
        </SignPage>

    )
}

export default SignUpPage;
