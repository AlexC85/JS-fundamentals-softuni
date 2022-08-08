function gramophone(band, album, song){
    //(albumName.length * bandName.length) * song-name.length / 2
    let duration = ((album.length * band.length) * song.length / 2)
    let rotation = Math.ceil(duration / 2.5)
    console.log(`The plate was rotated ${rotation} times.`)
    
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')