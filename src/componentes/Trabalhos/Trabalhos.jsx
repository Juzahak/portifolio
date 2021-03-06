import { useState } from 'react';
import './Trabalhos.scss'

export default function Trabalhos() {

    const [curentSlider, setCurrentSlider] = useState(0)

    const data = [
        {
            id: "1",
            icon: require("../../assets/writing.png"),
            title: "Cursos Realizados",
            desc: <ul className="lista">
                <li>★ HTML5 e CSS3</li>
                <li>★ JAVASCRIPT</li>
                <li>★ REACT</li>
                <li>★ WORDPRESS/PHP</li>
                <li>★ JQUERY</li>
            </ul>,
            img: require("../../assets/cursosalura.png"),
            curso: "Alura",
 
            listinha: <ul className="lista">
                <li>★ HTML5 e CSS3</li>
                <li>★ JAVASCRIPT</li>
                <li>★ REACT</li>
                <li>★ WORDPRESS/PHP</li>
                <li>★ JQUERY</li>
            </ul>

        },
        {
            id: "2",
            icon: require("../../assets/writing.png"),
            title: "Em andamento",
            desc: <ul className="lista">
                <li>★ A cursar</li>
                <li>★ FULL STACK</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>,
            img: require("../../assets/udemyjs.png"),
            curso: "Udemy",
            listinha: <ul className="lista">
                <li>★ A cursar</li>
                <li>★ FULL STACK</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        },
        {
            id: "3",
            icon: require("../../assets/writing.png"),
            title: "Em andamento",
            desc: <ul className="lista">
                <li>★ A cursar</li>
                <li>★ REACT</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>,
            img: require("../../assets/udemyreact.png"),
            curso: "Udemy",
            listinha: <ul className="lista">
                <li>★ A cursar</li>
                <li>★ REACT</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlider(curentSlider > 0 ? curentSlider - 1 : 2)
            : setCurrentSlider(curentSlider < data.length - 1 ? curentSlider + 1 : 0)
    };

    return (
        <div className="trabalhos" id="trabalhos">
            <div className="slider" style={{ transform: `translateX(-${curentSlider * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>{d.curso}</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                                <ul className="lista">{d.listinha}</ul>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <img src={require("../../assets/arrow.png")} className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src={require("../../assets/arrow.png")} className="arrow right" alt="" onClick={() => handleClick("right")} />
        </div>
    )
}
