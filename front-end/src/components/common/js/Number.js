import axios from "axios";

class MemoryBlock {
    constructor(id, frontImage, backImage) {
        this.id = id;
        this.blockCSS = "block";
        this.frontImage = frontImage;
        this.backImage = backImage;
        this.front = false;
        this.back = true;
        this.frontCSS = "block-front block-face";
        this.backCSS = "block-back block-face";
        this.imgCSS = "block-value";
    }
}

export const NumberDidMount = (currentUser) => {
    console.log(currentUser)
    var countdown;

    function startTimer(duration, display) {
        var timer = 60 * duration,
            minutes,
            seconds;
        countdown = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = `Thời gian ${minutes}:${seconds}`;
            if (--timer < 0) {
                gameOver();
            }
        }, 1000);
    }

    // for creating divs and shuffling blocks
    var divblock,
        blockData,
        blockFrontImages,
        memoryBlockArr,
        blockFrontImagesAll,
        shuffledBlocks;
    // for implementing flip n match logic
    var currentlyFlippedArr, matchedCount, blockToMatch1, blockToMatch2;
    // for implementing game info block
    var flipCounter,
        gameOn = false;

    //   count down
    countdown();

    //play-again
    playAgain();

    function playAgain() {
        const playAgain = document.getElementById("play-again");
        if (playAgain) {
            playAgain.addEventListener("click", function () {
                document.getElementsByClassName("demo")[0].style.display = "block";
                document.getElementById("countdown").classList.add("overlay-text");
                document.getElementById("countdown").classList.add("visible");
                var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                Promise.resolve(3600)
                    .then(() => wait(3600))
                    .then(() => {
                        document
                            .getElementById("countdown")
                            .classList.remove("overlay-text");
                        document.getElementById("countdown").classList.remove("visible");
                        document.getElementsByClassName("demo")[0].style.display = "none";
                        resetGame();
                        init();
                    });
            });
        }
    }

    function countdown() {
        var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        Promise.resolve(3600)
            .then(() => wait(3600))
            .then(() => {
                document.getElementById("countdown").classList.remove("overlay-text");
                document.getElementById("countdown").classList.remove("visible");
                document.getElementsByClassName("demo")[0].style.display = "none";
                resetGame();
                init();
            });
    }

    function resetGame() {
        var elements = document.getElementsByClassName("block");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    function init() {
        gameOn = true;
        memoryBlockArr = new Array(18);
        blockFrontImagesAll = [];
        shuffledBlocks = [];
        currentlyFlippedArr = [];
        matchedCount = 0;
        flipCounter = 0;
        var minutes = 2;
        var display = document.getElementById("Timer");
        blockFrontImages = [
            "Images/Unit_Number/Answer_Card/0.png",
            "Images/Unit_Number/Answer_Card/1.png",
            "Images/Unit_Number/Answer_Card/2.png",
            "Images/Unit_Number/Answer_Card/3.png",
            "Images/Unit_Number/Answer_Card/4.png",
            "Images/Unit_Number/Answer_Card/5.png",
            "Images/Unit_Number/Answer_Card/6.png",
            "Images/Unit_Number/Answer_Card/7.png",
            "Images/Unit_Number/Answer_Card/8.png",
            "Images/Unit_Number/Answer_Card/9.png"  
        ];
        // init();
        startTimer(minutes, display);
        let arrRandom = getRandom(blockFrontImages, 9);
        blockFrontImagesAll = arrRandom.concat(arrRandom);
        document.getElementById("Point").innerText = `Điểm: ${flipCounter}`;
    }


    function hideElements() {
        var hideBlocks = Array.from(document.getElementsByClassName("block"));
        for (var i = 0; i < hideBlocks.length; i++) {
            document.getElementById(hideBlocks[i].id).classList.remove("visible");
        }
    }

    function flipBlock() {
        if (gameOn === true) {
            this.classList.add("visible");
            if (blockToMatch1 !== this.id) {
                if (currentlyFlippedArr.length === 0) {
                    currentlyFlippedArr.push(this.innerHTML);
                    blockToMatch1 = this.id;
                } else if (currentlyFlippedArr.length === 1) {
                    currentlyFlippedArr.push(this.innerHTML);
                    blockToMatch2 = this.id;
                    if (currentlyFlippedArr[0] === currentlyFlippedArr[1]) {
                        const index = currentlyFlippedArr[0].indexOf("png");
                        const message = currentlyFlippedArr[0].substring(
                            index - 2,
                            index - 1
                        );
                        toSpeak(message);
                        blocksMatched();
                    } else {
                        document.getElementById("img-cat").src =
                            "Images/Avatar/Cat/Cat_no.png";

                        //1s display cat-normal
                        var wait = (ms) =>
                            new Promise((resolve) => setTimeout(resolve, ms));
                        Promise.resolve(2000)
                            .then(() => wait(2000))
                            .then(() => {
                                document.getElementById("img-cat").src =
                                    "Images/Avatar/Cat/Cat_normal.png";
                            });

                        gameOn = false;
                        var wait = (ms) =>
                            new Promise((resolve) => setTimeout(resolve, ms));
                        Promise.resolve(800)
                            .then(() => wait(800))
                            .then(() => {
                            });
                    }
                }
            }
        }
    }

    function blocksMatched() {
        flipCounter += 10;
        document.getElementById("Point").innerText = `Điểm: ${flipCounter}`;
        document.getElementById("img-cat").src = "Images/Avatar/Cat/Cat_yes.png";

        //1s display cat-normal
        var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        Promise.resolve(2000)
            .then(() => wait(2000))
            .then(() => {
                document.getElementById("img-cat").src =
                    "Images/Avatar/Cat/Cat_normal.png";
            });

        currentlyFlippedArr = [];
        matchedCount += 2;
        document
            .getElementById(blockToMatch1)
            .removeEventListener("click", flipBlock);
        document
            .getElementById(blockToMatch2)
            .removeEventListener("click", flipBlock);
        console.log(matchedCount);
        console.log(memoryBlockArr.length);

        if (matchedCount === memoryBlockArr.length) {
            showWin();
        }
    }

    function showWin() {
        console.log("hehe")
        hideElements();
        gameOn = false;
        document.getElementsByClassName("panel")[0].style.display = "block";
        document.getElementById("notify").innerHTML = "Chúc mừng";
        document.getElementById("notify").style.color = "#28a745";
        document.getElementById("description").innerHTML = "Bạn được nhận thêm điểm kinh nghiệm";
        document.getElementById("point-game").innerHTML = `${flipCounter}`;
        apiScore();
        clearInterval(countdown);
    }

    function gameOver() {
        gameOn = false;
        document.getElementsByClassName("panel")[0].style.display = "block";
        document.getElementById("notify").innerHTML = "Hết giờ";
        document.getElementById("notify").style.color = "#dc3545";
        document.getElementById("description").style.display = "none";
        document.getElementById("point-game").innerHTML = `${flipCounter}`;
        apiScore();
        clearInterval(countdown);
    }

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    function toSpeak(message) {
        var speechSynthesisUtterance = new SpeechSynthesisUtterance(message);
        speechSynthesisUtterance.lang = "en-UK";
        window.speechSynthesis.speak(speechSynthesisUtterance);
    }

    const apiScore = () => {
        (async () => {
            try {
                const {id, accessToken} = currentUser;
                const res = await axios.put(`https://backend-kide.herokuapp.com/api/user/score/${id}`,
                    {
                        name: "aphabet",
                        score: flipCounter
                    }, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                const {data} = res;
                if (data) {
                    if (data.exp) {
                        currentUser.exp = data.exp;
                        localStorage.setItem("user", JSON.stringify({
                            ...currentUser
                        }));
                    }
                }

            } catch (e) {
                console.log(e);
            }
        })()
    }
};
