import { Input, StyledMail } from './styles'

function InputEmail() {
    return (
        <div className="form-group" style={{marginBlockEnd: "20px"}}>
            <Input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            {/* <StyledMail /> */}
        </div>
    )
}

export default InputEmail;