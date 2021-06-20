import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
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
							<a href="#1" className="nav__link nav__link_active">
								<span className="nav__link-text">	
&#9742; &#8201;&#8201;Обо мне</span></a>
						</li>
						<li className="nav__item">
							<a href="career.html" className="nav__link nav__link_active"><span className="nav__link-text">	
&#128640;&#8201;&#8201; Карьерный путь.</span></a>
						</li>
						<li className="nav__item">
							<a href="#3" className="nav__link nav__link_active"><span className="nav__link-text">	
&#128188;&#8201;&#8201; Портфолио</span></a>
						</li>
					</ul>
				</nav>
			</aside>
			<main className="page-content">
				<div className="about">
					<div className="about__left">
						<div className="about__pic">
							<img src="img/content/me.jpg" className="about__pic-img"/>
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
    </div>
  );
}

export default App;

