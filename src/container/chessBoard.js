import React from "react";
// import {clickHandler} from "../helper/knightMoveClickHandler";

let blockNumber;

const clickHandler = (ev) => {
    blockNumber = ev.target.id;
    // console.log(blockNumber);
    // console.log(document.getElementById(blockNumber).className);

    let i;

    //clear current highlighted blocks
    for (i = 1; i <= 64; i++) {
        if (document.getElementById(i).className === "white") {
            document.getElementById(i).style.backgroundColor = "white";
        }

        if (document.getElementById(i).className === "black") {
            document.getElementById(i).style.backgroundColor = "#999";
        }
    }

    //clear current knight position
    for (i = 1; i <= 64; i++) {
        document.getElementById(i).innerText = "";
    }

    //place knight on clicked block
    document.getElementById(blockNumber).innerText = "♘";

    //show possible moves
    for (i = 1; i <= 1; i++) {
        if (blockNumber === "1") {
            document.getElementById("11").style.backgroundColor = "#363535";
            document.getElementById("18").style.backgroundColor = "#363535";
        }
        if (blockNumber === "2") {
            document.getElementById("12").style.backgroundColor = "#363535";
            document.getElementById("17").style.backgroundColor = "#363535";
            document.getElementById("19").style.backgroundColor = "#363535";
        }
        if (blockNumber === "3") {
            document.getElementById("9").style.backgroundColor = "#363535";
            document.getElementById("13").style.backgroundColor = "#363535";
            document.getElementById("18").style.backgroundColor = "#363535";
            document.getElementById("20").style.backgroundColor = "#363535";
        }
        if (blockNumber === "4") {
            document.getElementById("10").style.backgroundColor = "#363535";
            document.getElementById("14").style.backgroundColor = "#363535";
            document.getElementById("19").style.backgroundColor = "#363535";
            document.getElementById("21").style.backgroundColor = "#363535";
        }
        if (blockNumber === "5") {
            document.getElementById("11").style.backgroundColor = "#363535";
            document.getElementById("15").style.backgroundColor = "#363535";
            document.getElementById("20").style.backgroundColor = "#363535";
            document.getElementById("22").style.backgroundColor = "#363535";
        }
        if (blockNumber === "6") {
            document.getElementById("12").style.backgroundColor = "#363535";
            document.getElementById("16").style.backgroundColor = "#363535";
            document.getElementById("21").style.backgroundColor = "#363535";
            document.getElementById("23").style.backgroundColor = "#363535";
        }
        if (blockNumber === "7") {
            document.getElementById("13").style.backgroundColor = "#363535";
            document.getElementById("22").style.backgroundColor = "#363535";
            document.getElementById("24").style.backgroundColor = "#363535";
        }
        if (blockNumber === "8") {
            document.getElementById("14").style.backgroundColor = "#363535";
            document.getElementById("23").style.backgroundColor = "#363535";
        }

        if (blockNumber === "9") {
            document.getElementById("3").style.backgroundColor = "#363535";
            document.getElementById("19").style.backgroundColor = "#363535";
            document.getElementById("26").style.backgroundColor = "#363535";
        }
        if (blockNumber === "10") {
            document.getElementById("4").style.backgroundColor = "#363535";
            document.getElementById("20").style.backgroundColor = "#363535";
            document.getElementById("25").style.backgroundColor = "#363535";
            document.getElementById("27").style.backgroundColor = "#363535";
        }
        if (blockNumber === "11") {
            document.getElementById("1").style.backgroundColor = "#363535";
            document.getElementById("5").style.backgroundColor = "#363535";
            document.getElementById("17").style.backgroundColor = "#363535";
            document.getElementById("21").style.backgroundColor = "#363535";
            document.getElementById("26").style.backgroundColor = "#363535";
            document.getElementById("28").style.backgroundColor = "#363535";
        }
        if (blockNumber === "12") {
            document.getElementById("2").style.backgroundColor = "#363535";
            document.getElementById("6").style.backgroundColor = "#363535";
            document.getElementById("18").style.backgroundColor = "#363535";
            document.getElementById("22").style.backgroundColor = "#363535";
            document.getElementById("27").style.backgroundColor = "#363535";
            document.getElementById("29").style.backgroundColor = "#363535";
        }
        if (blockNumber === "13") {
            document.getElementById("3").style.backgroundColor = "#363535";
            document.getElementById("7").style.backgroundColor = "#363535";
            document.getElementById("19").style.backgroundColor = "#363535";
            document.getElementById("23").style.backgroundColor = "#363535";
            document.getElementById("28").style.backgroundColor = "#363535";
            document.getElementById("30").style.backgroundColor = "#363535";
        }
        if (blockNumber === "14") {
            document.getElementById("4").style.backgroundColor = "#363535";
            document.getElementById("8").style.backgroundColor = "#363535";
            document.getElementById("20").style.backgroundColor = "#363535";
            document.getElementById("24").style.backgroundColor = "#363535";
            document.getElementById("29").style.backgroundColor = "#363535";
            document.getElementById("31").style.backgroundColor = "#363535";
        }
        if (blockNumber === "15") {
            document.getElementById("5").style.backgroundColor = "#363535";
            document.getElementById("21").style.backgroundColor = "#363535";
            document.getElementById("30").style.backgroundColor = "#363535";
            document.getElementById("32").style.backgroundColor = "#363535";
        }
        if (blockNumber === "16") {
            document.getElementById("6").style.backgroundColor = "#363535";
            document.getElementById("31").style.backgroundColor = "#363535";
            document.getElementById("22").style.backgroundColor = "#363535";
        }

        if (blockNumber === "17") {
            document.getElementById("2").style.backgroundColor = "#363535";
            document.getElementById("11").style.backgroundColor = "#363535";
            document.getElementById("27").style.backgroundColor = "#363535";
            document.getElementById("34").style.backgroundColor = "#363535";
        }
        if (blockNumber === "18") {
            document.getElementById("1").style.backgroundColor = "#363535";
            document.getElementById("3").style.backgroundColor = "#363535";
            document.getElementById("12").style.backgroundColor = "#363535";
            document.getElementById("28").style.backgroundColor = "#363535";
            document.getElementById("33").style.backgroundColor = "#363535";
            document.getElementById("35").style.backgroundColor = "#363535";
        }
        if (blockNumber === "19") {
            document.getElementById("2").style.backgroundColor = "#363535";
            document.getElementById("4").style.backgroundColor = "#363535";
            document.getElementById("9").style.backgroundColor = "#363535";
            document.getElementById("13").style.backgroundColor = "#363535";
            document.getElementById("25").style.backgroundColor = "#363535";
            document.getElementById("29").style.backgroundColor = "#363535";
            document.getElementById("34").style.backgroundColor = "#363535";
            document.getElementById("36").style.backgroundColor = "#363535";
        }
        if (blockNumber === "20") {
            document.getElementById("3").style.backgroundColor = "#363535";
            document.getElementById("5").style.backgroundColor = "#363535";
            document.getElementById("10").style.backgroundColor = "#363535";
            document.getElementById("14").style.backgroundColor = "#363535";
            document.getElementById("26").style.backgroundColor = "#363535";
            document.getElementById("30").style.backgroundColor = "#363535";
            document.getElementById("35").style.backgroundColor = "#363535";
            document.getElementById("37").style.backgroundColor = "#363535";
        }
        if (blockNumber === "21") {
            document.getElementById("4").style.backgroundColor = "#363535";
            document.getElementById("6").style.backgroundColor = "#363535";
            document.getElementById("11").style.backgroundColor = "#363535";
            document.getElementById("15").style.backgroundColor = "#363535";
            document.getElementById("27").style.backgroundColor = "#363535";
            document.getElementById("31").style.backgroundColor = "#363535";
            document.getElementById("36").style.backgroundColor = "#363535";
            document.getElementById("38").style.backgroundColor = "#363535";
        }
        if (blockNumber === "22") {
            document.getElementById("5").style.backgroundColor = "#363535";
            document.getElementById("7").style.backgroundColor = "#363535";
            document.getElementById("12").style.backgroundColor = "#363535";
            document.getElementById("16").style.backgroundColor = "#363535";
            document.getElementById("28").style.backgroundColor = "#363535";
            document.getElementById("32").style.backgroundColor = "#363535";
            document.getElementById("37").style.backgroundColor = "#363535";
            document.getElementById("39").style.backgroundColor = "#363535";
        }
        if (blockNumber === "23") {
            document.getElementById("6").style.backgroundColor = "#363535";
            document.getElementById("8").style.backgroundColor = "#363535";
            document.getElementById("13").style.backgroundColor = "#363535";
            document.getElementById("29").style.backgroundColor = "#363535";
            document.getElementById("38").style.backgroundColor = "#363535";
            document.getElementById("40").style.backgroundColor = "#363535";
        }
        if (blockNumber === "24") {
            document.getElementById("7").style.backgroundColor = "#363535";
            document.getElementById("14").style.backgroundColor = "#363535";
            document.getElementById("30").style.backgroundColor = "#363535";
            document.getElementById("39").style.backgroundColor = "#363535";
        }

        if (blockNumber === "25") {
            document.getElementById("10").style.backgroundColor = "#363535";
            document.getElementById("19").style.backgroundColor = "#363535";
            document.getElementById("35").style.backgroundColor = "#363535";
            document.getElementById("42").style.backgroundColor = "#363535";
        }
        if (blockNumber === "26") {
            document.getElementById("9").style.backgroundColor = "#363535";
            document.getElementById("11").style.backgroundColor = "#363535";
            document.getElementById("20").style.backgroundColor = "#363535";
            document.getElementById("36").style.backgroundColor = "#363535";
            document.getElementById("41").style.backgroundColor = "#363535";
            document.getElementById("43").style.backgroundColor = "#363535";
        }
        if (blockNumber === "27") {
            document.getElementById("10").style.backgroundColor = "#363535";
            document.getElementById("12").style.backgroundColor = "#363535";
            document.getElementById("17").style.backgroundColor = "#363535";
            document.getElementById("21").style.backgroundColor = "#363535";
            document.getElementById("33").style.backgroundColor = "#363535";
            document.getElementById("37").style.backgroundColor = "#363535";
            document.getElementById("42").style.backgroundColor = "#363535";
            document.getElementById("44").style.backgroundColor = "#363535";
        }
        if (blockNumber === "28") {
            document.getElementById("11").style.backgroundColor = "#363535";
            document.getElementById("13").style.backgroundColor = "#363535";
            document.getElementById("18").style.backgroundColor = "#363535";
            document.getElementById("22").style.backgroundColor = "#363535";
            document.getElementById("34").style.backgroundColor = "#363535";
            document.getElementById("38").style.backgroundColor = "#363535";
            document.getElementById("43").style.backgroundColor = "#363535";
            document.getElementById("45").style.backgroundColor = "#363535";
        }
        if (blockNumber === "29") {
            document.getElementById("12").style.backgroundColor = "#363535";
            document.getElementById("14").style.backgroundColor = "#363535";
            document.getElementById("19").style.backgroundColor = "#363535";
            document.getElementById("23").style.backgroundColor = "#363535";
            document.getElementById("35").style.backgroundColor = "#363535";
            document.getElementById("39").style.backgroundColor = "#363535";
            document.getElementById("44").style.backgroundColor = "#363535";
            document.getElementById("46").style.backgroundColor = "#363535";
        }
        if (blockNumber === "30") {
            document.getElementById("13").style.backgroundColor = "#363535";
            document.getElementById("15").style.backgroundColor = "#363535";
            document.getElementById("20").style.backgroundColor = "#363535";
            document.getElementById("24").style.backgroundColor = "#363535";
            document.getElementById("36").style.backgroundColor = "#363535";
            document.getElementById("40").style.backgroundColor = "#363535";
            document.getElementById("45").style.backgroundColor = "#363535";
            document.getElementById("47").style.backgroundColor = "#363535";
        }
        if (blockNumber === "31") {
            document.getElementById("14").style.backgroundColor = "#363535";
            document.getElementById("16").style.backgroundColor = "#363535";
            document.getElementById("21").style.backgroundColor = "#363535";
            document.getElementById("37").style.backgroundColor = "#363535";
            document.getElementById("46").style.backgroundColor = "#363535";
            document.getElementById("48").style.backgroundColor = "#363535";
        }
        if (blockNumber === "32") {
            document.getElementById("15").style.backgroundColor = "#363535";
            document.getElementById("22").style.backgroundColor = "#363535";
            document.getElementById("38").style.backgroundColor = "#363535";
            document.getElementById("47").style.backgroundColor = "#363535";
        }

        if (blockNumber === "33") {
            document.getElementById("18").style.backgroundColor = "#363535";
            document.getElementById("27").style.backgroundColor = "#363535";
            document.getElementById("43").style.backgroundColor = "#363535";
            document.getElementById("50").style.backgroundColor = "#363535";
        }
        if (blockNumber === "34") {
            document.getElementById("17").style.backgroundColor = "#363535";
            document.getElementById("19").style.backgroundColor = "#363535";
            document.getElementById("28").style.backgroundColor = "#363535";
            document.getElementById("44").style.backgroundColor = "#363535";
            document.getElementById("49").style.backgroundColor = "#363535";
            document.getElementById("51").style.backgroundColor = "#363535";
        }
        if (blockNumber === "35") {
            document.getElementById("18").style.backgroundColor = "#363535";
            document.getElementById("20").style.backgroundColor = "#363535";
            document.getElementById("25").style.backgroundColor = "#363535";
            document.getElementById("29").style.backgroundColor = "#363535";
            document.getElementById("41").style.backgroundColor = "#363535";
            document.getElementById("45").style.backgroundColor = "#363535";
            document.getElementById("50").style.backgroundColor = "#363535";
            document.getElementById("52").style.backgroundColor = "#363535";
        }
        if (blockNumber === "36") {
            document.getElementById("19").style.backgroundColor = "#363535";
            document.getElementById("21").style.backgroundColor = "#363535";
            document.getElementById("26").style.backgroundColor = "#363535";
            document.getElementById("30").style.backgroundColor = "#363535";
            document.getElementById("42").style.backgroundColor = "#363535";
            document.getElementById("46").style.backgroundColor = "#363535";
            document.getElementById("51").style.backgroundColor = "#363535";
            document.getElementById("53").style.backgroundColor = "#363535";
        }
        if (blockNumber === "37") {
            document.getElementById("20").style.backgroundColor = "#363535";
            document.getElementById("22").style.backgroundColor = "#363535";
            document.getElementById("27").style.backgroundColor = "#363535";
            document.getElementById("31").style.backgroundColor = "#363535";
            document.getElementById("43").style.backgroundColor = "#363535";
            document.getElementById("47").style.backgroundColor = "#363535";
            document.getElementById("52").style.backgroundColor = "#363535";
            document.getElementById("54").style.backgroundColor = "#363535";
        }
        if (blockNumber === "38") {
            document.getElementById("21").style.backgroundColor = "#363535";
            document.getElementById("23").style.backgroundColor = "#363535";
            document.getElementById("28").style.backgroundColor = "#363535";
            document.getElementById("32").style.backgroundColor = "#363535";
            document.getElementById("44").style.backgroundColor = "#363535";
            document.getElementById("48").style.backgroundColor = "#363535";
            document.getElementById("53").style.backgroundColor = "#363535";
            document.getElementById("55").style.backgroundColor = "#363535";
        }
        if (blockNumber === "39") {
            document.getElementById("22").style.backgroundColor = "#363535";
            document.getElementById("24").style.backgroundColor = "#363535";
            document.getElementById("29").style.backgroundColor = "#363535";
            document.getElementById("45").style.backgroundColor = "#363535";
            document.getElementById("54").style.backgroundColor = "#363535";
            document.getElementById("56").style.backgroundColor = "#363535";
        }
        if (blockNumber === "40") {
            document.getElementById("23").style.backgroundColor = "#363535";
            document.getElementById("30").style.backgroundColor = "#363535";
            document.getElementById("46").style.backgroundColor = "#363535";
            document.getElementById("55").style.backgroundColor = "#363535";
        }

        if (blockNumber === "41") {
            document.getElementById("26").style.backgroundColor = "#363535";
            document.getElementById("35").style.backgroundColor = "#363535";
            document.getElementById("51").style.backgroundColor = "#363535";
            document.getElementById("58").style.backgroundColor = "#363535";
        }
        if (blockNumber === "42") {
            document.getElementById("25").style.backgroundColor = "#363535";
            document.getElementById("27").style.backgroundColor = "#363535";
            document.getElementById("36").style.backgroundColor = "#363535";
            document.getElementById("52").style.backgroundColor = "#363535";
            document.getElementById("57").style.backgroundColor = "#363535";
            document.getElementById("59").style.backgroundColor = "#363535";
        }
        if (blockNumber === "43") {
            document.getElementById("26").style.backgroundColor = "#363535";
            document.getElementById("28").style.backgroundColor = "#363535";
            document.getElementById("33").style.backgroundColor = "#363535";
            document.getElementById("37").style.backgroundColor = "#363535";
            document.getElementById("49").style.backgroundColor = "#363535";
            document.getElementById("53").style.backgroundColor = "#363535";
            document.getElementById("58").style.backgroundColor = "#363535";
            document.getElementById("60").style.backgroundColor = "#363535";
        }
        if (blockNumber === "44") {
            document.getElementById("27").style.backgroundColor = "#363535";
            document.getElementById("29").style.backgroundColor = "#363535";
            document.getElementById("34").style.backgroundColor = "#363535";
            document.getElementById("38").style.backgroundColor = "#363535";
            document.getElementById("50").style.backgroundColor = "#363535";
            document.getElementById("54").style.backgroundColor = "#363535";
            document.getElementById("59").style.backgroundColor = "#363535";
            document.getElementById("61").style.backgroundColor = "#363535";
        }
        if (blockNumber === "45") {
            document.getElementById("28").style.backgroundColor = "#363535";
            document.getElementById("30").style.backgroundColor = "#363535";
            document.getElementById("35").style.backgroundColor = "#363535";
            document.getElementById("39").style.backgroundColor = "#363535";
            document.getElementById("51").style.backgroundColor = "#363535";
            document.getElementById("55").style.backgroundColor = "#363535";
            document.getElementById("60").style.backgroundColor = "#363535";
            document.getElementById("62").style.backgroundColor = "#363535";
        }
        if (blockNumber === "46") {
            document.getElementById("29").style.backgroundColor = "#363535";
            document.getElementById("31").style.backgroundColor = "#363535";
            document.getElementById("36").style.backgroundColor = "#363535";
            document.getElementById("40").style.backgroundColor = "#363535";
            document.getElementById("52").style.backgroundColor = "#363535";
            document.getElementById("56").style.backgroundColor = "#363535";
            document.getElementById("61").style.backgroundColor = "#363535";
            document.getElementById("63").style.backgroundColor = "#363535";
        }
        if (blockNumber === "47") {
            document.getElementById("30").style.backgroundColor = "#363535";
            document.getElementById("32").style.backgroundColor = "#363535";
            document.getElementById("37").style.backgroundColor = "#363535";
            document.getElementById("53").style.backgroundColor = "#363535";
            document.getElementById("62").style.backgroundColor = "#363535";
            document.getElementById("64").style.backgroundColor = "#363535";
        }
        if (blockNumber === "48") {
            document.getElementById("31").style.backgroundColor = "#363535";
            document.getElementById("38").style.backgroundColor = "#363535";
            document.getElementById("54").style.backgroundColor = "#363535";
            document.getElementById("63").style.backgroundColor = "#363535";
        }

        if (blockNumber === "49") {
            document.getElementById("34").style.backgroundColor = "#363535";
            document.getElementById("43").style.backgroundColor = "#363535";
            document.getElementById("59").style.backgroundColor = "#363535";
        }
        if (blockNumber === "50") {
            document.getElementById("33").style.backgroundColor = "#363535";
            document.getElementById("35").style.backgroundColor = "#363535";
            document.getElementById("44").style.backgroundColor = "#363535";
            document.getElementById("60").style.backgroundColor = "#363535";
        }
        if (blockNumber === "51") {
            document.getElementById("34").style.backgroundColor = "#363535";
            document.getElementById("36").style.backgroundColor = "#363535";
            document.getElementById("41").style.backgroundColor = "#363535";
            document.getElementById("45").style.backgroundColor = "#363535";
            document.getElementById("57").style.backgroundColor = "#363535";
            document.getElementById("61").style.backgroundColor = "#363535";
        }
        if (blockNumber === "52") {
            document.getElementById("35").style.backgroundColor = "#363535";
            document.getElementById("37").style.backgroundColor = "#363535";
            document.getElementById("42").style.backgroundColor = "#363535";
            document.getElementById("46").style.backgroundColor = "#363535";
            document.getElementById("58").style.backgroundColor = "#363535";
            document.getElementById("62").style.backgroundColor = "#363535";
        }
        if (blockNumber === "53") {
            document.getElementById("36").style.backgroundColor = "#363535";
            document.getElementById("38").style.backgroundColor = "#363535";
            document.getElementById("43").style.backgroundColor = "#363535";
            document.getElementById("47").style.backgroundColor = "#363535";
            document.getElementById("59").style.backgroundColor = "#363535";
            document.getElementById("63").style.backgroundColor = "#363535";
        }
        if (blockNumber === "54") {
            document.getElementById("37").style.backgroundColor = "#363535";
            document.getElementById("39").style.backgroundColor = "#363535";
            document.getElementById("44").style.backgroundColor = "#363535";
            document.getElementById("48").style.backgroundColor = "#363535";
            document.getElementById("60").style.backgroundColor = "#363535";
            document.getElementById("64").style.backgroundColor = "#363535";
        }
        if (blockNumber === "55") {
            document.getElementById("38").style.backgroundColor = "#363535";
            document.getElementById("40").style.backgroundColor = "#363535";
            document.getElementById("45").style.backgroundColor = "#363535";
            document.getElementById("61").style.backgroundColor = "#363535";
        }

        if (blockNumber === "56") {
            document.getElementById("39").style.backgroundColor = "#363535";
            document.getElementById("46").style.backgroundColor = "#363535";
            document.getElementById("62").style.backgroundColor = "#363535";
        }

        if (blockNumber === "57") {
            document.getElementById("42").style.backgroundColor = "#363535";
            document.getElementById("51").style.backgroundColor = "#363535";
        }
        if (blockNumber === "58") {
            document.getElementById("41").style.backgroundColor = "#363535";
            document.getElementById("43").style.backgroundColor = "#363535";
            document.getElementById("52").style.backgroundColor = "#363535";
        }
        if (blockNumber === "59") {
            document.getElementById("42").style.backgroundColor = "#363535";
            document.getElementById("44").style.backgroundColor = "#363535";
            document.getElementById("49").style.backgroundColor = "#363535";
            document.getElementById("53").style.backgroundColor = "#363535";
        }
        if (blockNumber === "60") {
            document.getElementById("43").style.backgroundColor = "#363535";
            document.getElementById("45").style.backgroundColor = "#363535";
            document.getElementById("50").style.backgroundColor = "#363535";
            document.getElementById("54").style.backgroundColor = "#363535";
        }
        if (blockNumber === "61") {
            document.getElementById("44").style.backgroundColor = "#363535";
            document.getElementById("46").style.backgroundColor = "#363535";
            document.getElementById("51").style.backgroundColor = "#363535";
            document.getElementById("55").style.backgroundColor = "#363535";
        }
        if (blockNumber === "62") {
            document.getElementById("45").style.backgroundColor = "#363535";
            document.getElementById("47").style.backgroundColor = "#363535";
            document.getElementById("52").style.backgroundColor = "#363535";
            document.getElementById("56").style.backgroundColor = "#363535";
        }
        if (blockNumber === "63") {
            document.getElementById("46").style.backgroundColor = "#363535";
            document.getElementById("48").style.backgroundColor = "#363535";
            document.getElementById("53").style.backgroundColor = "#363535";
        }

        if (blockNumber === "64") {
            document.getElementById("47").style.backgroundColor = "#363535";
            document.getElementById("54").style.backgroundColor = "#363535";
        }
    }
};

const Chessboard = () => {
    return (
        <div className="wrapper">
            <h1>Knight Moves</h1>
            <p>Possible moves of the knight are highlighted!</p>
            <div className="chessboard">
                <div className="white" id="1" onClick={clickHandler}></div>
                <div className="black" id="2" onClick={clickHandler}></div>
                <div className="white" id="3" onClick={clickHandler}></div>
                <div className="black" id="4" onClick={clickHandler}></div>
                <div className="white" id="5" onClick={clickHandler}></div>
                <div className="black" id="6" onClick={clickHandler}></div>
                <div className="white" id="7" onClick={clickHandler}></div>
                <div className="black" id="8" onClick={clickHandler}></div>

                <div className="black" id="9" onClick={clickHandler}></div>
                <div className="white" id="10" onClick={clickHandler}></div>
                <div className="black" id="11" onClick={clickHandler}></div>
                <div className="white" id="12" onClick={clickHandler}></div>
                <div className="black" id="13" onClick={clickHandler}></div>
                <div className="white" id="14" onClick={clickHandler}></div>
                <div className="black" id="15" onClick={clickHandler}></div>
                <div className="white" id="16" onClick={clickHandler}></div>

                <div className="white" id="17" onClick={clickHandler}></div>
                <div className="black" id="18" onClick={clickHandler}></div>
                <div className="white" id="19" onClick={clickHandler}></div>
                <div className="black" id="20" onClick={clickHandler}></div>
                <div className="white" id="21" onClick={clickHandler}></div>
                <div className="black" id="22" onClick={clickHandler}></div>
                <div className="white" id="23" onClick={clickHandler}></div>
                <div className="black" id="24" onClick={clickHandler}></div>

                <div className="black" id="25" onClick={clickHandler}></div>
                <div className="white" id="26" onClick={clickHandler}></div>
                <div className="black" id="27" onClick={clickHandler}></div>
                <div className="white" id="28" onClick={clickHandler}></div>
                <div className="black" id="29" onClick={clickHandler}></div>
                <div className="white" id="30" onClick={clickHandler}></div>
                <div className="black" id="31" onClick={clickHandler}></div>
                <div className="white" id="32" onClick={clickHandler}></div>

                <div className="white" id="33" onClick={clickHandler}></div>
                <div className="black" id="34" onClick={clickHandler}></div>
                <div className="white" id="35" onClick={clickHandler}></div>
                <div className="black" id="36" onClick={clickHandler}></div>
                <div className="white" id="37" onClick={clickHandler}></div>
                <div className="black" id="38" onClick={clickHandler}></div>
                <div className="white" id="39" onClick={clickHandler}></div>
                <div className="black" id="40" onClick={clickHandler}></div>

                <div className="black" id="41" onClick={clickHandler}></div>
                <div className="white" id="42" onClick={clickHandler}></div>
                <div className="black" id="43" onClick={clickHandler}></div>
                <div className="white" id="44" onClick={clickHandler}></div>
                <div className="black" id="45" onClick={clickHandler}></div>
                <div className="white" id="46" onClick={clickHandler}></div>
                <div className="black" id="47" onClick={clickHandler}></div>
                <div className="white" id="48" onClick={clickHandler}></div>

                <div className="white" id="49" onClick={clickHandler}></div>
                <div className="black" id="50" onClick={clickHandler}></div>
                <div className="white" id="51" onClick={clickHandler}></div>
                <div className="black" id="52" onClick={clickHandler}></div>
                <div className="white" id="53" onClick={clickHandler}></div>
                <div className="black" id="54" onClick={clickHandler}></div>
                <div className="white" id="55" onClick={clickHandler}></div>
                <div className="black" id="56" onClick={clickHandler}></div>

                <div className="black" id="57" onClick={clickHandler}></div>
                <div className="white" id="58" onClick={clickHandler}></div>
                <div className="black" id="59" onClick={clickHandler}></div>
                <div className="white" id="60" onClick={clickHandler}></div>
                <div className="black" id="61" onClick={clickHandler}></div>
                <div className="white" id="62" onClick={clickHandler}></div>
                <div className="black" id="63" onClick={clickHandler}></div>
                <div className="white" id="64" onClick={clickHandler}></div>
            </div>
        </div>
    );
};

export default Chessboard;
