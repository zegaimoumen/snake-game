let inputDirection = { x: 0 , y: 0};
let lestInputDirection = { x: 0 , y: 0};

window.addEventListener("keydown" , e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lestInputDirection.y !== 0) break
            inputDirection = { x: 0 , y: -1};
            break;
        case 'ArrowDown':
            if (lestInputDirection.y !== 0) break
            inputDirection = { x: 0 , y: 1};
            break;
        case 'ArrowLeft':
            if (lestInputDirection.x !== 0) break
            inputDirection = { x: -1 , y: 0};
            break;
        case 'ArrowRight':
            if (lestInputDirection.x !== 0) break
            inputDirection = { x: 1 , y: 0};
            break;    
    }
})

export function getInputDirection () {
    lestInputDirection =  inputDirection;
    return inputDirection;
}