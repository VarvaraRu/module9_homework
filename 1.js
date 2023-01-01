let parser = new DOMParser(); 

let xmlInformation = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
` ; 

let xmlDOM = parser.parseFromString (xmlInformation, 'text/xml'); 

let student = xmlDOM.querySelectorAll('student');

let result = {list: []};

let list = [];
student.forEach(item => {
  result.list.push({
      name: `${item.querySelector('first').textContent} ${item.querySelector('second').textContent}`,
      age: `${item.querySelector('age').textContent}`,
      prof: `${item.querySelector('prof').textContent}`, 
      lang: `${item.querySelector('name').getAttribute('lang')}`
  })
});

console.log (result); 

//Скажите, пожалуйста, важен ли порядок выведения элементов в ответе и, если да, 
// то как поправить, потому что у меня имя выходит предпоследним, а не первым элементом...