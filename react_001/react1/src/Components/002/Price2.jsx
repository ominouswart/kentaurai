import Vat from './Vat';

export default function Price2({productPrice, discount = 0, vatColor}) {


    return (
        <>
        <div>
            <span>Price:</span>
            {
                discount === 0 && <b>{productPrice} Eur</b>
                ?
                <b>{productPrice} Eur</b>
                :
                <>
                <b style={{textDecoration: 'line-through', color: 'crimson'}}>{productPrice} Eur</b>
                <br />
                <b style={{color: 'green'}}>{productPrice - discount} Eur</b>
                </>
            }
        </div>
        <Vat productPrice={productPrice - discount} color={vatColor} show={'big'} />
        </>
    )

}