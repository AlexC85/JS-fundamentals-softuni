function songs(arr){
    arr.shift();
    let genre = arr.pop();
class Song{
constructor(type, name, length){
    this.type = type;
    this.name = name;
    this.length = length;
}
sing(){
    if(genre == this.type || genre == 'all'){
    console.log(this.name);
    }
}
}
let songs = [];
for (let el of arr){
    let token = el.split("_");
    let type = token[0];
    let name = token[1];
    let length = token[2];
    let mySong = new Song(type, name, length); 
    songs.push(mySong);
}
for (let el of songs){
    el.sing()
}
}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])