(async (url = '//cpv2api.herokuapp.com/pens/public/giovanni0918') => {

  try {
    const response1 = await fetch(`${url}?page=1`), response2 = await fetch(`${url}?page=2`);
    const page1 = await response1.json(), page2 = await response2.json();
    const data = [...page1.data, ...page2.data];    
    console.log(data);
    
  } catch (error) {
    console.warn(error);
  }

})();