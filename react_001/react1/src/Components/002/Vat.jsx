import '../vat.scss';

export default function Vat({color, productPrice, show}) {


    console.log(productPrice, color, show);

    const vat = productPrice/ 100 * 21;

    return (
        <div className={show}>
            <span>
                Vat:</span> 
                <b style={{backgroundColor: color}}>{vat} Eur</b> 
            </div>
    )

}