// const Shimmer = ()=>{
//     return (
//         <div className="shimmercontainer">
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//             <div className="shimmercard">
//                 <div className="shimmer-img"></div>
//                 <div className="shimmer-para"></div>
//                 <div className="shimmer-content"></div>
//                 <div className="shimmer-content"></div>
//             </div>
//         </div>
//     )
// }

// export default Shimmer;

const Shimmer = () => {
    // Create an array with 20 slots, each filled with `null`
    const shimmerCards = Array(20).fill(null);
  
    return (
      <div className="shimmercontainer">
        {shimmerCards.map((_, index) => (
          // Map over the array and return a JSX element for each slot
          <div key={index} className="shimmercard">
            <div className="shimmer-img"></div>
            <div className="shimmer-para"></div>
            <div className="shimmer-content"></div>
            <div className="shimmer-content"></div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Shimmer;
  