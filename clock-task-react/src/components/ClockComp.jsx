import "../style/ClockComp.css";
export function Clock(props){
    console.log(props);
    const {time} = props;
    // const currentTime = props.props
    return(
        <div id="clock-container">
            <div>Current Time 
                <p>{time}</p>
            </div>
        </div>
    )
}