// import Card from "./Card";

// // import style from "styled-components";

// // const ComponenteEstilizado = style.div`
// //     width: 80%;
// //     display: flex;
// //     flex-direction: row;
// //     justify-content: space-around;
// //     background-color: pink;
// //     padding: 1rem;
// //     border: 1px solid palevioletred;
// //     border-radius: 1rem;
// //     gap: 1rem;
// //     margin: 1rem;
// // `;

// // const Card = style.div`
// //     width: fit-content;
// //     padding-left: 1rem;
// //     padding-right: 1rem;
// //     height: 10rem;
// //     background-color: palevioletred;
// //     color: black;
// //     border-radius: 2rem;
// // `;

// function Cards({ characters, onClose }) {
//   // [{...}, {...}, {...}]

//   return (
//     <div>
//       {characters.map(({ id, name, species, gender, image }) => {
//         return (
//           <Card
//             key={id}
//             name={name}
//             species={species}
//             gender={gender}
//             image={image}
//             id={id} //le manda un id al hijo card
//             onClose={() => onClose(id)}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default Cards;
