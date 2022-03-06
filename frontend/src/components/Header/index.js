import './index.css';

const Header = ({title = "Robot Market"}) => {
    return (
        <div className='robot-header'>
            <div className="container">
                <h1>{title}</h1>   
            </div>
        </div>
    )
}

export default Header;