export const test = async (a : Number): Promise<string> => {
    if(a === 0) {
        const res = await Promise.resolve('hello')
        return res
    }
    return 'world'
}


test(0).then(res=>{
    console.log(res)
})