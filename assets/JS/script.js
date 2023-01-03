function Calculadora() {

    this.display = document.querySelector('.display'); // valores de entradas e resultados
    this.display2 = document.querySelector('.display-2'); // operação

    this.inicia = (el) => {
        this.display2.disabled = true;
        this.display.value = '0';
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () =>{
        this.display.addEventListener('keyup', e => {
          if (e.keyCode === 13){
            this.realizaConta();
          }
        });
      };

    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.addNumberDisplay(el);
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-clear-last')) this.clearLast();
            if (el.classList.contains('btn-eq')) this.realizaConta();

        });



    };

    this.realizaConta = () => {

        try {
            const conta = eval(this.display.value);

            this.display2.value = `${this.display.value} =`;
            this.display.value = conta;



        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };

    this.addNumberDisplay = (el) => { 

        if (this.display.value === '0') {
            this.display.value = el.innerText;
            this.display.focus();
        } else if (this.display.value > '0') {
            this.display.value += el.innerText;
            this.display.focus();
        } else if (this.display.value !== Number) {
            this.display.value = '0';
        }
    }


    this.del = () => {

        if (this.display.value.length > 0){
            this.display.value = this.display.value.slice(0, -1);
        }
        
        if (this.display.value.length === 0 ) {
            this.display.value = '0';
            this.display2.value = '';
        }
        
    }
    this.clear = () => {
        this.display.value = '';
        this.display2.value = '';
        this.display.value = '0';

    }


    this.clearLast = () => {

        const conta = eval(this.display.value);
        this.display.value = `${this.display.value}`
        this.clear();
        this.display2.value = conta;
        this.display.value = '0';

    }

}

const calculadora = new Calculadora();
calculadora.inicia();

