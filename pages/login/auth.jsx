import LoginDetails from "../../src/components/LoginDetails"
import SignUpModal from "../../src/components/Modals/SignUpModal"
import SignInModal from "../../src/components/Modals/SignInModal"

const Authentication = () => {
    //....

    return (
        <LoginDetails>
            <div className="container">
                <form>
                    <img src="logotipo-white.png" alt="Logo" />
                    <SignUpModal/>
                    <SignInModal/>
                </form>
            </div>
        </LoginDetails>
    )
}

export default Authentication