import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h2>This is the Root of the element</h2>
            <Outlet />
        </div>
    );
};

export default Root;