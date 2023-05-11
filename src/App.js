// import './App.css';
// import { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     // axios
//     //   .get('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then((response) => {
//     //     setData(response.data);
//     //   });
//     const response = await axios.get(
//       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=acf9e73561524f419e8879c500be81f1',
//     );
//     setData(response.data);
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  return (
    <>
      <Categories />
      <NewsList />;
    </>
  );
};

export default App;
