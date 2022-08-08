// {
//     posts && posts.map(post => (
//         <div key={post?.id}>
//             <a href={post?.slug}>
//                 <h1>{post?.title}</h1>
//                 <p>{post?.body}</p>
//                 <p>{post?.body2}</p>
//                 <p>{post?.body3}</p>
//                 <p>{post?.body4}</p>
//                 <p>{post?.body5}</p>
//                 <img src={post?.image}></img>
                
//                 {
//                     post?.ytid ? 
//                     <iframe width="555" height="480" src={'https://www.youtube.com/embed/' + post?.ytid} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null
//                 }
//             </a>
//         </div>
//     ))
// }