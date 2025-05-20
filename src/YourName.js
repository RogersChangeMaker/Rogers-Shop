function WhatIsYourName(props){

    return <div className="card" style={`color{props.color}`}>
        <p>{(props.uname).toUpperCase()}</p>
        <p className="date">{props.date}</p>

    </div>

}

export default WhatIsYourName