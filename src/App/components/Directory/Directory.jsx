import React from 'react';
import MenuItem from '../MenuItem';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../../redux/directory/directorySelectors';
import { createStructuredSelector } from 'reselect';

const Directory =({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map(({title, ...otherProps}) => (
        <MenuItem title={title} {...otherProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);