export default function Select({onChange, value, name, options = [], errors = {}}) {

    return (
        <>
        <div className="error-text"><span className={errors[name] ? 'show' : ''}>{errors[name] ?? ''}</span></div>
        
        <select className={errors[name] ? 'error' : ''} onChange={onChange} value={value} name={name}>
            {
                options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)
            }
        </select>

        </>
    );
}