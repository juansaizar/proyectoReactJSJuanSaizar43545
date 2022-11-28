
const products = [
    {id: 1, category: 'Box Temática', name: 'EGRESADOS', description: 'sarsarzasasazaraza', picture: 'img...', price: 5000},
    {id: 2, category: 'Box Happy', name: 'BOX HAPPY', description: 'sarsarzasasazaraza', picture: 'img...', price: 2000},
    {id: 3, category: 'Accesorios Festejo', name: 'GUIRNALDA', description: 'sarsarzasasazaraza', picture: 'img...', price: 500}
    ];

export const gFetch = () => {
    return new Promise((res, rej) => {
        let condition = true
        if (condition){
        setTimeout(() => {
            res(products)
        }, 3000)
        } else {
        rej('Algo salió mal...')
        }
    })
};