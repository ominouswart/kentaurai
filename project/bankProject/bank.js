// window.addEventListener('load', _ => {

const firstButton = document.querySelector('header .moveForward .scamMaybe');
const header = document.querySelector('header');
const main = document.querySelector('main');

const html = `
<div class="product">
    <div>
        <div class="fullName">{{fName}}</div>
        <div class="fullName">{{lName}}</div>
        <div class="balance">{{balance}}</div>
    </div>
        <div class="buttons">
            <button type="button" value="{{id}}" class="gray --add">Pridėti lėšų</button>
            <button type="button" value="{{id}}" class="gray --minus">Nuskaičiuoti lėšas</button>
            <button type="button" value="{{id}}" class="gray --delete">Ištrinti</button>
        </div>
</div>
`;



firstButton.addEventListener('click', () => {
    header.style.display = 'none';
    main.style.display = 'flex';
});

const LAST_ID_LS = 'balanceLastSavedId';
    const BALANCES_LS = 'balanceList';
    let destroyId = 0;
    let updateId = 0;


    const listHtml = document.querySelector('.--list');
    const closeButtons = document.querySelectorAll('.--close');
    const createModal = document.querySelector('.modal--create');
    const storeButton = createModal.querySelector('.--submit');
    const createButton = document.querySelector('.newMoney');

    const minusModal = document.querySelector('.modal--minus');
    const minusButton = minusModal.querySelector('.--submit');

    const plusModal = document.querySelector('.modal--plus');
    const plusButton = plusModal.querySelector('.--submit');

    const deleteModal = document.querySelector('.modal--delete');
    const destroyButton = deleteModal.querySelector('.--submit');

    const textContainer = document.getElementById('textContainer');
    const originalText = document.querySelector('.text');



    // function cloneText() {
    //     const clone = originalText.cloneNode(true);
    //     textContainer.appendChild(clone);
    //   }

    //   cloneText();

    //   setInterval(cloneText, 5000);
    



    const getId = _ => {
        const id = localStorage.getItem(LAST_ID_LS);
        if (null === id) {
            localStorage.setItem(LAST_ID_LS, 1);
            return 1;
        }
        localStorage.setItem(LAST_ID_LS, parseInt(id) + 1);
        return parseInt(id) + 1;
    }


    const write = data => {
        localStorage.setItem(BALANCES_LS, JSON.stringify(data));
    }
    
    const read = _ => {
        const data = localStorage.getItem(BALANCES_LS);
        if (null === data) {
            return [];
        }
        return JSON.parse(data);
    }
    
    const storeData = data => {
        const storeData = read();
        data.id = getId();
        data.balance = 0;
        storeData.push(data);
        write(storeData);
    }

    const destroyData = id => {
        const data = read();
        const deleteData = data.filter(d => d.id !== id);
        write(deleteData);

    }

    const updateData = (id, data) => {
        const updateData = read().map(p => p.id == id ? {...data, id} : p);
        write(updateData);
    }

    // ...................................................


    const showModal = modal => modal.style.display = 'flex';

    const hideModal = modal => {
        modal.querySelectorAll('[name]').forEach(i => {
            i.value = '';
        });
        modal.style.display = 'none';
    }

    const showList = _ => {
        let balances = read();
        let sortedData = balances.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
        let productsHtml = '';
        sortedData.forEach(p => {
            let temp = html;
            temp = temp.replaceAll('{{id}}', p.id);
            temp = temp.replaceAll('{{fName}}', p.firstName);
            temp = temp.replaceAll('{{lName}}', p.lastName);
            temp = temp.replaceAll('{{balance}}', '$ ' + p.balance);
            productsHtml += temp;
        });
        listHtml.innerHTML = productsHtml;
        registerDelete();
        registerEditMinus();
        registerEditPlus();
    }

    const prepareDeleteModal = id => {
        const title = read().find(p => p.id == id).lName;
        deleteModal.querySelector('.custName').innerText = title;
    }

    const prepareMinusModal = id => {
        const money = read().find(p => p.id == id);
        minusModal.querySelectorAll('[name]').forEach(i => {
            i.value = money[i.getAttribute('name')];
        });
    }

    const preparePlusModal = id => {
        const money = read().find(p => p.id == id);
        plusModal.querySelectorAll('[name]').forEach(i => {
            i.value = money[i.getAttribute('name')];
        });
    }

    const addBalance = (id, amount) => {
        const data = read();
        const index = data.findIndex(p => p.id === id);
        if (index !== -1) {
            data[index].balance += amount;
            write(data);
            hideModal(plusModal);
            showList();
        }
    }
    
    const subtractBalance = (id, amount) => {
        const data = read();
        const index = data.findIndex(p => p.id === id);
        if (index !== -1) {
            data[index].balance -= amount;
            if (data[index].balance < 0) {
                alert("Saskaita negali eiti i minus");
                return;
            }
            write(data);
            hideModal(minusModal);
            showList();
        }
    }

    // ............................................

    const getDataFromForm = form => {
        const data = {};
        form.querySelectorAll('[name]').forEach(i => {
            data[i.getAttribute('name')] = i.value;
        });
        return data;
    }
    
    const store = _ => {
        const data = getDataFromForm(createModal); 
        storeData(data);  
        hideModal(createModal); 
        showList();  
    }

    const destroy = _ => {
        destroyData(destroyId); 
        hideModal(deleteModal); 
        showList(); 
    }

    const minus = _ => {
        const amount = parseFloat(minusModal.querySelector('[name="balance"]').value);
    if (!isNaN(amount)) {
        subtractBalance(updateId, amount);
    } else {
        alert("Iveskite skaiciu");
    }
}

    const plus = _ => {
        const amount = parseFloat(plusModal.querySelector('[name="balance"]').value);
    if (!isNaN(amount)) {
        addBalance(updateId, amount);
    } else {
        alert("Iveskite skaiciu");
    }
}

    // ......................................

    const registerDelete = _ => {
        document.querySelectorAll('.--delete').forEach(b => {
            b.addEventListener('click', _ => {
                showModal(deleteModal);
                prepareDeleteModal(parseInt(b.value));
                destroyId = parseInt(b.value);
            });
        });
    }

    const registerEditMinus = _ => {
        document.querySelectorAll('.--minus').forEach(b => {
            b.addEventListener('click', _ => {
                showModal(minusModal);
                prepareMinusModal(parseInt(b.value));
                updateId = parseInt(b.value);
            });
        });
    }

    const registerEditPlus = _ => {
        document.querySelectorAll('.--add').forEach(b => {
            b.addEventListener('click', _ => {
                showModal(plusModal);
                preparePlusModal(parseInt(b.value));
                updateId = parseInt(b.value);
            });
        });
    }

    showList();

    // ......................................

    closeButtons.forEach(b => {
        b.addEventListener('click', _ => {
            hideModal(b.closest('.--modal'));
        });
    });

    createButton.addEventListener('click', _ => showModal(createModal));

    storeButton.addEventListener('click', _ => store());

    destroyButton.addEventListener('click', _ => destroy());

    minusButton.addEventListener('click', _ => minus());

    plusButton.addEventListener('click', _ => plus());


// });