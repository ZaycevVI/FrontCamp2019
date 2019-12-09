import React, { Component } from 'react';

export default class SearchCriteria extends Component {
    changeSortCriteria(event) {
        this.props.changeSort(event.target.id);
    }

    render() {
        const { criteria, movieFound } = this.props;
        return (
            <div className="sort-container">
                <div className="film-info">
                    {movieFound !== 0 && <span>{movieFound} movies found</span>}
                </div>
                <div className="sort-criteria">
                    <span>Sort By: </span>
                    {criteria.map((item, i) => (
                        <button type="button" key={item.id} id={item.id}
                            onClick={this.changeSortCriteria.bind(this)}
                            className={`btn ${item.active ? 'btn-danger' : 'btn-secondary'}`}>
                            {item.text}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}
