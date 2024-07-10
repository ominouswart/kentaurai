import { useState } from "react";

const useRegister = _ => {

    const [errors, setErrors] = useState({});

    const setServerErrors = err => {
        setErrors(err);
    }

    const validate = form => {

        const errorsBag = {};
        if (form.name.length <= 3) {
            errorsBag.name = 'Vardas per trumpas. Minimalus ilgis - 3 simboliai'
        }

        if (!/\S+@\S+\.\S+/.test(form.email)) {
            errorsBag.email = 'El. paste formatatas neteisingas'
        }

        if (form.psw.length <= 8) {
            errorsBag.psw = 'Slaptazodis per trumpas. Minimalus ilgis 8 simboliai';
        } else if (!/[0-9]/.test(form.psw)) {
            errorsBag.psw = 'Slaptazodis turi tureti bent viena skaitmeni';
        } else if (!/[a-z]/.test(form.psw)) {
            errorsBag.psw = 'Slaptazodis turi tureti bent viena mazaja raide';
        } else if (!/[A-Z]/.test(form.psw)) {
            errorsBag.psw = 'Slaptazodis turi tureti bent viena didziaja raide';
        }

        if (form.psw !== form.psw2 && !errorsBag.psw) {
            errorsBag.psw = 'Slaptazodziai turi sutapti';
            errorsBag.psw2 = 'Slaptazodziai turi sutapti';
        }


        if (Object.keys(errorsBag).length === 0) {
            setErrors({});
            return true;
        }
        setErrors(errorsBag);
        return false;

    }




    return { errors, validate, setServerErrors }
}

export default useRegister;