const jsonString= `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
   `;

   const data = JSON.parse(jsonString);
   const list = data.list;
   let result=[] ;

   list.forEach(element => {
    let person= {
        name: element.name,
        age: element.age,
        prof: element.prof
    };
     result.push(person);
   });

   console.log("result", result);
   