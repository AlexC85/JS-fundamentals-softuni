function cone (radius, height){
    let volume = 0;
    let area = 0;
    let l = Math.sqrt((radius*radius) + (height * height))
    //volume = h pi r(kvadrat) vyrhu 3
    //area = pi r(kvadrat) + pi r l
    volume = (height * Math.PI * radius * radius) / 3;
    area = (Math.PI * radius * radius) + Math.PI * radius * l;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5)