import NavBar from "./NavBar";

export default function Layout({children}) {
    return (
        <>
            <NavBar></NavBar>
            <div>{children}</div>
        </>
    );
}