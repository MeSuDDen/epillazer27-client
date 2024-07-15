import {PropsWithChildren} from "react";
import style from "./Layout.module.scss";

export default function Layout({ children } : PropsWithChildren) {
    return (
        <div className={style.layout}>
            {children}
        </div>
    )
}