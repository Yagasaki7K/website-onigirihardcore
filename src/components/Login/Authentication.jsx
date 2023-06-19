import LoginDetails from "../LoginDetails";
import SignUpModal from "../Modals/SignUpModal";
import SignInModal from "../Modals/SignInModal";

const Authentication = () => {
    return (
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
    );
};

export default Authentication;
