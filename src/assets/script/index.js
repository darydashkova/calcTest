window.onload = function () {
    const num = document.querySelectorAll("button");
    const input = document.querySelector(".calc__calculation");
    const result = document.querySelector('.calc-number__item-table-result');
    const del = document.querySelectorAll('.calc-number__item-table-delete');

    num.forEach(item => {
        item.addEventListener('click', e => {
            if (!item.innerHTML.includes('=')) {
                if (input.innerHTML.length != 0 && input.innerHTML.length < 14) {

                    if (item.innerHTML.includes('+') || item.innerHTML.includes('-') || item.innerHTML.includes('/') || item.innerHTML.includes('*')) {
                        if (input.innerHTML.slice(-1) == '+' || input.innerHTML.slice(-1) == '-' || input.innerHTML.slice(-1) == '*' || input.innerHTML.slice(-1) == '/') {} else {
                            input.innerHTML += String(item.innerHTML);

                        }
                    } else {
                        input.innerHTML += String(item.innerHTML);
                    }
                    input.innerHTML = input.innerHTML.replace(/\s/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                } else {

                    if (item.innerHTML.includes('+') || item.innerHTML.includes('-') || item.innerHTML.includes('/') || item.innerHTML.includes('*') || item.innerHTML.includes('.')) {

                    } else {
                        if (input.innerHTML.length != 14) {
                            input.innerHTML = String(item.innerHTML);
                        }

                    }
                }
            }

        });
    })
    result.addEventListener('click', e => {
        const history = document.querySelector(".cacl__history-operations");
        let arrDouble = [];
        let summ = null;
        arrDouble = Array.from(input.innerHTML);
        const copyArr = Array.from(input.innerHTML);
        if (input.innerHTML.slice(-1) == '+' || input.innerHTML.slice(-1) == '-' || input.innerHTML.slice(-1) == '*' || input.innerHTML.slice(-1) == '/') {

            if (arrDouble[arrDouble.length - 1] == '-' || arrDouble[arrDouble.length - 1] == '+' || arrDouble[arrDouble.length - 1] == '/' || arrDouble[arrDouble.length - 1] == '*') {
                arrDouble.splice(arrDouble.length - 1, 1)
                arrDouble = arrDouble.join('').replace(/\s/g, '') 
                console.log(arrDouble)
                summ = eval(arrDouble);
                
            }

        } else {
            if (arrDouble.length > 1) {
                summ = eval(input.innerHTML.replace(/\s/g, ''));
                
            }
        }
        let copyInput = input.innerHTML
        if (copyInput.includes('+')) {
            copyInput = copyInput.replace(/\+/g, ' + ')
        }
        if (copyInput.includes('-')) {
            copyInput = copyInput.replace(/\-/g, ' - ')
        }
        if (copyInput.includes('/')) {
            copyInput = copyInput.replace(/\//g, ' / ')
        }
        if (copyInput.includes('*')) {
            copyInput = copyInput.replace(/\*/g, ' * ')
        }
    let copyArrInput =     copyInput.split(/\+|-|\*|\//)
    if(copyArrInput[copyArrInput.length-1]==' '){
         copyArrInput.pop()
    }

        console.log(Number.isInteger(summ))
        if (!Number.isInteger(summ)) {
            summ = summ.toFixed(5)

        }
        if (copyArrInput.length > 1) {
            let splitDouble = '';
            if(summ.toString().includes('.')){
                splitDouble =    summ.toString().split('.')
                history.innerHTML += '<div>' + copyInput + ' ' + '=' + ' ' + splitDouble[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + '.' + splitDouble[1]+'</div>'
                input.innerHTML = splitDouble[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + '.' + splitDouble[1]
            }  
            else{
               
             history.innerHTML += '<div>' + copyInput + ' ' + '=' + ' ' + summ.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + '</div>'
            input.innerHTML = summ.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')   
            }
            
        }
        else{
            input.innerHTML = summ.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        }

    })
    del.forEach(item => {
        item.addEventListener('click', e => {
            input.innerHTML = ''
        })
    })
}