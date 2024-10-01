import "../style/ClockComp.css";
export function Clock(props){
    const currentTime = props.props
    return(
        <div id="clock-container">
            <div>Current Time 
                <p>{currentTime}</p>
            </div>
        </div>
    )
}