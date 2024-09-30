function createHelloWorld(){
    return function sayhello(){
        return "Hello World"
    }
}

const f = createHelloWorld()
f();
