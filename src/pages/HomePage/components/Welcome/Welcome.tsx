import { WelcomeComponent } from './styles';

function Welcome() {
    return (
        <>
            <WelcomeComponent>
                <p className=''>Hi, Andrea</p>
                <p className='fw-bold font-24'>What are you looking for today?</p>
            </WelcomeComponent>
        </>
    )
}

export default Welcome;