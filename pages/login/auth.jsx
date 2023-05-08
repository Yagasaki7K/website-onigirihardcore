import LoginDetails from "../../src/components/LoginDetails"
import SignUpModal from "../../src/components/Modals/SignUpModal"
import SignInModal from "../../src/components/Modals/SignInModal"

const Authentication = () => {
    //....

    return (
        <LoginDetails>
            <div className="container">
                <div>
                    <img src="logotipo-white.png" alt="Logo" />  {/*Tag img not work..*/}
                    <SignUpModal/>
                    <SignInModal/>
                </div>
            </div>
        </LoginDetails>
    )
}

export default Authentication