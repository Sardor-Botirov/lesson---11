// Задача 1

// Клиент пишет цену которая ей подходит 
// функция находит продукт под цену клиента 
// если таковой не имеется то продукты ниже этой цены

let arr = [
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'B1',
        price: 10,
        ml: 2000,
        qt: 100
    },
    {
        vitamine: 'B2',
        price: 14,
        ml: 3000,
        qt: 50
    },
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'domozlov',
        price: 100,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'B1',
        price: 10,
        ml: 2000,
        qt: 100
    },
    {
        vitamine: 'B2',
        price: 14,
        ml: 3000,
        qt: 50
    },
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'domozlov',
        price: 100,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'B1',
        price: 10,
        ml: 2000,
        qt: 100
    },
    {
        vitamine: 'B2',
        price: 14,
        ml: 3000,
        qt: 50
    },
    {
        vitamine: 'c',
        price: 5,
        ml: 1000,
        qt: 60
    },
    {
        vitamine: 'domozlov',
        price: 100,
        ml: 1000,
        qt: 60
    }
]

let client_anser = +prompt('client_anser')

function search(p1, p2) {
    for (let item of p2) {
        let temp = []
        if (item.price === p1) {
            console.log(item);
        }
        else {
            if (item.price < p1) {
                temp.push(item)
                console.log(...temp, 'temp');
            } 
        }

    }
}

search(client_anser, arr)