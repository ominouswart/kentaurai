import Sq from './Sq';

export default function SqBin({sq, rotateSq}) {
    return (
        <div className='sq-bin'>
            {
                sq.map((s) => <Sq s={s} key={s.id} rotateSq={rotateSq} />)
            }
        </div>
    )
}