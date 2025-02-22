function clock() {
    const dt = new Date();
    let h = dt.getHours();
    let m = dt.getMinutes();
    let s = dt.getSeconds();

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    //date
    let month = dt.toLocaleString('en', { month: 'long' });
    let weekDay = dt.toLocaleString('en', { weekday: 'long' });
    let day = dt.getDate();
    let year = dt.getFullYear();

    document.getElementById('time').innerText = `${h} : ${m} : ${s}`
    document.getElementById('date').innerText = `${day} ${month} ${year}` 
    document.getElementById('day').innerText = `${weekDay}`
}


setInterval(clock, 1000)