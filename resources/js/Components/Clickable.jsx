function Clickable({ handleClick, title, children, ...rest }) {
    return (
        <button {...rest} onClick={(e) => handleClick(e)}>
            {children}
        </button>
    );
}

export default Clickable;
