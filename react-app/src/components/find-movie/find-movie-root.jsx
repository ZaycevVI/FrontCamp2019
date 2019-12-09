import React, { Component } from 'react';
import SearchCriteria from './search-criteria';
import SortCriteria from './sort-criteria';
import MovieList from './movie-list';
import { connect } from 'react-redux';
import { changeSearchCriteria, searchConfirmed } from '../../store/find-movie/search-criteria/actions'
import { changeSortCriteria } from '../../store/find-movie/sort-criteria/actions'
import { searchMovieById } from '../../store/movie/movie-item/action'

class FindMovieRoot extends Component {


    render() {
        const { searchValue, sortCriteria, searchConfirmed, movieFound,
            searchCriteria, searchMovieById, changeSearchCriteria,
            changeSortCriteria, films } = this.props;

        return (
            <div>
                <SearchCriteria value={searchValue}
                    search={searchCriteria}
                    sort={sortCriteria}
                    changeCriteria={changeSearchCriteria}
                    searchConfirmed={searchConfirmed} />
                <SortCriteria criteria={sortCriteria}
                    movieFound={movieFound}
                    changeSort={changeSortCriteria} />
                <MovieList films={films.data} searchMovie={searchMovieById} />
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
    searchConfirmed,
    searchMovieById
};

export default connect(mapStateToProps, mapDispatchToProps)(FindMovieRoot);
