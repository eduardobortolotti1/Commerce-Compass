import { InputWrapper, Input, StyledLock } from './styles'

function InputPassword() {
    return (
        <InputWrapper className="form-group">
            <Input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            {/* <StyledLock /> */}
        </InputWrapper>
    )
}

export default InputPassword;