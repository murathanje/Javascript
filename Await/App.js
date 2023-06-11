
// document.querySelector("#button").addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1") 
//     .then(response => response.json())
//     .then((post)=>{
//         // console.log(post.body);
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then(response => response.json())
//         .then((comment)=>{
//             console.log(comment.body)
//         })
//     })
// })


// ASync Await
document.querySelector("#button").addEventListener("click",async ()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()

    const comment = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()

    console.log(comment);
})