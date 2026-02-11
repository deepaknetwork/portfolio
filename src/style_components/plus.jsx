import './style.css';

export default function Plus(props){
    const plusStyle={
        height: `${props.data.size}px`,
        width: `${props.data.size}px`,
    }
    const pluscolor={
        backgroundColor:`${props.data.color}`,
    }

    return (
        <div className="plus" style={plusStyle}>
            <div className='plus1' style={pluscolor} ></div>
            <div className='plus2' style={pluscolor}></div>
        </div>
    )
}