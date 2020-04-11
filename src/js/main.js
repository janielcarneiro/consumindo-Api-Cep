const cep = document.querySelector('#cep');

const showData = (result) => {

    for(const campo in result){

        if(document.querySelector('#'+campo)){

            document.querySelector('#'+campo).value = result[campo];

        }

    }

}

cep.addEventListener('blur', (e)=>{
    let search = cep.value.replace('-', '');
    //passar opcoes
    const options = {

        method: 'GET',
        mode: 'cors',
        cache: 'default'

    }
    //acessar essa (URL);
    fetch(`http://viacep.com.br/ws/${search}/json/`, options).then(response => {

       response.json().then(data => {

            showData(data);
            console.log("dados: ",data);

       }).catch(err => {

            console.log("Error inesperador: ", err);

       })

    }).catch(err => {

        console.log(err);

    });


});