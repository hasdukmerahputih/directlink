// random directlink
var pages = [

    "https://www.highcpmrevenuenetwork.com/mkpiq8n7xp?key=30d1cd19b1f1b082e62655d89697c607",
    "https://www.highcpmrevenuenetwork.com/eqj2iir6a?key=ef8e4afd379af09c997226c5669c4b0d",
    "https://www.highcpmrevenuenetwork.com/y2zywvx6?key=1913df17f2e84ef9fe8bdcd130e989e7",
    "https://www.highcpmrevenuenetwork.com/djydb9ks?key=d66cdeea54c8f96568b5ce8b0fe7962e",
    "https://www.highcpmrevenuenetwork.com/nirwh0k802?key=b93d710b8c542087b11c2267b4cf67c4",
    "https://www.highcpmrevenuenetwork.com/pad4jp7f?key=7f296bbf03c2ca904ee3c49e8f73c54b",
    "https://www.highcpmrevenuenetwork.com/w55sctn0n6?key=fb8ba1e17dd9b704e5e7545f8c85f245",
    "https://www.highcpmrevenuenetwork.com/mz1s4xrzf?key=6ff028eee450819df8255463934ac4a8",
    "https://www.highcpmrevenuenetwork.com/sjcp3tq4?key=458d412a571e19007b30a8ddddf33296",
    "https://www.highcpmrevenuenetwork.com/x5akjr4ix?key=f40e5c2122303efe92b7ed103c6121a8",

];

function randomPage() {
    return pages[Math.round(Math.random() * (pages.length - 1))];
}
location.href = randomPage();
