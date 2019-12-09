import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SearchCriteria extends Component {
    onCriteriaChange(event) {
        this.props.changeCriteria(event.target.id);
    }

    onSearchSubmit() {
        let { search, sort } = this.props;
        search = search.find(i => i.active);
        sort = sort.find(i => i.active);

        this.props.searchConfirmed({
            search: search.id,
            value: this.refs.input.value,
            sort: sort.id
        });
    }

    render() {
        const { search } = this.props;
        return (
            <div className="search-container">
                <span className="red-text"><b>netflix</b>roulette</span>
                <div>
                    <div className="search-input">
                        <span className="white-text">Find Your Movie</span>
                        <div className="input-group">
                            <input ref="input" type="text" className="form-control" placeholder="Search film" />
                            <div className="input-group-append">
                                <button className="btn btn-danger" type="button" onClick={this.onSearchSubmit.bind(this)}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="search-criteria">
                        <span className="white-text">Search by: </span>
                        {search.map(item => (
                            <button type="button" key={item.id} id={item.id}
                                className={`btn ${(item.active ? 'btn-danger' : 'btn-secondary')}`}
                                onClick={this.onCriteriaChange.bind(this)}>{item.text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>


        );
    }
}
