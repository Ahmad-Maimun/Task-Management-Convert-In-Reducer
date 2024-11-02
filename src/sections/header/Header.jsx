/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import { MdOutlineLightMode } from "react-icons/md";
function Header() {
    let [theme, setTheme] = useState(false);

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="py-4 border-b dark:border-gray-600">
            <Container className="flex justify-between items-center">
                <a className="text-2xl font-bold text-indigo-700" href="https://github.com/Ahmad-Maimun" target="blank">
                    Ahmad Maimun
                </a>
                <MdOutlineLightMode onClick={() => setTheme(!theme)} className={`text-2xl cursor-pointer ${theme && "text-white"}`} />
            </Container>
        </div>
    );
}

export default Header;