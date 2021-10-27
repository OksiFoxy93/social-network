import { preloaderStyle } from "../../UsersPage/UsersPage.module.css";
import preloader from "../../../assetc/image/preloader.svg";
import React from "react";

export default function Preloader() {
    return (<div className={preloaderStyle}>
        <img src={preloader} alt='loader' />
    </div>)
}