import logo from "../assets/raft-labs.png";

const Logo = () => {
    return (
        <div>
            {" "}
            <img
                style={{ width: "45px", height: "45px" }}
                src={logo}
                alt="RaftLabs Logo"
            />
        </div>
    );
};

export default Logo;
