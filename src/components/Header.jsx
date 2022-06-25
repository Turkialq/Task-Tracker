import Button from "./Button";
import Tasks from "./Tasks";
const Header = ({ title, showform, buttontext }) => {
    // const onClick = () => {
    //     console.log('clicked')
    // }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={showform} color={`${!buttontext ? 'green' : 'red'}`} text={`${!buttontext ? 'add' : 'close'}`} />

        </header>
    )
}


export default Header;



