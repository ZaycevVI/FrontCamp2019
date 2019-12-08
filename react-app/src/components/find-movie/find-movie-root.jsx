import React, { Component } from 'react';
import SearchCriteria from './search-criteria';
import SortCriteria from './sort-criteria';
import FilmContainer from './film-container';
import { connect } from 'react-redux';
import { changeSearchCriteria, searchConfirmed } from '../../store/find-movie/search-criteria/actions'
import { changeSortCriteria } from '../../store/find-movie/sort-criteria/actions'

class FindMovieRoot extends Component {
    render() {
        return (
            <div>
                <SearchCriteria value={this.props.searchValue}
                    search={this.props.searchCriteria}
                    sort={this.props.sortCriteria}
                    changeCriteria={this.props.changeSearchCriteria}
                    searchConfirmed={this.props.searchConfirmed} />
                <SortCriteria criteria={this.props.sortCriteria}
                    movieFound={this.props.movieFound}
                    changeSort={this.props.changeSortCriteria} />
                <FilmContainer films={this.props.films.data} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchValue: state.search.value,
        searchCriteria: state.search.criteria,
        sortCriteria: state.sort.criteria,
        movieFound: state.sort.found,
        films: state.films
    };
};

const mapDispatchToProps = {
    changeSearchCriteria,
    changeSortCriteria,
    searchConfirmed
};

export default connect(mapStateToProps, mapDispatchToProps)(FindMovieRoot);
