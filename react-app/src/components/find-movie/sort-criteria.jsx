import React, { Component } from 'react';

export default class SearchCriteria extends Component {
    changeSortCriteria(event) {
        this.props.changeSort(event.target.id);
    }

    render() {
        const { criteria, movieFound } = this.props;
        return (
            <div>
                {movieFound !== 0 && <span>{movieFound} movie found</span>}
                <span>Sort By</span>
                {criteria.map((item, i) => (
                    <div key={i} id={i}
                        onClick={this.changeSortCriteria.bind(this)}
                        className={item.active ? 'genre-active' : ''}>
                        {item.text}
                    </div>
                ))}
            </div>
        );
    }
}
