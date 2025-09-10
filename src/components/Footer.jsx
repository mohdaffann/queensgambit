import React from "react";

function Footer() {
    const openGit = () => {
        window.open('https://github.com/mohdaffann', '_blank')
    }
    const openLin = () => {
        window.open('https://www.linkedin.com/in/muhammad-affan-anass/', '_blank')
    }
    return (
        <div className="border-t border-gray-300 flex items-center justify-center gap-3 mb-8 mt-3">
            <span className="text-base text-gray-300 mt-4">Made by Muhammad Affan</span>
            <div className="flex items-center justify-center gap-3 mt-4">
                <button className="flex items-center justify-center hover:opacity-75 transition-opacity cursor-pointer"
                    aria-label="Github Profile"
                    onClick={openGit}
                >
                    <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF" className="h-6 w-6" alt="" />
                </button>
                <button className="flex items-center justify-center hover:opacity-75 transition-opacity cursor-pointer"
                    aria-label="Linkedin Profile"
                    onClick={openLin}
                >
                    <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Footer;
