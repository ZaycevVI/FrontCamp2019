import React, { Component } from 'react';

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
        const { value, search } = this.props;

        return (
            <div>
                <div>Find Your Movie</div>
                <div>
                    <input ref="input" defaultValue={value} />
                    <button onClick={this.onSearchSubmit.bind(this)}>Search</button>
                </div>
                <div>
                    <span>Search by</span>
                    {search.map((item, i) => (
                        <div key={i} id={i}
                            className={item.active ? 'genre-active' : ''}
                            onClick={this.onCriteriaChange.bind(this)}>{item.text}</div>
                    ))}
                </div>
            </div>
        );
    }
}
