document.addEventListener('DOMContentLoaded', function() {
    const canva = document.querySelector('canvas');
    const ctx = canva.getContext('2d');

    function randomPosition() {
        return Math.floor(10 + (Math.random() * 30)) * 10;
    }
    let historyMoviment = '';
    let snake = [
        {
            length: 10,
            x: randomPosition(),
            y: randomPosition()
        }
    ];

    let fruitX = randomPosition();
    let fruitY = randomPosition();

    function generateSnake() {
    
        snake.forEach(item => {
            ctx.fillRect(item.x,item.y,item.length,item.length);
        })
    }
    generateSnake();
    ctx.fillStyle = "red";
    ctx.fillRect(fruitX,fruitY,10,10);

    function snakeMoveLeft() {
        let [cabeca,...body] = snake;
        console.log(cabeca,snake);
        let bruno = body.map((item,key,vet) => {
            
            if(key == 0) {
                item.x = cabeca.x;
                item.y = cabeca.y;
                return item;
            } else {
                item.x = vet[key - 1].x;
                item.y = vet[key - 1].y;
                return item;
            }
            
            
        });
        cabeca.x -= 10;
        snake = [cabeca,...bruno];
        ctx.clearRect(0,0,400,400);
        
        ctx.fillStyle = "black";
        generateSnake();
        ctx.fillStyle = "red";
        ctx.fillRect(fruitX,fruitY,10,10);
    
    }

    function snakeMoveRight() {
        let [cabeca,...body] = snake;
        let bruno = body.map((item,key,vet) => {
            if(key == 0) {
                item.x = cabeca.x
                item.y = cabeca.y
                return item;
            } else {
                item.x = (vet[key - 1].x)
                item.y = (vet[key - 1].y)
                return item;
            }

            
        });
        cabeca.x += 10;
        snake = [cabeca,...bruno];
        ctx.clearRect(0,0,400,400);
        ctx.fillStyle = "black";
        generateSnake();

        ctx.fillStyle = "red";
        ctx.fillRect(fruitX,fruitY,10,10);
        
    }

    function snakeMoveTop() {
        let [cabeca,...body] = snake;
        let bruno = body.map((item,key,vet) => {
            if(key == 0) {
                item.x = cabeca.x
                item.y = cabeca.y
                return item;
            } else {
                item.x = (vet[key - 1].x)
                item.y = (vet[key - 1].y)
                return item;
            }

            
        });
        cabeca.y -= 10;
        snake = [cabeca,...bruno];
        ctx.clearRect(0,0,400,400);
        ctx.fillStyle = "black";
        generateSnake();
        
        ctx.fillStyle = "red";
        ctx.fillRect(fruitX,fruitY,10,10);
    }

    function snakeMoveBottom() {
        let [cabeca,...body] = snake;
        let bruno = body.map((item,key,vet) => {
            if(key == 0) {
                item.x = cabeca.x
                item.y = cabeca.y
                return item;
            } else {
                item.x = (vet[key - 1].x)
                item.y = (vet[key - 1].y)
                return item;
            }

            
        });
        cabeca.y += 10;
        snake = [cabeca,...bruno];
        ctx.clearRect(0,0,400,400);
        ctx.fillStyle = "black";
        generateSnake();
        ctx.fillStyle = "red";
        ctx.fillRect(fruitX,fruitY,10,10);
    }
    
    function colision() {
        if(snake[0].x < 0 || snake[0].y < 0 || snake[0].x > 390 || snake[0].y > 390) {
            alert('Perdeu');
        }
    }

    function eat() {
        if(snake[0].x == fruitX && snake[0].y == fruitY) {
            ctx.clearRect(0,0,400,400);
            fruitX = randomPosition();
            fruitY = randomPosition();
            snake.push({
                length: 10,
                x: snake[snake.length - 1].x,
                y: snake[snake.length - 1].y
            })
            ctx.fillStyle = "black";
            generateSnake();
            ctx.fillStyle = "red";
            ctx.fillRect(fruitX,fruitY,10,10);
        }
    }


    document.addEventListener('keypress', function(event) {
        if(event.key == 'd') {
            historyMoviment = 'd';
            snakeMoveRight();
        } 

        if(event.key == 'a') {
            historyMoviment = 'a';
            snakeMoveLeft();
        }

        if(event.key == 'w') {
            historyMoviment ='w';
            snakeMoveTop();
        }

        if(event.key == 's') {
            historyMoviment = 's';
            snakeMoveBottom();
        }

        colision();

        eat();    
    });
})