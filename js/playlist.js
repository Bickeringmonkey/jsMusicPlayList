const playlist = [
    'Bad',
    'La Bamba',
    'What a Wonderful World',
    'At Last',
    'Three Little Birds',
    'The Way You Look Tonight'
  ];
  
  const main = document.querySelector('main')

  // Create a function that provides a list for the array.
  
  function createListItems(arr){
    let items ='';
    for (let i = 0; i < arr.length; i++){
      items += `<li>${ arr[i] }</li>`;
    }
    return items;
  }
  
  // Prints to webpage
  main.innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
  `;
  