import LoginDetails from "../LoginDetails";
import SignUpModal from "../Modals/SignUpModal";
import SignInModal from "../Modals/SignInModal";
import Login from "../../../pages/login";

const Authentication = () => {
    return (
        <Login>
            <LoginDetails>
                <div className="container">
                    <div>
                        <img src="logotipo-white.png" alt="Logo" />{" "}
                        {/*Tag img not work..*/}
                        <SignUpModal />
                        <SignInModal />
                    </div>
                </div>
            </LoginDetails>
        </Login>
    );
};

export default Authentication;
