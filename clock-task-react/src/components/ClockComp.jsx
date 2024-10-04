import "../style/ClockComp.css";
export function Clock(props){
    console.log(props);
    const {currentTime} = props;
 
    return(
        <div id="clock-container">
            <div>Current Time 
                <p>{currentTime}</p>
            </div>
        </div>
    )
}