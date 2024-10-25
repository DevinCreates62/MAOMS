let drlg = document.getElementById("drlg")

function lou(){
    drlg.animate([{
        transform: "rotate(180deg)"
    }, 
    {
        transform: "rotate(185deg) translateY(-20px)"
    },
    {
        transform: "rotate(185deg) translateY(-25px) scale(1.2)"
    }
    ],
    {
        duration: 300,
        easing: "linear",
        iterations: 10,
        direction: "alternate",
    }
    )};
