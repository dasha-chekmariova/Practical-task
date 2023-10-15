import { Tables } from "./tables/Tables"
import { Cinema } from "./movie/Cinema";
import './Main.scss';
import { Service } from "./service/Service";

export const Main = () => (
    <main className="main">

    <div className="main-welcome">
        <div className="main-h1">
                <h1>Welcome to your account in Cinema Trustee!</h1>
            </div>

        <div className="main-schedule">
            <h2 className="main-h2">This is your schedule on this week:</h2>

            <Tables />
        </div>
    </div>
        <Cinema />
        <Service />
    </main>
)