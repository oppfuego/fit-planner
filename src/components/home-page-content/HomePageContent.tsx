import React from 'react';
import "./HomePageContent.scss"
import fitnesCentr from "../../assets/fitnescentr.jpg";

const HomePageContent = () => {
    return (
        <div className="content">
            <div className="left-nav-bar">
                <h1 className="left-nav-bar__headline">
                    Choose your coach and follow your dreams together
                </h1>

                <h2 className="headline">Фільтр за напрямками:</h2>
                <ul className="left-nav-bar__content-section">
                    {['Йога', 'Фітнес', 'Кардіо', 'Силові тренування', 'Пілатес', 'Аеробіка'].map(item => (
                        <label
                            key={item}
                            className="left-nav-bar__list"
                        >
                            <input
                                type="checkbox"
                            />
                            {item}
                        </label>
                    ))}
                </ul>

                <h2 className="headline">Спеціальні пропозиції:</h2>
                <ul className="left-nav-bar__content-section">
                    {['Скидка 20% на перше відвідування', 'Акції для студентів', 'Абонемент на 3 місяці зі знижкою'].map(item => (
                        <label
                            key={item}
                            className="left-nav-bar__list"
                        >
                            <input
                                type="checkbox"
                            />
                            {item}
                        </label>
                    ))}
                </ul>
            </div>

            <div className="content__middle">
                <div className="content__image">
                    <img src={fitnesCentr} alt="Fitness Center" className="fitness-centr-img"/>
                </div>
                <div className="content__text">
                    <h1 className="content__headline">Ласкаво просимо до нашого фітнес-центру!</h1>
                    <p className="content__paragraph">
                        Наша місія — допомогти вам досягти ваших спортивних цілей, незалежно від рівня підготовки. У
                        нашому фітнес-центрі ми пропонуємо сучасні зали з найновішим обладнанням, професійних
                        тренерів і
                        комфортну атмосферу для тренувань.</p>
                </div>

            </div>

            <div className="right-nav-bar">
                <div className="right-nav-bar__user-info">
                    <h2 className="headline">Час роботи:</h2>
                    <p>Пн-Пт: 7:00 - 21:00</p>
                    <p>Сб: 9:00 - 19:00</p>
                    <p>Нд: вихідний</p>

                    <h2 className="headline">Контактна інформація:</h2>
                    <p>Адреса: м. Київ, вул. Фітнесна, 10</p>
                    <p>Телефон: +380 123 456 789</p>
                    <p>Email: info@fitness.com.ua</p>
                </div>

                <div className="right-nav-bar__user-info">
                    <h2 className="headline">Форма для швидкого запису:</h2>
                    <form>
                        <input type="text" placeholder="Ім'я" required/>
                        <input type="tel" placeholder="Телефон" required/>
                        <input type="text" placeholder="Бажаний час" required/>
                        <button type="submit">Записатись</button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default HomePageContent;