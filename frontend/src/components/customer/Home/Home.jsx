import React from "react";
import { EventsCarousel } from "../index";
import "./home.css";

export function Home () {
    return (
        <section className={"main-home"}>
            <section className={"home"}>
                <article className={"jumbotron"}>
                    <h1>Bienvenue sur le projet FabLab</h1>
                    <p>
                        Retrouvez le code source du projet <a className={"btn btn-info"} href={"https://github.com/nicode-io/Fabulab"}>ICI</a>
                    </p>
                    <p>
                        Pour toute question relative au projet <a className={"btn btn-info"} href={"mailto:fablab@nicode.io"}>EMAIL</a>
                    </p>
                </article>
                <article>
                    <EventsCarousel />
                </article>
            </section>
        </section>
    )
}