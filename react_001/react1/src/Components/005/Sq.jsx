export default function Sq({s, rotateSq}) {
    return (
        <div onClick={_ => rotateSq(s.id)} className='sq' style={{
            backgroundColor: s.color + '66',
            borderColor: s.color,
            transform: `rotate(${s.rotate}deg)`
        }}>
            {s.id}
        </div>
    )
}