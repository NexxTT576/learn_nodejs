const urlString = "https://www.baidu.com:443/path/index.html?id=2#tag=3";
const obj = new URL(urlString);
console.log(obj);
console.log(obj.searchParams.get("id"));
