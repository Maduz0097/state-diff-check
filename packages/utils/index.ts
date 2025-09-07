const userGenerator = (userCount:number,randomness:number) => {
    return Array.from({ length: userCount }, (_, i) => ({
        id: i,
        name: `User ${i + 1}`,
        online: Math.random() > randomness
    }))
}


export {userGenerator}