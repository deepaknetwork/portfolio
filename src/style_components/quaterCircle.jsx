export default function QuarterCircle(props) {
    const topCircle={
        height: `${props.data.size}px`,
         width:`${props.data.size}px`,
        border: `${props.data.color} ${props.data.border}px solid`,
    }
    const inCircle={
        height: `${props.data.size-(props.data.size/2.4)}px`,
         width:`${props.data.size-(props.data.size/2.4)}px`,
        border: `${props.data.color} ${props.data.border}px solid`,
    }
    const topLine={
        height: `${props.data.border}px`,
        backgroundColor: `${props.data.color}`
    }
    const inLine={
        width: `${props.data.border}px`,
        backgroundColor: `${props.data.color}`
    }
    return (
        <div style={topCircle} className="top_circle">
            <div style={inCircle} className="in_circle"></div>
            <div style={topLine} className="top_line"></div>
            <div style={inLine} className="left_line"></div>
        </div>
    );
}