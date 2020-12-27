// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.For example:


const domainName = url => {
  let arr = url.split("://")
  return arr[arr.length - 1].replace(/www./, '').replace(/\..*$/, "")
}

console.log(domainName("http://google.com"))//, "google");
console.log(domainName("http://google.co.jp"))//, "google");
console.log(domainName("www.xakep.ru"))//, "xakep");
console.log(domainName("https://youtube.com"))//, "youtube");