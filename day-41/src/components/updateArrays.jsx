export default function UpdateArrays() {
    let a = [2,3,4,5];
    console.log(a)
    a.push(6)
    console.log(a)
    a.unshift(1)
    console.log(a)
    a.pop() // svvlin elementig hasna
    console.log(a)
    a.shift() // ehnii elementig hasna
    console.log(a)
    // a.splice(1, 2) // dotorh indexudig songoj ustgana 
    // console.log(a)
    const b = a.slice(1, 2)
    console.log(b)
    console.log(a.reverse())
    
    let c = [1, 2, 3, 11, 12, 23, 100];
    console.log(c)
   
    c.sort()
    console.log(c) // [ 1, 100, 11, 12, 2, 23, 3]
    
    c.sort((a, b) => a - b) // daraallar n sortloh bolwol a - b gene
    console.log(c) // [ 1, 2, 3, 11, 12, 23, 100]

    let d = [1, 2]
    let e = [3, 4]
    const f =  d.concat(e)
    console.log(f) // [1, 2, 3, 4]
    
    e = [...d]
    console.log(e)

    console.log(c.filter(el => el > 5))

    return(
        <div>
            <p>Arrays</p>
        </div>
    )
}