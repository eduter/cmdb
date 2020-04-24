import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../store/types';
import { updateMoviesFilter } from '../store/ducks/filter/actions';
import Icon from './Icon';
import styled from 'styled-components';


interface FilterInputProps extends ConnectedProps<typeof connector> {
}

function FilterInput({ searchQuery, updateFilter }: FilterInputProps) {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFilter(event.target.value);
  };

  return (
    <Wrapper>
      <input type="text" placeholder="Filter..." value={searchQuery} onChange={onChangeHandler}/>
      <Icon image="searchIcon"/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0.5em 0;
`;

function mapStateToProps(state: RootState) {
  return {
    searchQuery: state.filter.searchQuery
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateFilter: (seachQuery: string) => dispatch(updateMoviesFilter(seachQuery))
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);


export default connector(FilterInput);
export { FilterInput };
