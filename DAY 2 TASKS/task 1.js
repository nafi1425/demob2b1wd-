var obj = [
{ person: "Name 1", age: "2", company: "GUVI" },
{ person: "Name 2", age: "5", company: "GUVI geek" },
{ person: "Name 3", age: "8", company: "GUVI geek network" },
];
for(let i =0;i<obj.length;i++)
{
console.log(obj[i]);
}
for(var property of obj)
{
console.log(property);
}
for(var property in obj)
{
console.log(obj[property]);
}
obj.forEach(key => console.log(key));
