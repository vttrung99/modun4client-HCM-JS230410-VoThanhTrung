import React from 'react'

export default function DropDown() {
    function changeLanguage(lang: string) {
        localStorage.setItem("locales", lang);
        window.location.reload();
    }
    return (
        <div className="dropdown" style={{position: 'absolute', bottom: '70%', right: '0'}}>
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                style={{backgroundColor: 'blue'}}
            >
               Languages
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><span onClick={() => {
                    changeLanguage('vi')
                }} className="dropdown-item">Tiếng Việt</span></li>
                <li><span onClick={() => {
                    changeLanguage('en')
                }} className="dropdown-item">English</span></li>
            </ul>
        </div>
    )
}
