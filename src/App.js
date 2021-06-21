import aboutpic from './img/content/me.jpg';
import careerpic from './img/content/car.jpg';
import './App.css';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Switch, Route, Link } from "react-router-dom";
import {HashRouter} from 'react-router-dom';



function App() {
	return (
		<div>
		<Router>
		<Switch>
        	<Route exact path="/" component={About}></Route>
			<Route path="/about" component={About}></Route>
			<Route path="/career" component={Career}></Route>
		</Switch>
		</Router>
		</div>
	)
}

class About extends Component {
	constructor(){
		super();
		this.state = {
			value: null,
		};
		};
		render() {
	return (
		<div className="Bio">
		<div className="wrapper">
		<div className="maincontent">
			<header className="header">
				<div className="container">
					<div className="header__left">
						<div  className="user">
							<div className="user__avatar"></div>
							<div className="user__username">Артем Билдаев</div>
						</div>
					</div>
					<div className="header__right">
						<div className="contacts">
								<a href="#" className="contacts__link">Мои контакты</a>
								<ul className="contacts__dropdown">
									<li className="contacts__dropdown-item"></li>
									<li className="contacts__dropdown-item"></li>
									<li className="contacts__dropdown-item"></li>
								</ul>
							</div>
					</div>
				</div>
			</header>
		</div>
		<div className="content">
			<div className="container">
				<aside className="sidebar">
					<nav className="nav">
						<ul className="nav__list">
							<li className="nav__item nav__item_active">
							<Router><Link className="nav__link nav__link_active" to="/about"><span className="nav__link-text">Обо мне</span></Link></Router>
							</li>
							<li className="nav__item nav__item_active">
              <Router><Link className="nav__link nav__link_active" to="/career"><span className="nav__link-text">Карьера</span></Link></Router>
            	</li>
							<li className="nav__item">
								<a href="#3" className="nav__link nav__link_active"><span className="nav__link-text">	
						 Портфолио</span></a>
							</li>
						</ul>
					</nav>
				</aside>
				<main className="page-content">
					<div className="about">
						<div className="about__left">
							<div className="about__pic">
								<img src={aboutpic} className="about__pic-img"/>
							</div>
						</div>
						<div className="about__right">
							<div className="title">
								Обо мне
							</div>
							<div className="about__desc">
								<p>
									Меня зовут Артём. На данный момент проживаю в Москве, с детства развиваюсь в сфере интернета, с головой увлёкаюсь этой темой.
								</p>
								<p>
									С недавних пор, начал активное изучение сферы веб-разработки, изучаю языки html,css,JS на этом конечно не собираюсь останавливаться, а буду стараться добиться ещё больших результатов! Готов саморазвиваться и улучшать свои навыки в этом направлении.
								</p>
							</div>
							<div className="about__btns">
								<a href="#" className="btn">
									<span className="btn__icon"><span className="btn__text">
										Скачать резюме
									</span>
								</span>
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
		<div className="empty"></div>
	</div>
	<footer className="footer">
		<div className="container">
			<div className="footer__left">
					&#xA9; Дизайн сайта был разработан Билдаевым Артемом
			</div>
			<div className="footer__right">
				<ul className="socials">
					<li className="socials__item">
						<li className="socials__item">
						<a href="https://twitter.com/" target="_blank" className="socials__link socials__link_tw"></a>
					</li>
						<a href="https://ru-ru.facebook.com/" target="_blank" className="socials__link socials__link_fb"></a>
					</li>
					<li className="socials__item">
						<a href="https://vk.com/feed" target="_blank" className="socials__link socials__link_vk"></a>
					</li>			
				</ul>
			</div>
		</div>
	</footer>
	
	</div>
	)
}}

class Career extends Component{
	constructor(){
		super();
		this.state = {
			value: null,
		};
		};
		render() {
	return (
		<div className="Career">
		<div className="wrapper">
		<div className="maincontent">
			<header className="header">
				<div className="container">
					<div className="header__left">
						<div  className="user">
							<div className="user__avatar"></div>
							<div className="user__username">Артем Билдаев</div>
						</div>
					</div>
					<div className="header__right">
						<div className="contacts">
								<a href="#" className="contacts__link">Мои контакты</a>
								<ul className="contacts__dropdown">
									<li className="contacts__dropdown-item"></li>
									<li className="contacts__dropdown-item"></li>
									<li className="contacts__dropdown-item"></li>
								</ul>
							</div>
					</div>
				</div>
			</header>
		</div>
		<div class="content">
			<div class="container">
				<aside class="sidebar">
					<nav class="nav">
						<ul class="nav__list">
						<li className="nav__item nav__item_active">
							<Router><Link className="nav__link nav__link_active" to="/about"><span className="nav__link-text">Обо мне</span></Link></Router>
							</li>
							<li className="nav__item nav__item_active">
              <Router><Link className="nav__link nav__link_active" to="/career"><span className="nav__link-text">Карьера</span></Link></Router>
            	</li>
							<li class="nav__item">
								<a href="#3" class="nav__link nav__link_active"><span class="nav__link-text">	
						 Портфолио</span></a>
							</li>
						</ul>
					</nav>
				</aside>
				<main class="page-content">
					<div class="about">
						<div class="about__left">
							<div class="about__title"><span>Карьерный путь</span></div>
							<div class="about_car__pic">
								<img src={careerpic} className="about_car__pic-img"/>
							</div>
						</div>
						<div class="about__right">
							<div class="title">
							</div>
							<ul class="career__list">
								<li class="career__item">
									<div class="career__block">
										<div class="career__title">
											ПАО "МТС"
										</div>
										<div class="career__occ">
											Модератор сайта WASD-TV
										</div>
										<div class="career__date">
											2020-Настоящее время
										</div>
										<div class="career__year">
											2020
										</div>
									</div>
								</li>
								<li class="career__item">
									<div class="career__block">
										<div class="career__title">
											РТУ МИРЭА - Российский технологический университет
										</div>
										<div class="career__occ">
											Студент
										</div>
										<div class="career__date">
											2020-Настоящее время
										</div>
										<div class="career__year">
											2020
										</div>
									</div>
								</li>
								<li class="career__item">
									<div class="career__block">
										<div class="career__title">
											МБОУ Лицей-интернат N1
										</div>
										<div class="career__occ">
											Ученик
										</div>
										<div class="career__date">
											2014-2019
										</div>
										<div class="career__year">
											2014
										</div>
									</div>
								</li>
							</ul>
							</div>
						</div>
				</main>
			</div>
		</div>
		<div className="empty"></div>
	</div>
	<footer className="footer">
		<div className="container">
			<div className="footer__left">
					&#xA9; Дизайн сайта был разработан Билдаевым Артемом
			</div>
			<div className="footer__right">
				<ul className="socials">
					<li className="socials__item">
						<li className="socials__item">
						<a href="https://twitter.com/" target="_blank" className="socials__link socials__link_tw"></a>
					</li>
						<a href="https://ru-ru.facebook.com/" target="_blank" className="socials__link socials__link_fb"></a>
					</li>
					<li className="socials__item">
						<a href="https://vk.com/feed" target="_blank" className="socials__link socials__link_vk"></a>
					</li>			
				</ul>
			</div>
		</div>
	</footer>
	</div>

	
	)
}}

export default App;
ReactDOM.render(<Router />, document.getElementById("root"));

