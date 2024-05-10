const firstButton = document.querySelector('header .moveForward .scamMaybe');
const header = document.querySelector('header');
const main = document.querySelector('main');

const html = `
<div class="product">
    <div>
        <div class="fullName">{{allName}}</div>
        <div class="balance">{{balance}}</div>
    </div>
        <div class="buttons">
            <button type="button" value="{{id}}" class="gray --add">Pridėti lėšų</button>
            <button type="button" value="{{id}}" class="gray --edit">Nuskaičiuoti lėšas</button>
            <button type="button" value="{{id}}" class="gray --delete">Ištrinti</button>
        </div>
</div>
`;


window.addEventListener('load', _ => {
firstButton.addEventListener('click', () => {
    header.style.display = 'none';
    main.style.display = 'flex';
});

const LAST_ID_LS = 'productsLastSavedId';
    const PRODUCTS_LS = 'productsList';
    let destroyId = 0;
    let updateId = 0;


    const closeButtons = document.querySelectorAll('.--close');
    const createModal = document.querySelector('.modal--create');
    const storeButton = createModal.querySelector('.--submit');
    const createButton = document.querySelector('.newMoney');

    const minusModal = document.querySelector('.modal--minus');
    const plusModal = document.querySelector('.modal--plus');
    const updateButton = editModal.querySelector('.--submit');

    const deleteModal = document.querySelector('.modal--delete');
    const destroyButton = deleteModal.querySelector('.--submit');

    



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
        localStorage.setItem(PRODUCTS_LS, JSON.stringify(data));
    }
    
    const read = _ => {
        const data = localStorage.getItem(PRODUCTS_LS);
        if (null === data) {
            return [];
        }
        return JSON.parse(data);
    }
    
    const storeData = data => {
        const storeData = read();
        data.id = getId();
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
        let productsHtml = '';
        read().forEach(p => {
            let temp = html;
            temp = temp.replaceAll('{{allName}}', p.fullName);
            temp = temp.replaceAll('{{balance}}', p.balance);
            productsHtml += temp;
        });
        listHtml.innerHTML = productsHtml;
        registerDelete();
        registerEdit();
    }

    const prepareDeleteModal = id => {
        const title = read().find(p => p.id == id).productTitle;
        deleteModal.querySelector('.product--name').innerText = title;
    }

    const prepareUpdateModal = id => {
        const product = read().find(p => p.id == id);
        editModal.querySelectorAll('[name]').forEach(i => {
            i.value = product[i.getAttribute('name')];
        });
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
        const data = getDataFromForm(createModal);  //  CRUD
        storeData(data);  // LS
        hideModal(createModal);  // DOM
        showList();  // DOM
    }

    const destroy = _ => {
        destroyData(destroyId);  // LS
        hideModal(deleteModal); // DOM
        showList(); // DOM
    }

    const update = _ => {
        const data = getDataFromForm(editModal);
        updateData(updateId, data);
        hideModal(editModal);
        showList();
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

    const registerEdit = _ => {
        document.querySelectorAll('.--edit').forEach(b => {
            b.addEventListener('click', _ => {
                showModal(editModal);
                prepareUpdateModal(parseInt(b.value));
                updateId = parseInt(b.value);
            });
        });
    }

    // ......................................

    closeButtons.forEach(b => {
        b.addEventListener('click', _ => {
            hideModal(b.closest('.--modal'));
        });
    });

    createButton.addEventListener('click', _ => showModal(createModal));

    storeButton.addEventListener('click', _ => store());

    destroyButton.addEventListener('click', _ => destroy());

    updateButton.addEventListener('click', _ => update());


});