import C from './C';

export default function B() {

    return (
        <div style={
            {
                backgroundColor: 'orange',
                width: '200px',
                height: '200px',
                margin: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }><C /><C /><C /></div>
    );

}