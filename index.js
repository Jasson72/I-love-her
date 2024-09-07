const animationTimeline = () => {
    const textBoxChars = document.getElementsByClassName("textbox-chat")[0];
    const hbd = document.getElementsByClassName("selamat")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split('')
    .join('</span><span>')}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
    .split('')
    .join('</span><span>')}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: '15deg'
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: '-15deg'
    } 
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".nama", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".deskripsi-nama", 0.4, {
        opacity: 0,
        y: 10  
    })
    .to(".nama",0.7,{
        opacity: 0,
        y: 10
    }, "+=3.5")
    .to(".deskripsi-nama", 0.7,{
        opacity: 0,
        y: 10
    }, "-=1")
    .from('.step-dua', 0.7, {
        opacity: 0,
        y: 10
    })
    .to ('.step-dua', 0.7, {
        opacity: 0,
        y: 10
    }, '+=3')
    .from('.step-tiga', 0.7, {
        opacity: 0,
        y: 10
    })
    .to ('.step-tiga', 0.7, {
        opacity: 0,
        y: 10
    }, '+=3')
    .from('.step-empat', 0.7, {
        opacity: 0,
        y: 10
    })
    .to ('.step-empat', 0.7, {
        opacity: 0,
        y: 10
    }, '+=3')
    .from('.step-lima', 0.7, {
        opacity: 0,
        scale: 0.2
    })
    .from('.fake-button', 0.3, {
        opacity: 0,
        scale: 0.2
    })
    .staggerTo('.textbox-chat span', 1.5, {
        visibility: 'visible'
    }, 0.05)
    .to ('.fake-button', 0.1, {
        backgroundColor: 'rgb(127, 206, 248)'
    }, '+=4')
    .to ('.step-lima', 0.5, {
        opacity: 0,
        scale: 0.2,
        y: -150
    }, '+=1')
    .from('.teks-satu', 0.7, ideaTextTrans)
    .to('.teks-satu', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.teks-dua', 0.7, ideaTextTrans)
    .to('.teks-dua', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.teks-tiga', 0.7, ideaTextTrans)
    .to(".teks-tiga strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to('.teks-tiga', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.teks-empat', 0.7, ideaTextTrans)
    .to('.teks-empat', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.teks-lima', 0.7, {
        rotationX: 15,
        rotationZ: -10,
        skewY: '-15deg',
        y: 50,
        z: 10,
        opacity: 0
    }, '+=1.5')
    .to('.teks-lima span', 0.7, {
        rotation: 90,
        x: 8
    }, '+=1.4')
    .to('.teks-lima', 0.7, {
        opacity: 0,
        scale: 0.2
    }, '+=2')
    .staggerFrom('.teks-enam span', 0.8, {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
    }, 0.2)
    .staggerTo('.teks-enam span', 0.8, {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
    }, 0.2, '+=1.5')
    
    .staggerFromTo(
        ".baloons img",
        2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
        0.2
    )
    .from(".profile-picture", 0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        }, "-=2"
    )
    .staggerFrom(".selamat span", 0.7, {
            opacity: 0,
            y: -50,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        }, 0.1)
    .staggerFromTo(".selamat span", 0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        }, 0.1, "party")
    .from(".wish h5", 0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        }, "party")
    .staggerTo(".eight svg",1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        }, 0.3)
    .to(".bagian-tiga", 0.3, {
        opacity: 0,
        y: 30,
        zIndex: -1,
        ease: Power1.easeOut
    })

    .staggerFrom(".bagian-enam p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    );
}

animationTimeline();