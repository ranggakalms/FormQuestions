const url_string = document.URL;
const url = new URL(url_string);
let sender;

sender = "Rangga";

document.querySelector(".btn1").addEventListener('click', function () {
    Swal.fire("Hi!", "I have some questions for you.", "question").then(function () {
        Swal.fire("Please, be honest with your answer. Okay?", "", "warning").then(function () {
            Swal.fire("Don't be awkward, plss.", "", "error").then(function () {
                Swal.fire({
                    title: "Question 1",
                    text: `what's ur nickname?`,
                    input: 'text',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                            return 'please fill out ur nickname :('
                        } else if (value == "nabila" || value == "Nabila" || value == "biya" || value == "Biya" || value == "biye" ||
                            value == "Biye" || value == "biyek" || value == "Biyek" || value == "biyee" || value == "Biyee" ||
                            value == "Biyaa" || value == "biyaa" || value == "biyy" || value == "Biyy" || value == "biy" || value == "Biy") {
                            name = value;
                        } else {
                            return 'unfortunately this is not for u :('
                        }
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        const fq1 = document.getElementById('q1').value = name;
                        // const q2options = new Promise((resolve) => {
                        //     resolve({
                        //         "no, that's impossible": "no, that's impossible",
                        //         "maybe / not sure": "maybe / not sure",
                        //         "obviously yes": "obviously yes"
                        //     });
                        // });

                        Swal.fire({
                            title: 'Question 2',
                            // text: `${name}, did u know that I like u?`,
                            // input: 'radio',
                            // inputOptions: q2options,
                            html:
                                `<div id="swal2-content" class="swal2-html-container" style="display: block;">${name}, did u know that I like u?</div>` +
                                '<div class="swal2-radio" style="display: flex;"><label>' +
                                `<input type="hidden">` +
                                `<input id="q2radio" type="radio" name="swal2-radio" value="no, that's impossible">` +
                                `<span class="swal2-label">no, that's impossible</span></label><label>` +
                                '<input id="q2radio" type="radio" name="swal2-radio" value="maybe / not sure">' +
                                '<span class="swal2-label">maybe / not sure</span></label><label>' +
                                '<input id="q2radio" type="radio" name="swal2-radio" value="obviously yes">' +
                                '<span class="swal2-label">obviously yes</span></label></div>' +
                                '<input type="hidden" id="q2radiof">',
                            preConfirm: function () {
                                return new Promise(function (resolve) {
                                    // Validate input
                                    if ($('#q2radiof').val() == '') {
                                        swal.showValidationMessage("please choose something :(");
                                    } else {
                                        swal.resetValidationMessage();
                                        resolve([
                                            $('#q2radiof').val()
                                        ]);
                                    }
                                })
                            },
                            didOpen: function () {
                                $('#q2radio').focus()
                            }
                        }).then((result) => {
                            if (result.value) {
                                const answers = JSON.stringify(result.value)
                                Swal.fire({
                                    title: 'Question 3',
                                    text: `so, u think that ${sender} ${answers} like u. what's the reason?`,
                                    input: 'textarea',
                                    showCancelButton: false,
                                    inputValidator: (value) => {
                                        if (!value) {
                                            return 'please fill out the reason :('
                                        } else {
                                            q3 = value;
                                        }
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        const fq3 = document.getElementById('q3').value = q3;
                                        Swal.fire({
                                            title: `Question 4`,
                                            html:
                                                `<div id="swal2-content" class="swal2-html-container" style="display: block;">${name}, did u ever like me?</div>` +
                                                '<div class="swal2-radio" style="display: flex;"><label>' +
                                                `<input type="hidden">` +
                                                `<input id="q4radio" type="radio" name="swal2-radio" value="no, that's impossible">` +
                                                `<span class="swal2-label">no, that's impossible</span></label><label>` +
                                                '<input id="q4radio" type="radio" name="swal2-radio" value="maybe / not sure">' +
                                                '<span class="swal2-label">maybe / not sure</span></label><label>' +
                                                '<input id="q4radio" type="radio" name="swal2-radio" value="almost">' +
                                                '<span class="swal2-label">almost</span></label><label>' +
                                                '<input id="q4radio" type="radio" name="swal2-radio" value="obviously yes">' +
                                                '<span class="swal2-label">obviously yes</span></label></div>' +
                                                '<input type="hidden" id="q4radiof">',
                                            preConfirm: function () {
                                                return new Promise(function (resolve) {
                                                    // Validate input
                                                    if ($('#q4radiof').val() == '') {
                                                        swal.showValidationMessage("please choose something :(");
                                                    } else {
                                                        swal.resetValidationMessage();
                                                        resolve([
                                                            $('#q4radiof').val()
                                                        ]);
                                                    }
                                                })
                                            },
                                            didOpen: function () {
                                                $('#q4radio').focus()
                                            }
                                        }).then(function () {
                                            Swal.fire({
                                                title: 'Question 5',
                                                text: 'rate my (physical) attractiveness',
                                                icon: 'question',
                                                input: 'range',
                                                inputLabel: '[0] not my type - [100] u cutie',
                                                inputAttributes: {
                                                    min: 1,
                                                    max: 100,
                                                    step: 1
                                                },
                                                inputValue: 50
                                            }).then((e) => {
                                                q5 = e.value
                                                Swal.fire({
                                                    title: `thanks for ${q5}%`,
                                                    html: '<i class="fas fa-grin-stars fa-5x text-warning animate__animated animate__rubberBand animate__repeat-3"></i>',
                                                }).then(function () {
                                                    const fq5 = document.getElementById('q5').value = q5 + '%';
                                                    Swal.fire({
                                                        title: 'Question 6',
                                                        text: 'rate my personality',
                                                        icon: 'question',
                                                        input: 'range',
                                                        inputLabel: '[0] badboi - [100] gudboi',
                                                        inputAttributes: {
                                                            min: 1,
                                                            max: 100,
                                                            step: 1
                                                        },
                                                        inputValue: 50
                                                    }).then((e) => {
                                                        q6 = e.value
                                                        Swal.fire({
                                                            title: `thanks for ${q6}%`,
                                                            html: '<i class="fas fa-laugh-beam fa-5x text-warning animate__animated animate__rubberBand animate__repeat-3"></i>',
                                                        }).then(function () {
                                                            const fq6 = document.getElementById('q6').value = q6 + '%';
                                                            Swal.fire({
                                                                title: 'Question 7',
                                                                text: `what was ur first impression of me?`,
                                                                input: 'textarea',
                                                                showCancelButton: false,
                                                                inputValidator: (value) => {
                                                                    if (!value) {
                                                                        return 'please fill out ur first impression :('
                                                                    } else {
                                                                        q7 = value;
                                                                    }
                                                                }
                                                            }).then(function () {
                                                                const fq7 = document.getElementById('q7').value = q7;
                                                                Swal.fire({
                                                                    title: 'Question 8',
                                                                    text: 'what terms are we on?',
                                                                    icon: 'question',
                                                                    input: 'range',
                                                                    inputLabel: `[0] we don't - [100] we chill`,
                                                                    inputAttributes: {
                                                                        min: 1,
                                                                        max: 100,
                                                                        step: 1
                                                                    },
                                                                    inputValue: 50
                                                                }).then((e) => {
                                                                    q8 = e.value
                                                                    Swal.fire({
                                                                        title: `okayy`,
                                                                        html: '<i class="fas fa-smile-beam fa-5x text-warning animate__animated animate__rubberBand animate__repeat-3"></i>',
                                                                    }).then(function () {
                                                                        const fq8 = document.getElementById('q8').value = q8 + '%';
                                                                        Swal.fire({
                                                                            title: 'Question 9',
                                                                            text: 'how awkward is this?',
                                                                            icon: 'question',
                                                                            input: 'range',
                                                                            inputLabel: `[0] it's okay - [100] very awkward`,
                                                                            inputAttributes: {
                                                                                min: 1,
                                                                                max: 100,
                                                                                step: 1
                                                                            },
                                                                            inputValue: 50
                                                                        }).then((e) => {
                                                                            q9 = e.value
                                                                            Swal.fire({
                                                                                title: `heheheheh`,
                                                                                html: '<i class="fas fa-grimace fa-5x text-warning animate__animated animate__rubberBand animate__repeat-3"></i>',
                                                                            }).then(function () {
                                                                                const fq9 = document.getElementById('q9').value = q9 + '%';
                                                                                Swal.fire({
                                                                                    title: `btw ganti ya ke bahasa indonesia, capek pake bahasa inggris mulu`,
                                                                                    html: '<i class="fas fa-sad-cry fa-5x text-warning animate__animated animate__rubberBand animate__repeat-3"></i>',
                                                                                    confirmButtonText: 'YA!'
                                                                                }).then(function () {
                                                                                    Swal.fire({
                                                                                        title: `masih ada 3 pertanyaan lagi nih buat ${name}`,
                                                                                        html: '<i class="fas fa-laugh-wink fa-5x text-warning animate__animated animate__rubberBand animate__repeat-3"></i>',
                                                                                        confirmButtonText: 'iya anjim cepetan dah, kesel aing'
                                                                                    }).then(function () {
                                                                                        Swal.fire({
                                                                                            title: `pertanyaan selanjutnya`,
                                                                                            confirmButtonText: 'YA!'
                                                                                        }).then(function () {
                                                                                            Swal.fire({
                                                                                                title: `wkwkwkwkw, okee`,
                                                                                                html: '<i class="fas fa-grin-squint-tears fa-5x text-warning animate__animated animate__wobble animate__repeat-3"></i>',
                                                                                                confirmButtonText: 'iya sok cepetan asw'
                                                                                            }).then(function () {
                                                                                                Swal.fire({
                                                                                                    title: `Pertanyaan 10`,
                                                                                                    text: `${sender} minta maaf ya buat yang kemarin?`,
                                                                                                    showDenyButton: true,
                                                                                                    showCancelButton: false,
                                                                                                    confirmButtonText: `iya dimaafin`,
                                                                                                    denyButtonText: `nggak ah :)`,
                                                                                                }).then((result) => {
                                                                                                    if (result.isConfirmed) {
                                                                                                        const fq10 = document.getElementById('q10').value = `iya dimaafin`;
                                                                                                        Swal.fire(`huhuhuhu makasih ya dah mau maafin ${sender} :(`).then(function () {
                                                                                                            Swal.fire({
                                                                                                                title: 'Pertanyaan 11',
                                                                                                                text: `itu tuh gara-gara apa sih?`,
                                                                                                                input: 'textarea',
                                                                                                                showCancelButton: false,
                                                                                                                inputValidator: (value) => {
                                                                                                                    if (!value) {
                                                                                                                        return 'diisi dong :('
                                                                                                                    } else {
                                                                                                                        q11_1 = value;
                                                                                                                    }
                                                                                                                }
                                                                                                            }).then(function () {
                                                                                                                const fq11_1 = document.getElementById('q11_1').value = q11_1;
                                                                                                                const fq11_2 = document.getElementById('q11_2').value = '';
                                                                                                                Swal.fire({
                                                                                                                    title: `ohhh gituu huhuhuhu, maafin ${sender} yaa`,
                                                                                                                    confirmButtonText: 'IYA!'
                                                                                                                }).then(function () {
                                                                                                                    Swal.fire({
                                                                                                                        title: `oke pertanyaan terakhir dah nih`,
                                                                                                                        confirmButtonText: 'iya cepetan asw'
                                                                                                                    }).then(function () {
                                                                                                                        Swal.fire({
                                                                                                                            title: 'Pertanyaan 12',
                                                                                                                            text: `ada yang mau disampein ke ${sender}?`,
                                                                                                                            input: 'textarea',
                                                                                                                            showCancelButton: false,
                                                                                                                            inputValidator: (value) => {
                                                                                                                                if (!value) {
                                                                                                                                    return 'jawab dong jangan dikosongin :('
                                                                                                                                } else {
                                                                                                                                    q12 = value;
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }).then(function () {
                                                                                                                            const fq12 = document.getElementById('q12').value = q12;
                                                                                                                            Swal.fire({
                                                                                                                                title: `pertanyaan selesai!!!`,
                                                                                                                                text: `capek ya kek yang lagi ujian aja wkwk segala ditanyain, itu di bawah sana ada icon kado klik aja dah yaa.`,
                                                                                                                                footer: '<i class="fas fa-hand-point-down fa-5x text-warning animate__animated animate__rubberBand animate__repeat-3"></i>',
                                                                                                                                confirmButtonText: 'YA!'
                                                                                                                            }).then(function () {
                                                                                                                                var sendq1 = $("#q1").val();
                                                                                                                                var sendq2 = $("#q2").val();
                                                                                                                                var sendq3 = $("#q3").val();
                                                                                                                                var sendq4 = $("#q4").val();
                                                                                                                                var sendq5 = $("#q5").val();
                                                                                                                                var sendq6 = $("#q6").val();
                                                                                                                                var sendq7 = $("#q7").val();
                                                                                                                                var sendq8 = $("#q8").val();
                                                                                                                                var sendq9 = $("#q9").val();
                                                                                                                                var sendq10 = $("#q10").val();
                                                                                                                                var sendq11_1 = $("#q11_1").val();
                                                                                                                                var sendq11_2 = $("#q11_2").val();
                                                                                                                                var sendq12 = $("#q12").val();
                                                                                                                                $.ajax({
                                                                                                                                    url: "https://docs.google.com/forms/d/e/1FAIpQLScO-5HaoOfabjzK47O1-tOFG8-Q_Cq2mBTN3nuUL9fQT-TRRg/formResponse?",
                                                                                                                                    data: {
                                                                                                                                        "entry.1111167555": sendq1,
                                                                                                                                        "entry.1857868363": sendq2,
                                                                                                                                        "entry.1082005854": sendq3,
                                                                                                                                        "entry.635598126": sendq4,
                                                                                                                                        "entry.69413260": sendq5,
                                                                                                                                        "entry.174869841": sendq6,
                                                                                                                                        "entry.935254595": sendq7,
                                                                                                                                        "entry.763466250": sendq8,
                                                                                                                                        "entry.102220262": sendq9,
                                                                                                                                        "entry.993118403": sendq10,
                                                                                                                                        "entry.1099654802": sendq11_1,
                                                                                                                                        "entry.1635400567": sendq11_2,
                                                                                                                                        "entry.312041310": sendq12
                                                                                                                                    },
                                                                                                                                    type: "POST",
                                                                                                                                    datatype: "xml",
                                                                                                                                    statuscode: {
                                                                                                                                        0: function () {
                                                                                                                                            console.log("ok");
                                                                                                                                        },
                                                                                                                                        200: function () {
                                                                                                                                            console.log("ok-2")
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                });
                                                                                                                                $('#txth1').html(`Thanks for your response
                                                                                                                                <a href="https://open.spotify.com/playlist/7Fi5fUzfmIdzJ8UYohO4Hc?si=Ee5PmMPARL-V9chJ_fbmKA"
                                                                                                                                    class="text-decoration-none" target="_blank">
                                                                                                                                    <i
                                                                                                                                        class="fas fa-smile-wink text-warning animate__animated animate__wobble animate__repeat-3"></i>
                                                                                                                                </a>`);
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    } else if (result.isDenied) {
                                                                                                        const fq10 = document.getElementById('q10').value = `nggak ah :)`;
                                                                                                        Swal.fire({
                                                                                                            title: `yahh kok ${name} gamau maafin`,
                                                                                                            html: '<i class="fas fa-sad-cry fa-5x text-warning animate__animated animate__rubberBand animate__repeat-3"></i>'
                                                                                                        }).then(function () {
                                                                                                            Swal.fire({
                                                                                                                title: 'Pertanyaan 11',
                                                                                                                text: `apa alasan ${name} gamau maafin ${sender}? :(`,
                                                                                                                input: 'textarea',
                                                                                                                inputValidator: (value) => {
                                                                                                                    if (!value) {
                                                                                                                        return 'isi :('
                                                                                                                    } else {
                                                                                                                        q11_2 = value;
                                                                                                                    }
                                                                                                                }
                                                                                                            }).then(function () {
                                                                                                                const fq11_1 = document.getElementById('q11_1').value = '';
                                                                                                                const fq11_2 = document.getElementById('q11_2').value = q11_2;
                                                                                                                Swal.fire({
                                                                                                                    title: `ohhh gituu yaa huhuhuhu, yaudah iya gapapaa kok`,
                                                                                                                    html: '<i class="fas fa-smile fa-5x text-warning animate__animated animate__rubberBand animate__repeat-3"></i>',
                                                                                                                    confirmButtonText: 'heeh'
                                                                                                                }).then(function () {
                                                                                                                    Swal.fire({
                                                                                                                        title: `yauda pertanyaan terakhir dah`,
                                                                                                                        confirmButtonText: 'heeh cepetan asw'
                                                                                                                    }).then(function () {
                                                                                                                        Swal.fire({
                                                                                                                            title: 'Pertanyaan 12',
                                                                                                                            text: `ada yang mau disampein ke ${sender}?`,
                                                                                                                            input: 'textarea',
                                                                                                                            showCancelButton: false,
                                                                                                                            inputValidator: (value) => {
                                                                                                                                if (!value) {
                                                                                                                                    return 'jawab dong jangan dikosongin :('
                                                                                                                                } else {
                                                                                                                                    q12 = value;
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }).then(function () {
                                                                                                                            const fq12 = document.getElementById('q12').value = q12;
                                                                                                                            Swal.fire({
                                                                                                                                title: `pertanyaan selesai!!!`,
                                                                                                                                text: `capek ya kek yang lagi ujian aja huhuhu segala ditanyain, btw itu di bawah sana ada icon kado diklik aja dah yaa.`,
                                                                                                                                footer: '<i class="fas fa-hand-point-down fa-5x text-warning animate__animated animate__rubberBand animate__repeat-3"></i>',
                                                                                                                                confirmButtonText: 'YA!'
                                                                                                                            }).then(function () {
                                                                                                                                var sendq1 = $("#q1").val();
                                                                                                                                var sendq2 = $("#q2").val();
                                                                                                                                var sendq3 = $("#q3").val();
                                                                                                                                var sendq4 = $("#q4").val();
                                                                                                                                var sendq5 = $("#q5").val();
                                                                                                                                var sendq6 = $("#q6").val();
                                                                                                                                var sendq7 = $("#q7").val();
                                                                                                                                var sendq8 = $("#q8").val();
                                                                                                                                var sendq9 = $("#q9").val();
                                                                                                                                var sendq10 = $("#q10").val();
                                                                                                                                var sendq11_1 = $("#q11_1").val();
                                                                                                                                var sendq11_2 = $("#q11_2").val();
                                                                                                                                var sendq12 = $("#q12").val();
                                                                                                                                $.ajax({
                                                                                                                                    url: "https://docs.google.com/forms/d/e/1FAIpQLScO-5HaoOfabjzK47O1-tOFG8-Q_Cq2mBTN3nuUL9fQT-TRRg/formResponse?",
                                                                                                                                    data: {
                                                                                                                                        "entry.1111167555": sendq1,
                                                                                                                                        "entry.1857868363": sendq2,
                                                                                                                                        "entry.1082005854": sendq3,
                                                                                                                                        "entry.635598126": sendq4,
                                                                                                                                        "entry.69413260": sendq5,
                                                                                                                                        "entry.174869841": sendq6,
                                                                                                                                        "entry.935254595": sendq7,
                                                                                                                                        "entry.763466250": sendq8,
                                                                                                                                        "entry.102220262": sendq9,
                                                                                                                                        "entry.993118403": sendq10,
                                                                                                                                        "entry.1099654802": sendq11_1,
                                                                                                                                        "entry.1635400567": sendq11_2,
                                                                                                                                        "entry.312041310": sendq12
                                                                                                                                    },
                                                                                                                                    type: "POST",
                                                                                                                                    datatype: "xml",
                                                                                                                                    statuscode: {
                                                                                                                                        0: function () {
                                                                                                                                            console.log("ok");
                                                                                                                                        },
                                                                                                                                        200: function () {
                                                                                                                                            console.log("ok-2")
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                });
                                                                                                                                $('#txth1').html(`Thanks for your response
                                                                                                                                <a href="https://open.spotify.com/playlist/7Fi5fUzfmIdzJ8UYohO4Hc?si=Ee5PmMPARL-V9chJ_fbmKA"
                                                                                                                                    class="text-decoration-none" target="_blank">
                                                                                                                                    <i
                                                                                                                                        class="fas fa-smile-wink text-warning animate__animated animate__wobble animate__repeat-3"></i>
                                                                                                                                </a>`);
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    }
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }
                                });
                            }
                        })
                        $(document).on("click", ".swal2-container input[id='q2radio']", function () {
                            var q2 = $('input[name=swal2-radio]:checked').val();
                            const fq2 = document.getElementById('q2radiof').value = q2;
                            const fq21 = document.getElementById('q2').value = q2;
                            $('.swal2-confirm').attr('disabled', false);
                        });
                        $(document).on("click", ".swal2-container input[id='q4radio']", function () {
                            var q4 = $('input[name=swal2-radio]:checked').val();
                            const fq4 = document.getElementById('q4radiof').value = q4;
                            const fq41 = document.getElementById('q4').value = q4;
                            $('.swal2-confirm').attr('disabled', false);
                        });
                    }
                })
            });
        });
    });
});

document.querySelector('.gift1').addEventListener('click', function () {
    confetti();
    const txt1 = document.getElementById('txt1');
    const btn1 = document.querySelector('.btn1');
    const txt2 = document.getElementById('txt2');
    txt1.classList.remove('d-none')
    btn1.classList.add('d-none')
    console.log(txt1);
    console.log(btn1);

    setTimeout(function () {
        txt2.classList.remove('d-none')
    }, 5000)
    console.log(txt2);
})

'use strict';

// If set to true, the user must press
// UP UP DOWN ODWN LEFT RIGHT LEFT RIGHT A B
// to trigger the confetti with a random color theme.
// Otherwise the confetti constantly falls.
var onlyOnKonami = false;

function confetti() {
    // Globals
    var $window = $(window),
        random = Math.random,
        cos = Math.cos,
        sin = Math.sin,
        PI = Math.PI,
        PI2 = PI * 2,
        timer = undefined,
        frame = undefined,
        confetti = [];

    var runFor = 2200
    var isRunning = true

    setTimeout(() => {
        isRunning = false
    }, runFor);

    // Settings
    var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        pointer = 0;

    var particles = 150,
        spread = 40,
        sizeMin = 7,
        sizeMax = 15 - sizeMin,
        eccentricity = 10,
        deviation = 100,
        dxThetaMin = -.1,
        dxThetaMax = -dxThetaMin - dxThetaMin,
        dyMin = .13,
        dyMax = .18,
        dThetaMin = .4,
        dThetaMax = .7 - dThetaMin;

    var colorThemes = [
        function () {
            return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
        },
        function () {
            var black = 200 * random() | 0;
            return color(200, black, black);
        },
        function () {
            var black = 200 * random() | 0;
            return color(black, 200, black);
        },
        function () {
            var black = 200 * random() | 0;
            return color(black, black, 200);
        },
        function () {
            return color(200, 100, 200 * random() | 0);
        },
        function () {
            return color(200 * random() | 0, 200, 200);
        },
        function () {
            var black = 256 * random() | 0;
            return color(black, black, black);
        },
        function () {
            return colorThemes[random() < .5 ? 1 : 2]();
        },
        function () {
            return colorThemes[random() < .5 ? 3 : 5]();
        },
        function () {
            return colorThemes[random() < .5 ? 2 : 4]();
        }
    ];

    function color(r, g, b) {
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    // Cosine interpolation
    function interpolation(a, b, t) {
        return (1 - cos(PI * t)) / 2 * (b - a) + a;
    }

    // Create a 1D Maximal Poisson Disc over [0, 1]
    var radius = 1 / eccentricity,
        radius2 = radius + radius;

    function createPoisson() {
        // domain is the set of points which are still available to pick from
        // D = union{ [d_i, d_i+1] | i is even }
        var domain = [radius, 1 - radius],
            measure = 1 - radius2,
            spline = [0, 1];
        while (measure) {
            var dart = measure * random(),
                i, l, interval, a, b, c, d;

            // Find where dart lies
            for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
                a = domain[i], b = domain[i + 1], interval = b - a;
                if (dart < measure + interval) {
                    spline.push(dart += a - measure);
                    break;
                }
                measure += interval;
            }
            c = dart - radius, d = dart + radius;

            // Update the domain
            for (i = domain.length - 1; i > 0; i -= 2) {
                l = i - 1, a = domain[l], b = domain[i];
                // c---d          c---d  Do nothing
                //   c-----d  c-----d    Move interior
                //   c--------------d    Delete interval
                //         c--d          Split interval
                //       a------b
                if (a >= c && a < d)
                    if (b > d) domain[l] = d; // Move interior (Left case)
                    else domain.splice(l, 2); // Delete interval
                else if (a < c && b > c)
                    if (b <= d) domain[i] = c; // Move interior (Right case)
                    else domain.splice(i, 0, c, d); // Split interval
            }

            // Re-measure the domain
            for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
                measure += domain[i + 1] - domain[i];
        }

        return spline.sort();
    }

    // Create the overarching container
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '0';
    container.style.overflow = 'visible';
    container.style.zIndex = '9999';

    // Confetto constructor
    function Confetto(theme) {
        this.frame = 0;
        this.outer = document.createElement('div');
        this.inner = document.createElement('div');
        this.outer.appendChild(this.inner);

        var outerStyle = this.outer.style,
            innerStyle = this.inner.style;
        outerStyle.position = 'absolute';
        outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
        outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
        innerStyle.width = '100%';
        innerStyle.height = '100%';
        innerStyle.backgroundColor = theme();

        outerStyle.perspective = '50px';
        outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
        this.axis = 'rotate3D(' +
            cos(360 * random()) + ',' +
            cos(360 * random()) + ',0,';
        this.theta = 360 * random();
        this.dTheta = dThetaMin + dThetaMax * random();
        innerStyle.transform = this.axis + this.theta + 'deg)';

        this.x = $window.width() * random();
        this.y = -deviation;
        this.dx = sin(dxThetaMin + dxThetaMax * random());
        this.dy = dyMin + dyMax * random();
        outerStyle.left = this.x + 'px';
        outerStyle.top = this.y + 'px';

        // Create the periodic spline
        this.splineX = createPoisson();
        this.splineY = [];
        for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
            this.splineY[i] = deviation * random();
        this.splineY[0] = this.splineY[l] = deviation * random();

        this.update = function (height, delta) {
            this.frame += delta;
            this.x += this.dx * delta;
            this.y += this.dy * delta;
            this.theta += this.dTheta * delta;

            // Compute spline and convert to polar
            var phi = this.frame % 7777 / 7777,
                i = 0,
                j = 1;
            while (phi >= this.splineX[j]) i = j++;
            var rho = interpolation(
                this.splineY[i],
                this.splineY[j],
                (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
            );
            phi *= PI2;

            outerStyle.left = this.x + rho * cos(phi) + 'px';
            outerStyle.top = this.y + rho * sin(phi) + 'px';
            innerStyle.transform = this.axis + this.theta + 'deg)';
            return this.y > height + deviation;
        };
    }


    function poof() {
        if (!frame) {
            // Append the container
            document.body.appendChild(container);

            // Add confetti

            var theme = colorThemes[onlyOnKonami ? colorThemes.length * random() | 0 : 0],
                count = 0;

            (function addConfetto() {

                if (onlyOnKonami && ++count > particles)
                    return timer = undefined;

                if (isRunning) {
                    var confetto = new Confetto(theme);
                    confetti.push(confetto);

                    container.appendChild(confetto.outer);
                    timer = setTimeout(addConfetto, spread * random());
                }
            })(0);


            // Start the loop
            var prev = undefined;
            requestAnimationFrame(function loop(timestamp) {
                var delta = prev ? timestamp - prev : 0;
                prev = timestamp;
                var height = $window.height();

                for (var i = confetti.length - 1; i >= 0; --i) {
                    if (confetti[i].update(height, delta)) {
                        container.removeChild(confetti[i].outer);
                        confetti.splice(i, 1);
                    }
                }

                if (timer || confetti.length)
                    return frame = requestAnimationFrame(loop);

                // Cleanup
                document.body.removeChild(container);
                frame = undefined;
            });
        }
    }

    $window.keydown(function (event) {
        pointer = konami[pointer] === event.which ?
            pointer + 1 :
            +(event.which === konami[0]);
        if (pointer === konami.length) {
            pointer = 0;
            poof();
        }
    });

    if (!onlyOnKonami) poof();
};