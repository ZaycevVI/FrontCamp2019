import React, { Component } from 'react';

export default class FilmContainer extends Component {
    render() {
        const { films } = this.props;

        return (
            <div>
                {films.length === 0 && <div>No Films Found</div>}
                {films.length !== 0 && films.map((item, i) => {
                    const genre = item.genre || [];
                    return (
                        <div key={item.id} id={item.id}>
                            <div>{item.title}</div>
                            <div>{genre.reduce((acc, j) => acc += `& ${j}`, '')}</div>
                            <div>{item.release_date}</div>
                            <img src={item.poster_path} alt="No img provided"></img>
                        </div>);
                }
                )}
            </div>
        );
    }
}
