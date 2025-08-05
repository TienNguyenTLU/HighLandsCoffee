import './application.css'
import AppCard from "./application_card"
export default function App()
{
    const appList = [
        {_id: 1, title: 'HighLand Reward', img: '/reward.png'},
        {_id: 2, title: 'Membership Card', img: '/card.jpg'},
        {_id: 3, title: 'Employment Oppurtunity', img: '/employ.jpg'}
    ]
    return(
        <div className="app-list">
            <ul>
                {appList.map((item) =>
                (
                    <li key={item._id}>
                        <AppCard appType={item}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}