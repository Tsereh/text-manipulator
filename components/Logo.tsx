export default function Logo() {
    return (
        <div>
            <span className="logo-text">Text</span>
            <span className="logo-manipulator">Manipulator</span>
            <style jsx>{`
                div {
                    padding: 4px;
                    margin: 4px;
                    font-weight: 100;
                    font-size: 1.4rem;
                    user-select: none;
                }
                div span {
                    padding: 4px;
                }
                .logo-manipulator {
                    color: #fff;
                    background-color: #000;
                }
            `}</style>
        </div>
    )
}