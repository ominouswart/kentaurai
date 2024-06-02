import B from './B';
import D from './D';


export default function A() {

    return (
        <div style={
            {
                backgroundColor: 'orangered',
                width: '600px',
                height: '600px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }><B /><B />
        <D />
        </div>
    );

}